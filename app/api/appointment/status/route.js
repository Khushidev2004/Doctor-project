import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json({ error: "Phone required" }, { status: 400 });
    }

    const [rows] = await pool.execute(
      `SELECT doctor, date, time, status
       FROM appointments
       WHERE phone=?
       ORDER BY created_at DESC`,
      [phone]
    );

    if (rows.length === 0) {
      return NextResponse.json({ found: false });
    }

    return NextResponse.json({
      found: true,
      appointments: rows,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
