"use client";

import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setLoading(false);

      if (res.ok) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      alert("Server error. Please try later.");
    }
  };

  return (
    <main className="min-h-screen bg-[#f4f6f9] px-4 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Contact Us
          </h1>
          <p className="mt-3 text-gray-600 text-lg">
            Get in touch with
            <span className="font-semibold text-blue-700"> Khushi Clinic</span>
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* LEFT: Clinic Info + Map */}
          <div className="space-y-8">

            {/* Clinic Info */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🏥 Clinic Information
              </h2>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <span>📍</span>
                  <span>Agra, Uttar Pradesh, India</span>
                </li>
                <li className="flex gap-3">
                  <span>📞</span>
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex gap-3">
                  <span>✉️</span>
                  <span>khushiproject0505@gmail.com</span>
                </li>
                <li className="flex gap-3">
                  <span>⏰</span>
                  <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-md">
              <div className="bg-gray-200 h-64 flex items-center justify-center text-gray-600 text-lg">
                Google Map Area  
                <br />
                (Map embed can be added later)
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send Us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">

              <FormField
                label="Your Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="w-full px-4 py-3 rounded-lg
                  border border-gray-400 text-gray-900
                  placeholder-gray-500
                  focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-12 rounded-lg
                bg-blue-700 text-white
                font-bold text-lg
                hover:bg-blue-800 transition
                disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </main>
  );
}

/* Reusable Input Component */
function FormField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full h-12 px-4 rounded-lg
        border border-gray-400 text-gray-900
        placeholder-gray-500
        focus:outline-none focus:ring-2 focus:ring-blue-600"
      />
    </div>
  );
}
