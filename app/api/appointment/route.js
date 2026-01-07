import pool from "@/lib/db";
import { NextResponse } from "next/server";
import {
  sendAdminEmail,
  sendUserEmail,
  sendApprovalEmail,
} from "@/lib/email";

/* ================= POST ================= */
export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, doctor, date, time, message } = body;

    await pool.execute(
      `INSERT INTO appointments
      (name, email, phone, doctor, appointment_date, appointment_time, message, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')`,
      [name, email, phone, doctor, date, time, message]
    );

    await sendAdminEmail(body);
    await sendUserEmail(body);

    return NextResponse.json({ message: "Appointment booked" });
  } catch (err) {
    console.error("POST Appointment Error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

/* ================= GET ================= */
export async function GET() {
  try {
    const [rows] = await pool.execute(
      "SELECT * FROM appointments ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (err) {
    console.error("GET Appointment Error:", err);
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}

/* ================= PUT (Approve) ================= */
export async function PUT(req) {
  try {
    const { id } = await req.json();

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

    await pool.execute(
      "UPDATE appointments SET status='Approved' WHERE id=?",
      [id]
    );

    await sendApprovalEmail(rows[0]);

    return NextResponse.json({ message: "Approved" });
  } catch (err) {
    console.error("PUT Error:", err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

/* ================= DELETE ================= */
export async function DELETE(req) {
  try {
    const { id } = await req.json();
    await pool.execute("DELETE FROM appointments WHERE id=?", [id]);
    return NextResponse.json({ message: "Deleted" });
  } catch (err) {
    return NextResponse.json(
      { message: "DB Error" },
      { status: 500 }
    );
  }
}
