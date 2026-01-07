"use client";
import { useState } from "react";

export default function AppointmentPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) return alert(data.message);

    alert("✅ Appointment Booked");
    setForm({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Book Appointment</h2>

        {["name", "email", "phone", "doctor"].map((f) => (
          <input
            key={f}
            name={f}
            value={form[f]}
            onChange={handleChange}
            placeholder={f}
            required
            className="w-full p-2 border rounded"
          />
        ))}

        <input type="date" name="date" value={form.date} onChange={handleChange} required className="w-full p-2 border rounded"/>
        <input type="time" name="time" value={form.time} onChange={handleChange} required className="w-full p-2 border rounded"/>

        <textarea name="message" value={form.message} onChange={handleChange} className="w-full p-2 border rounded" />

        <button
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          {loading ? "Booking..." : "Book"}
        </button>
      </form>
    </div>
  );
}
