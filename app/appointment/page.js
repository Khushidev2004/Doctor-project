"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppointmentPage() {
  const router = useRouter();

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

    const res = await fetch("/api/appointment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/appointment/success");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 px-4 py-12 md:py-20">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT INFO SECTION */}
          <div className="space-y-8 lg:sticky lg:top-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                📅 Quick & Easy Booking
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Book Your
                <span className="block text-blue-600 mt-2">Appointment</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed">
                Schedule your visit with our experienced doctors at
                <span className="font-semibold text-blue-600"> Khushi Clinic</span>.
                We're here to provide you with the best healthcare experience.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">Why Choose Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: "👨‍⚕️", text: "Experienced Doctors" },
                  { icon: "⚡", text: "Quick Booking" },
                  { icon: "✉️", text: "Email Confirmation" },
                  { icon: "📊", text: "Easy Tracking" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-gray-700 font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl text-white shadow-lg">
              <h3 className="font-semibold text-lg mb-3">Need Help?</h3>
              <p className="text-blue-100 text-sm mb-4">Our team is available to assist you</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>+91 123 456 7890</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📧</span>
                  <span>contact@khushiclinic.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Appointment Details
              </h2>
              <p className="text-gray-600 text-sm">Fill in your details to book an appointment</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

              <Input
                label="Full Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                icon="👤"
              />

              <Input
                label="Email Address"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                icon="📧"
              />

              <Input
                label="Phone Number"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                icon="📱"
              />

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Select Doctor
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">👨‍⚕️</span>
                  <select
                    name="doctor"
                    required
                    value={form.doctor}
                    onChange={handleChange}
                    className="w-full h-14 pl-12 pr-4 rounded-xl border-2 border-gray-200
                    focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                    transition-all appearance-none bg-white text-gray-800 font-medium cursor-pointer
                    hover:border-gray-300"
                  >
                    <option value="">Choose your doctor</option>
                    <option value="Dr. Khushi">Dr. Khushi (General Physician)</option>
                    <option value="Dr. Amit">Dr. Amit (Cardiologist)</option>
                    <option value="Dr. Neha">Dr. Neha (Pediatrician)</option>
                  </select>
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Preferred Date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  icon="📅"
                />

                <Input
                  label="Preferred Time"
                  name="time"
                  type="time"
                  value={form.time}
                  onChange={handleChange}
                  icon="⏰"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Message <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-lg">💬</span>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your concern or reason for visit..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200
                    focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
                    transition-all resize-none"
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full h-14 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700
                text-white font-bold text-lg shadow-lg shadow-blue-500/30
                hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5
                active:translate-y-0 transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
                relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loading ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Booking...
                    </>
                  ) : (
                    <>
                      Book Appointment
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </>
                  )}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>

              <p className="text-xs text-gray-500 text-center">
                By booking, you agree to our Terms & Conditions
              </p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

/* Enhanced Reusable Input Component */
function Input({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  icon
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-800 mb-2">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg">
            {icon}
          </span>
        )}
        <input
          type={type}
          name={name}
          required
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full h-14 ${icon ? 'pl-12' : 'pl-4'} pr-4 rounded-xl border-2 border-gray-200
          focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none
          transition-all placeholder:text-gray-400`}
        />
      </div>
    </div>
  );
}