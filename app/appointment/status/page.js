"use client";

import { useState } from "react";

export default function AppointmentStatusPage() {
  const [phone, setPhone] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const checkStatus = async () => {
    if (!phone) {
      alert("Please enter phone number");
      return;
    }

    setLoading(true);
    setNotFound(false);
    setAppointments([]);

    try {
      const res = await fetch(`/api/appointment/status?phone=${phone}`);
      const data = await res.json();

      if (!data.found) {
        setNotFound(true);
      } else {
        setAppointments(data.appointments);
      }
    } catch (err) {
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl p-8 md:p-10">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-600">
            📋 Appointment History
          </h1>
          <p className="mt-2 text-gray-500">
            Track your appointments using phone number
          </p>
        </div>

        {/* INPUT */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              📞
            </span>
            <input
              type="text"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-300
              text-gray-900 placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            onClick={checkStatus}
            disabled={loading}
            className="h-12 px-10 rounded-xl bg-blue-600 text-white
            font-semibold text-lg hover:bg-blue-700 transition
            disabled:opacity-60"
          >
            {loading ? "Checking..." : "Check Status"}
          </button>
        </div>

        {/* NOT FOUND */}
        {notFound && (
          <div className="mt-8 text-center text-red-600 font-medium">
            ❌ No appointments found for this number
          </div>
        )}

        {/* TABLE */}
        {appointments.length > 0 && (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full border-collapse rounded-xl overflow-hidden">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="px-5 py-4 text-left">Doctor</th>
                  <th className="px-5 py-4 text-left">Date</th>
                  <th className="px-5 py-4 text-left">Time</th>
                  <th className="px-5 py-4 text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {appointments.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-none hover:bg-blue-50 transition"
                  >
                    <td className="px-5 py-4 font-medium text-gray-800">
                      {item.doctor}
                    </td>

                    {/* ✅ FIXED FIELD NAMES */}
                    <td className="px-5 py-4 text-gray-700">
                      {item.appointment_date}
                    </td>

                    <td className="px-5 py-4 text-gray-700">
                      {item.appointment_time}
                    </td>

                    <td className="px-5 py-4">
                      {item.status === "Approved" ? (
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700">
                          ✅ Approved
                        </span>
                      ) : (
                        <span className="px-4 py-1.5 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-700">
                          ⏳ Pending
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </main>
  );
}
