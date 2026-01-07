"use client";
import { useEffect, useState } from "react";

export default function AdminAppointments() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await fetch("/api/appointment");
    const json = await res.json();
    setData(json);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const approve = async (id) => {
    await fetch("/api/appointment", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  };

  const del = async (id) => {
    await fetch("/api/appointment", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <p className="text-lg font-semibold text-gray-600 animate-pulse">
          Loading appointments...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Admin Appointments Panel
        </h1>

        {data.length === 0 && (
          <p className="text-center text-gray-500">
            No appointments found
          </p>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {data.map((a) => (
            <div
              key={a.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {a.name}
                </h2>

                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium
                    ${
                      a.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }
                  `}
                >
                  {a.status}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-1 text-gray-600 text-sm">
                <p><b>Email:</b> {a.email}</p>
                <p><b>Phone:</b> {a.phone}</p>
                <p><b>Doctor:</b> {a.doctor}</p>
                <p>
                  <b>Date:</b> {a.appointment_date} <br />
                  <b>Time:</b> {a.appointment_time}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 mt-5">
                {a.status === "Pending" && (
                  <button
                    onClick={() => approve(a.id)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-medium transition"
                  >
                    Approve
                  </button>
                )}

                <button
                  onClick={() => del(a.id)}
                  className="flex-1 bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg font-medium transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
