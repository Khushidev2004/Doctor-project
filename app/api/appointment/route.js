"use client";

import React, { useEffect, useState } from "react";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  Stethoscope,
  MessageSquare,
  CheckCircle,
  XCircle,
  Loader,
} from "lucide-react";

export default function AppointmentSystem() {
  const [activeTab, setActiveTab] = useState("booking");
  const [appointments, setAppointments] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  /* ============================
     🔹 FETCH APPOINTMENTS (ADMIN)
  ============================ */
  const fetchAppointments = async () => {
    try {
      setLoadingList(true);
      const res = await fetch("/api/appointment");
      const data = await res.json();

      if (!res.ok) throw new Error("Failed to load appointments");

      setAppointments(data);
    } catch (err) {
      alert("Failed to load appointments");
    } finally {
      setLoadingList(false);
    }
  };

  useEffect(() => {
    if (activeTab === "admin") {
      fetchAppointments();
    }
  }, [activeTab]);

  /* ============================
     🔹 BOOKING FORM
  ============================ */
  const BookingForm = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      doctor: "",
      date: "",
      time: "",
      message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const doctors = [
      "Dr. Smith",
      "Dr. Johnson",
      "Dr. Williams",
      "Dr. Brown",
    ];

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError("");
    };

    const handleSubmit = async () => {
      if (!formData.name || !formData.email || !formData.phone) {
        setError("Please fill all required fields");
        return;
      }

      try {
        setLoading(true);

        const res = await fetch("/api/appointment", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) throw new Error(data.message);

        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          time: "",
          message: "",
        });

        setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
        setError("Booking failed");
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-6">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-bold mb-6">Book Appointment</h1>

          {success && (
            <div className="bg-green-100 text-green-700 p-3 rounded mb-4">
              Appointment booked successfully ✅
            </div>
          )}

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="input" />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="input" />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="input" />
            <select name="doctor" value={formData.doctor} onChange={handleChange} className="input">
              <option value="">Select Doctor</option>
              {doctors.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
            <input type="date" name="date" value={formData.date} onChange={handleChange} className="input" />
            <input type="time" name="time" value={formData.time} onChange={handleChange} className="input" />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="input mt-4"
          />

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold"
          >
            {loading ? "Booking..." : "Book Appointment"}
          </button>
        </div>
      </div>
    );
  };

  /* ============================
     🔹 ADMIN PANEL
  ============================ */
  const AdminPanel = () => {
    const handleApprove = async (id) => {
      await fetch("/api/appointment", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchAppointments();
    };

    const handleDelete = async (id) => {
      await fetch("/api/appointment", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      fetchAppointments();
    };

    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

        {loadingList ? (
          <p>Loading...</p>
        ) : appointments.length === 0 ? (
          <p>No appointments</p>
        ) : (
          appointments.map((apt) => (
            <div key={apt.id} className="bg-white p-6 rounded-xl shadow mb-4">
              <h2 className="text-xl font-bold">{apt.name}</h2>
              <p>{apt.email}</p>
              <p>{apt.phone}</p>
              <p>{apt.doctor}</p>
              <p>
                {apt.appointment_date} at {apt.appointment_time}
              </p>

              <span className="inline-block mt-2 px-3 py-1 rounded bg-yellow-100">
                {apt.status}
              </span>

              <div className="flex gap-3 mt-4">
                {apt.status === "Pending" && (
                  <button
                    onClick={() => handleApprove(apt.id)}
                    className="bg-green-500 text-white px-4 py-2 rounded"
                  >
                    Approve
                  </button>
                )}
                <button
                  onClick={() => handleDelete(apt.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    );
  };

  return (
    <>
      <div className="fixed top-4 right-4 flex gap-2">
        <button onClick={() => setActiveTab("booking")} className="btn">
          Booking
        </button>
        <button onClick={() => setActiveTab("admin")} className="btn">
          Admin
        </button>
      </div>

      {activeTab === "booking" ? <BookingForm /> : <AdminPanel />}
    </>
  );
}
