"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [isAdmin, setIsAdmin] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // check admin login on route change
  useEffect(() => {
    const status = localStorage.getItem("adminLoggedIn");
    setIsAdmin(status === "true");
  }, [pathname]);

  const handleDashboardClick = () => {
    if (isAdmin) {
      router.push("/admin/appointments");
    } else {
      router.push("/admin/login");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("adminLoggedIn");
    setIsAdmin(false);
    router.push("/admin/login");
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-600">
          Khushi Clinic
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 font-medium text-gray-700">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>

          <li className="relative group">
  <span className="cursor-pointer font-medium text-gray-700">
    Appointment
  </span>

  {/* DROPDOWN */}
  <div
    className="absolute top-full left-0 mt-2 w-52
               bg-white rounded-xl shadow-lg
               opacity-0 invisible
               group-hover:opacity-100 group-hover:visible
               transition-all duration-300"
  >
    <Link
      href="/appointment"
      className="block px-5 py-3 text-sm text-gray-700
                 hover:bg-blue-50 rounded-t-xl"
    >
      Book Appointment
    </Link>

    <Link
      href="/appointment/status"
      className="block px-5 py-3 text-sm text-gray-700
                 hover:bg-blue-50 rounded-b-xl"
    >
      Check Appointment Status
    </Link>
  </div>
</li>


          {/* Dashboard (always visible) */}
          <li>
            <button
              onClick={handleDashboardClick}
              className="px-4 py-2 rounded-full bg-green-600 text-white hover:bg-green-700 transition"
            >
              Dashboard
            </button>
          </li>

          {/* Logout (only after login) */}
          {isAdmin && (
            <li>
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
