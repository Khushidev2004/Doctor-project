export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

let pool;

async function getPool() {
  if (!pool) {
    const mysql = (await import("mysql2/promise")).default;

    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT,
    });
  }
  return pool;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ found: false });
    }

    const db = await getPool();

    const [rows] = await db.execute(
      `SELECT doctor, appointment_date, appointment_time, status
       FROM appointments
       WHERE phone = ?
       ORDER BY created_at DESC`,
      [phone]
    );

    return NextResponse.json({
      found: rows.length > 0,
      appointments: rows,
    });
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json({ found: false }, { status: 500 });
  }
}
