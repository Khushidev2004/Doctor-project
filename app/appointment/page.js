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

    try {
      const res = await fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      setLoading(false);

      if (!res.ok) return alert(data.message || "Failed");

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
    } catch {
      alert("Server is waking up, please try again in a few moments.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-3xl shadow-2xl p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Book Appointment
          </h2>
          <p className="text-gray-600 mt-1">
            Khushi Clinic – Patient Booking
          </p>
        </div>

        {/* Name */}
        <Input
          label="Full Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {/* Email */}
        <Input
          label="Email Address"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@gmail.com"
        />

        {/* Phone */}
        <Input
          label="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="9876543210"
        />

        {/* Doctor */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Select Doctor
          </label>
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            required
            className="w-full h-12 rounded-xl border border-gray-300 px-4
            text-gray-900 bg-white
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Choose Doctor</option>
            <option value="Dr. Khushi">Dr. Khushi (General)</option>
            <option value="Dr. Amit">Dr. Amit (Cardiology)</option>
            <option value="Dr. Neha">Dr. Neha (Pediatric)</option>
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-2 gap-4">
          <Input
            label="Date"
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
          <Input
            label="Time"
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Message (Optional)
          </label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your problem..."
            rows="4"
            className="w-full rounded-xl border border-gray-300 px-4 py-3
            text-gray-900 placeholder-gray-400
            focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Button */}
        <button
          disabled={loading}
          className="w-full h-12 rounded-xl bg-blue-600 text-white
          font-bold text-lg hover:bg-blue-700 transition
          disabled:opacity-60"
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </form>
    </div>
  );
}

/* Reusable Input */
function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-1">
        {label}
      </label>
      <input
        type={type}
        required
        {...props}
        className="w-full h-12 rounded-xl border border-gray-300 px-4
        text-gray-900 placeholder-gray-400
        focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
