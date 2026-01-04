import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Clinic Info */}
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-4">
              🏥 Khushi Clinic
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Providing compassionate, trusted, and professional healthcare
              services to keep you and your family healthy and safe.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-white transition"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/appointment"
                  className="hover:text-white transition"
                >
                  Appointment
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-5">
              Contact Info
            </h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2">
                <span>📍</span>
                <span>Agra, Uttar Pradesh</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-2">
                <span>⏰</span>
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Khushi Clinic. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
