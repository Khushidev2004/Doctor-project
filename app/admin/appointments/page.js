"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminAppointmentsPage() {
  const router = useRouter();

  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  /* =======================
     🔐 ADMIN AUTH CHECK
  ======================= */
  useEffect(() => {
    const isAdmin = localStorage.getItem("adminLoggedIn");
    if (isAdmin !== "true") {
      router.push("/admin/login");
      return;
    }
    fetchAppointments();
  }, []);

  /* =======================
     FETCH APPOINTMENTS
  ======================= */
  const fetchAppointments = async () => {
    try {
      const res = await fetch("/api/appointment");
      const data = await res.json();
      setAppointments(Array.isArray(data) ? data : []);
    } catch (error) {
      alert("Failed to load appointments");
    } finally {
      setLoading(false);
    }
  };

  /* =======================
     APPROVE
  ======================= */
  const approveAppointment = async (id) => {
    await fetch("/api/appointment", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchAppointments();
  };

  /* =======================
     DELETE
  ======================= */
  const deleteAppointment = async (id) => {
    if (!confirm("Are you sure you want to delete this appointment?")) return;

    await fetch("/api/appointment", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    fetchAppointments();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-8">

      {/* DASHBOARD HEADER */}
      <div className="mb-10 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-white shadow-2xl">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">
              🏥 Admin Dashboard
            </h1>
            <p className="mt-2 text-blue-100">
              Manage and track patient appointments at Khushi Clinic
            </p>
          </div>

          <div className="flex gap-4">
            <Stat title="Total" value={appointments.length} />
            <Stat
              title="Pending"
              value={appointments.filter(a => a.status !== "Approved").length}
            />
            <Stat
              title="Approved"
              value={appointments.filter(a => a.status === "Approved").length}
            />
          </div>
        </div>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-600">
            Loading appointments...
          </div>
        ) : appointments.length === 0 ? (
          <div className="p-10 text-center text-gray-600">
            No appointments found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Patient</th>
                  <th className="px-6 py-4 text-left">Doctor</th>
                  <th className="px-6 py-4 text-left">Date</th>
                  <th className="px-6 py-4 text-left">Time</th>
                  <th className="px-6 py-4 text-left">Phone</th>
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              {/* 🔴 FIXED VISIBILITY HERE */}
              <tbody className="text-gray-900">
                {appointments.map((item) => (
                  <tr
                    key={item.id}
                    className="border-b bg-white hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {item.name}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      {item.doctor}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      {item.date}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      {item.time}
                    </td>

                    <td className="px-6 py-4 text-gray-800">
                      {item.phone}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-4 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 space-x-2">
                      {item.status !== "Approved" && (
                        <button
                          onClick={() => approveAppointment(item.id)}
                          className="px-4 py-1.5 rounded-full bg-green-600 text-white text-xs hover:bg-green-700"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => deleteAppointment(item.id)}
                        className="px-4 py-1.5 rounded-full bg-red-600 text-white text-xs hover:bg-red-700"
                      >
                        Delete
                      </button>
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

/* SMALL STAT CARD */
function Stat({ title, value }) {
  return (
    <div className="bg-white/20 backdrop-blur px-6 py-4 rounded-2xl text-center">
      <p className="text-sm text-blue-100">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
