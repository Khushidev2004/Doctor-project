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

  useEffect(() => { load(); }, []);

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

  if (loading) return <p className="p-6">Loading...</p>;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Appointments</h1>

      {data.map(a => (
        <div key={a.id} className="border p-4 mb-4 rounded">
          <p><b>{a.name}</b> ({a.status})</p>
          <p>{a.email} | {a.phone}</p>
          <p>{a.doctor}</p>
          <p>{a.appointment_date} @ {a.appointment_time}</p>

          <div className="flex gap-2 mt-2">
            {a.status === "Pending" && (
              <button onClick={() => approve(a.id)}>Approve</button>
            )}
            <button onClick={() => del(a.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}
