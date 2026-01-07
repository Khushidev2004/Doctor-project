import pool from "@/lib/db";
import { NextResponse } from "next/server";
import {
  sendAdminEmail,
  sendUserEmail,
  sendApprovalEmail,
} from "@/lib/email";

/* ======================
   POST: Save Appointment
====================== */
export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, doctor, date, time, message } = body;

    // 🔴 1️⃣ Basic Validation
    if (!name || !email || !phone || !doctor || !date || !time) {
      return NextResponse.json(
        { message: "All required fields are mandatory" },
        { status: 400 }
      );
    }

    // 🔴 2️⃣ Save to Database (MOST IMPORTANT)
    await pool.execute(
      `INSERT INTO appointments
       (name, email, phone, doctor, date, time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, doctor, date, time, message || ""]
    );

    // 🟡 3️⃣ Emails (NON-BLOCKING)
    try {
      await sendAdminEmail({
        name,
        email,
        phone,
        doctor,
        date,
        time,
        message,
      });

      await sendUserEmail({
        name,
        email,
        doctor,
        date,
        time,
      });
    } catch (emailError) {
      console.error("EMAIL ERROR (ignored):", emailError);
      // ⛔ Email fail hone par bhi appointment SAVE rahegi
    }

    return NextResponse.json(
      { message: "Appointment booked successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST Appointment Error FULL:", error);

    return NextResponse.json(
      { message: error.message || "Server error" },
      { status: 500 }
    );
  }
}

/* ======================
   GET: Fetch Appointments
====================== */
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM appointments ORDER BY created_at DESC"
    );
    return NextResponse.json(rows, { status: 200 });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}

/* ======================
   PUT: Approve Appointment
====================== */
export async function PUT(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID required" },
        { status: 400 }
      );
    }

    const [rows] = await pool.execute(
      "SELECT * FROM appointments WHERE id=?",
      [id]
    );

    if (!rows.length) {
      return NextResponse.json(
        { message: "Appointment not found" },
        { status: 404 }
      );
    }

    const appointment = rows[0];

    await pool.execute(
      "UPDATE appointments SET status='Approved' WHERE id=?",
      [id]
    );

    try {
      await sendApprovalEmail({
        name: appointment.name,
        email: appointment.email,
        doctor: appointment.doctor,
        date: appointment.date,
        time: appointment.time,
      });
    } catch (emailError) {
      console.error("Approval email failed:", emailError);
    }

    return NextResponse.json(
      { message: "Appointment approved" },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

/* ======================
   DELETE: Delete Appointment
====================== */
export async function DELETE(request) {
  try {
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { message: "ID required" },
        { status: 400 }
      );
    }

    await pool.execute(
      "DELETE FROM appointments WHERE id=?",
      [id]
    );

    return NextResponse.json(
      { message: "Deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}
