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

  // ✅ HANDLE CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form), // ✅ FIXED
      });

      const data = await res.json();

      console.log("STATUS:", res.status);
      console.log("RESPONSE:", data);

      if (!res.ok) {
        alert(data.message || "Failed");
        setLoading(false);
        return;
      }

      alert("✅ Appointment Booked Successfully");

      // reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        doctor: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (err) {
      console.error("FRONTEND ERROR:", err);
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" required />
      <input name="doctor" value={form.doctor} onChange={handleChange} placeholder="Doctor" required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />
      <textarea name="message" value={form.message} onChange={handleChange} />

      <button disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}
