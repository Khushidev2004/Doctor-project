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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      alert("✅ Appointment Booked Successfully");

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
      alert("Network error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-8 md:p-10">

        {/* HEADER */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Appointment
          </h1>
          <p className="text-gray-500 mt-2">
            Khushi Clinic – Easy & Fast Booking
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-5">

          <Input label="Full Name" name="name" value={form.name} onChange={handleChange} />
          <Input label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} />
          <Input label="Phone Number" name="phone" value={form.phone} onChange={handleChange} />

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Select Doctor
            </label>
            <select
              name="doctor"
              value={form.doctor}
              onChange={handleChange}
              required
              className="w-full h-12 rounded-xl border border-gray-300 px-4
              focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none"
            >
              <option value="">Choose Doctor</option>
              <option value="Dr. Khushi">Dr. Khushi (General)</option>
              <option value="Dr. Amit">Dr. Amit (Cardiologist)</option>
              <option value="Dr. Neha">Dr. Neha (Pediatrician)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="Preferred Date" name="date" type="date" value={form.date} onChange={handleChange} />
            <Input label="Preferred Time" name="time" type="time" value={form.time} onChange={handleChange} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message (optional)
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="3"
              className="w-full rounded-xl border border-gray-300 px-4 py-2
              focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none"
              placeholder="Describe your concern..."
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700
            text-white font-bold text-lg shadow-md hover:shadow-lg
            hover:-translate-y-0.5 transition-all disabled:opacity-50"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>

          <p className="text-xs text-gray-400 text-center">
            By booking, you agree to our Terms & Conditions
          </p>
        </form>
      </div>
    </main>
  );
}

/* REUSABLE INPUT */
function Input({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        className="w-full h-12 rounded-xl border border-gray-300 px-4
        focus:ring-2 focus:ring-blue-400 focus:border-blue-500 outline-none"
      />
    </div>
  );
}
