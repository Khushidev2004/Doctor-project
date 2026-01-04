import pool from "@/lib/db";
import { NextResponse } from "next/server";
import {
  sendAdminEmail,
  sendUserEmail,
  sendApprovalEmail,
} from "@/lib/email";

/* ======================
   POST: Save Appointment
   - Save DB
   - Email Admin
   - Email User (Received)
====================== */
export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      doctor,
      date,
      time,
      message,
    } = body;

    // 1️⃣ Save to Database
    await pool.execute(
      `INSERT INTO appointments
       (name, email, phone, doctor, date, time, message)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, email, phone, doctor, date, time, message]
    );

    // 2️⃣ Email Admin
    await sendAdminEmail({
      name,
      email,
      phone,
      doctor,
      date,
      time,
      message,
    });

    // 3️⃣ Email User (confirmation)
    await sendUserEmail({
      name,
      email,
      doctor,
      date,
      time,
    });

    return NextResponse.json(
      { message: "Appointment saved & emails sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST Appointment Error:", error);
    return NextResponse.json(
      { message: "Server error" },
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
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}

/* ======================
   PUT: Approve Appointment
   - Update status
   - Email User (Approved)
====================== */
export async function PUT(request) {
  try {
    const { id } = await request.json();

    // 1️⃣ Get appointment details
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

    // 2️⃣ Update status
    await pool.execute(
      "UPDATE appointments SET status='Approved' WHERE id=?",
      [id]
    );

    // 3️⃣ Email User (approval notification)
    await sendApprovalEmail({
      name: appointment.name,
      email: appointment.email,
      doctor: appointment.doctor,
      date: appointment.date,
      time: appointment.time,
    });

    return NextResponse.json(
      { message: "Appointment approved & email sent" },
      { status: 200 }
    );
  } catch (error) {
    console.error("PUT Approve Error:", error);
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

    await pool.execute(
      "DELETE FROM appointments WHERE id=?",
      [id]
    );

    return NextResponse.json(
      { message: "Deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}
