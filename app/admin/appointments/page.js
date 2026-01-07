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
    if (!confirm("Delete this appointment?")) return;
    await fetch("/api/appointment", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    load();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6 md:p-10">
      {/* Header */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900">
            🏥 Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-1">
            Manage appointments at <b>Khushi Clinic</b>
          </p>
        </div>

        <div className="flex gap-4">
          <Stat title="Total" value={data.length} />
          <Stat
            title="Pending"
            value={data.filter((a) => a.status === "Pending").length}
          />
          <Stat
            title="Approved"
            value={data.filter((a) => a.status === "Approved").length}
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading appointments...
          </div>
        ) : data.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No appointments found
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
                  <th className="px-6 py-4 text-left">Status</th>
                  <th className="px-6 py-4 text-left">Actions</th>
                </tr>
              </thead>

              <tbody>
                {data.map((a) => (
                  <tr
                    key={a.id}
                    className="border-b last:border-none hover:bg-blue-50 transition"
                  >
                    <td className="px-6 py-4 font-semibold text-gray-900">
                      {a.name}
                    </td>

                    <td className="px-6 py-4 text-gray-700">{a.doctor}</td>

                    <td className="px-6 py-4 text-gray-700">
                      {a.appointment_date}
                    </td>

                    <td className="px-6 py-4 text-gray-700">
                      {a.appointment_time}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          a.status === "Approved"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {a.status}
                      </span>
                    </td>

                    <td className="px-6 py-4 flex gap-2">
                      {a.status === "Pending" && (
                        <button
                          onClick={() => approve(a.id)}
                          className="px-4 py-1.5 rounded-full text-xs font-semibold
                          bg-green-600 text-white hover:bg-green-700 transition"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => del(a.id)}
                        className="px-4 py-1.5 rounded-full text-xs font-semibold
                        bg-red-600 text-white hover:bg-red-700 transition"
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

/* Small Stat Card */
function Stat({ title, value }) {
  return (
    <div className="bg-white shadow-md rounded-2xl px-6 py-4 text-center">
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-blue-600">{value}</p>
    </div>
  );
}
