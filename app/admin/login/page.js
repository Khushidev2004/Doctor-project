"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const ADMIN_EMAIL = "admin@khushiclinic.com";
    const ADMIN_PASSWORD = "admin123";

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      localStorage.setItem("adminLoggedIn", "true");
      router.push("/admin/appointments");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white w-full max-w-md p-10 rounded-3xl shadow-2xl border border-blue-100"
      >
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-center text-gray-900">
          Admin Login
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Khushi Clinic Dashboard
        </p>

        {/* Error */}
        {error && (
          <p className="mt-4 text-center text-red-600 font-medium">
            {error}
          </p>
        )}

        {/* Email */}
        <div className="mt-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Admin Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@khushiclinic.com"
            className="
              w-full h-12 rounded-lg
              border border-gray-300
              bg-white
              px-4
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-blue-500
            "
          />
        </div>

        {/* Password */}
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="
              w-full h-12 rounded-lg
              border border-gray-300
              bg-white
              px-4
              text-gray-900
              placeholder-gray-400
              focus:outline-none
              focus:ring-2 focus:ring-blue-500
              focus:border-blue-500
            "
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="
            mt-10 w-full
            bg-gradient-to-r from-blue-600 to-blue-500
            text-white py-3
            rounded-full
            font-semibold text-lg
            hover:from-blue-700 hover:to-blue-600
            transition
            shadow-lg
          "
        >
          Login
        </button>

        {/* Hint */}
        <p className="mt-6 text-center text-xs text-gray-400">
          Only authorized admin can access the dashboard
        </p>
      </form>
    </main>
  );
}
