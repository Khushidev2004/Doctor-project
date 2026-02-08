 export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import mysql from "mysql2/promise";

let pool;

function getPool() {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      waitForConnections: true,
      connectionLimit: 10,
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

    const db = getPool();

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
  } catch (error) {
    console.error("API ERROR:", error);
    return NextResponse.json({ found: false }, { status: 500 });
  }
}
