import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="overflow-hidden">

      {/* Hero Header with Animated Background */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-24 md:py-32 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
            🏥 Excellence in Healthcare
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            About <span className="text-blue-200">Khushi Clinic</span>
          </h1>
          
          <p className="mt-4 text-blue-100 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Compassionate healthcare with trust, care, and professionalism. 
            Your health is our priority.
          </p>
          
          {/* Stats */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { number: "10+", label: "Years Experience" },
              { number: "5000+", label: "Happy Patients" },
              { number: "98%", label: "Success Rate" }
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-100 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Clinic Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Image with Decorative Frame */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity"></div>
              <div className="relative">
                <Image
                  src="/about-clinic.png"
                  alt="Khushi Clinic"
                  width={600}
                  height={600}
                  className="rounded-3xl shadow-2xl w-full h-auto object-cover border-8 border-white"
                />
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-2xl font-bold">⭐ 4.9</div>
                  <div className="text-xs text-blue-100">Patient Rating</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
                  Our Story
                </span>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Welcome to{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                  Khushi Clinic
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed">
                Khushi Clinic is committed to providing high-quality medical
                services with a patient-first approach. We focus on accurate
                diagnosis, effective treatment, and compassionate care.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Our clinic combines experienced doctors, modern facilities,
                and a friendly environment to ensure the best healthcare
                experience for every patient.
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  "24/7 Support",
                  "Expert Doctors",
                  "Modern Equipment",
                  "Affordable Care"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-blue-100 hover:shadow-md transition-shadow">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-700 font-medium text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, #3b82f6 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div className="relative bg-white p-10 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To deliver compassionate, affordable, and reliable healthcare
                  services that improve the quality of life for our patients through
                  excellence and dedication.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity"></div>
              <div className="relative bg-white p-10 md:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100 h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <span className="text-3xl">🌟</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  To become a trusted healthcare provider known for excellence,
                  innovation, and patient satisfaction, setting new standards
                  in medical care.
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-blue-600 font-semibold">
                    <span>Learn More</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider bg-blue-100 px-4 py-2 rounded-full">
              Our Expert
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">
              Meet Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                Chief Doctor
              </span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Led by experienced professionals dedicated to your wellbeing
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-8 items-center bg-gradient-to-br from-blue-50 to-white p-8 md:p-12 rounded-3xl shadow-2xl border border-blue-100">
              
              {/* Doctor Image */}
              <div className="md:col-span-2 flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full opacity-20 group-hover:opacity-30 blur-2xl transition-opacity"></div>
                  <img
                    src="/doctor1.png"
                    alt="Dr. Khushi Kushwah"
                    className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-8 border-white shadow-2xl"
                  />
                  <div className="absolute bottom-2 right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <span className="text-white text-xl">✓</span>
                  </div>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="md:col-span-3 text-center md:text-left space-y-4">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    Dr. Khushi Kushwah
                  </h3>
                  <p className="text-blue-600 font-semibold text-lg mt-2">
                    General Physician
                  </p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  With 10+ years of experience, Dr. Khushi is dedicated to
                  providing personalized and compassionate medical care to
                  every patient.
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-2">
                  {["MBBS", "MD", "10+ Years Exp"].map((cred, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      {cred}
                    </span>
                  ))}
                </div>

                {/* Contact Button */}
                <div className="pt-4">
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                    Schedule Consultation
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* CTA Section with Gradient */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 md:py-28 text-center text-white overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-block px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6 border border-white/20">
            🩺 Book Now
          </div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Your Health Matters to Us
          </h2>
          
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Book an appointment today at Khushi Clinic and experience
            healthcare that truly cares.
          </p>
          
          <Link
            href="/appointment"
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-blue-50 transition-all duration-300 shadow-2xl hover:shadow-blue-900/50 hover:-translate-y-1 group"
          >
            Book Appointment
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>No Hidden Charges</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✓</span>
              <span>Expert Care</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}