import pool from "@/lib/db";
import { NextResponse } from "next/server";
import { sendAdminEmail, sendUserEmail, sendApprovalEmail } from "@/lib/email";

export async function POST(req) {
  try {
    const { name, email, phone, doctor, date, time, message } =
      await req.json();

    await pool.execute(
      `INSERT INTO appointments
      (name, email, phone, doctor, appointment_date, appointment_time, message, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, 'Pending')`,
      [name, email, phone, doctor, date, time, message]
    );

    await sendAdminEmail({ name, email, phone, doctor, date, time, message });
    await sendUserEmail({ name, email, doctor, date, time });

    return NextResponse.json({ message: "Appointment booked" });
  } catch (err) {
    console.error("POST Appointment Error:", err);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

export async function GET() {
  const [rows] = await pool.execute(
    "SELECT * FROM appointments ORDER BY id DESC"
  );
  return NextResponse.json(rows);
}

export async function PUT(req) {
  const { id } = await req.json();

  const [rows] = await pool.execute(
    "SELECT * FROM appointments WHERE id=?",
    [id]
  );

  if (!rows.length)
    return NextResponse.json({ message: "Not found" }, { status: 404 });

  await pool.execute(
    "UPDATE appointments SET status='Approved' WHERE id=?",
    [id]
  );

  await sendApprovalEmail(rows[0]);

  return NextResponse.json({ message: "Approved" });
}

export async function DELETE(req) {
  const { id } = await req.json();
  await pool.execute("DELETE FROM appointments WHERE id=?", [id]);
  return NextResponse.json({ message: "Deleted" });
}
