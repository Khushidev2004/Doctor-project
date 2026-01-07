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

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message);
      setLoading(false);
      return;
    }

    alert("✅ Appointment Booked");
    setForm({
      name: "", email: "", phone: "", doctor: "", date: "", time: "", message: ""
    });
    setLoading(false);
  };

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-6 space-y-4">
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="doctor" placeholder="Doctor" value={form.doctor} onChange={handleChange} required />
      <input type="date" name="date" value={form.date} onChange={handleChange} required />
      <input type="time" name="time" value={form.time} onChange={handleChange} required />
      <textarea name="message" value={form.message} onChange={handleChange} />

      <button disabled={loading}>
        {loading ? "Booking..." : "Book Appointment"}
      </button>
    </form>
  );
}
