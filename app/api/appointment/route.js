import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ found: false });
    }

    const [rows] = await pool.execute(
      `
      SELECT 
        doctor,
        appointment_date,
        appointment_time,
        status
      FROM appointments
      WHERE phone = ?
      ORDER BY created_at DESC
      `,
      [phone]
    );

    if (rows.length === 0) {
      return NextResponse.json({ found: false });
    }

    return NextResponse.json({
      found: true,
      appointments: rows,
    });
  } catch (err) {
    console.error("STATUS ERROR:", err);
    return NextResponse.json({ found: false }, { status: 500 });
  }
}
