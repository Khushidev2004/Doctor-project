"use client";
import { useEffect, useState } from "react";

export default function AdminAppointments() {
  const [data, setData] = useState([]);

  const load = async () => {
    const res = await fetch("/api/appointment");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => { load(); }, []);

  const approve = async (id) => {
    await fetch("/api/appointment", {
      method: "PUT",
      body: JSON.stringify({ id }),
    });
    load();
  };

  const del = async (id) => {
    await fetch("/api/appointment", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    load();
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {data.map((a) => (
        <div key={a.id} className="border p-4 mb-3 rounded">
          <b>{a.name}</b> | {a.doctor} | {a.status}
          <div className="mt-2 flex gap-2">
            {a.status === "Pending" && (
              <button onClick={() => approve(a.id)} className="bg-green-500 text-white px-3 py-1 rounded">
                Approve
              </button>
            )}
            <button onClick={() => del(a.id)} className="bg-red-500 text-white px-3 py-1 rounded">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
