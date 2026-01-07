import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    let phone = searchParams.get("phone");

    if (!phone) {
      return NextResponse.json(
        { error: "Phone required" },
        { status: 400 }
      );
    }

    // ✅ IMPORTANT: clean phone (digits only)
    phone = phone.replace(/\D/g, "");

    const [rows] = await pool.execute(
      `SELECT 
         doctor,
         appointment_date,
         appointment_time,
         status
       FROM appointments
       WHERE phone = ?
       ORDER BY id DESC`,
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
    console.error("STATUS API ERROR:", error);
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
