import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { found: false, message: "Phone required" },
        { status: 400 }
      );
    }

    const [rows] = await pool.execute(
      `SELECT 
        name,
        doctor,
        appointment_date,
        appointment_time,
        status
       FROM appointments
       WHERE phone = ?
       ORDER BY appointment_date DESC`,
      [phone]
    );

    return NextResponse.json({
      found: rows.length > 0,
      appointments: rows,
    });

  } catch (error) {
    console.error("STATUS CHECK ERROR:", error);
    return NextResponse.json(
      { found: false, message: "Server error" },
      { status: 500 }
    );
  }
}
