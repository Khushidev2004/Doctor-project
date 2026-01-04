import Link from "next/link";

export default function ServicesPage() {
  return (
    <main>

      {/* Page Header */}
      <section className="bg-blue-600 py-20 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Our Medical Services
        </h1>
        <p className="mt-4 text-blue-100 text-lg max-w-2xl mx-auto">
          Comprehensive healthcare services delivered with care and expertise
          at Khushi Clinic.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

            {/* Service Card */}
            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🩺</div>
              <h3 className="text-xl font-bold text-gray-900">
                General Checkup
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Complete health checkups, routine examinations, and preventive
                care for all age groups.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-gray-900">
                Cardiology Care
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Advanced diagnosis and treatment for heart-related conditions
                with modern facilities.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🦷</div>
              <h3 className="text-xl font-bold text-gray-900">
                Dental Care
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Complete dental solutions including cleaning, fillings, and
                oral health care.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-gray-900">
                Neurology
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Expert care for brain, nerve, and neurological disorders.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">🦴</div>
              <h3 className="text-xl font-bold text-gray-900">
                Orthopedic Care
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Treatment for bone, joint, and muscle problems with expert
                orthopedic doctors.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <div className="text-5xl mb-4">👶</div>
              <h3 className="text-xl font-bold text-gray-900">
                Child Care
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                Specialized healthcare services focused on children’s growth,
                nutrition, and development.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose <span className="text-blue-600">Khushi Clinic?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Experienced Doctors
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Our doctors have years of experience and provide personalized
                care to every patient.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Modern Facilities
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                Equipped with modern medical technology for accurate diagnosis
                and treatment.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-600">
                Patient-Centered Care
              </h3>
              <p className="mt-3 text-gray-600 text-sm">
                We focus on patient comfort, safety, and satisfaction at every
                step of treatment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-500 py-20 text-center text-white">
        <h2 className="text-4xl font-extrabold">
          Need Medical Assistance?
        </h2>
        <p className="mt-4 text-blue-100 text-lg">
          Book your appointment today at Khushi Clinic.
        </p>
        <Link
          href="/appointment"
          className="inline-block mt-8 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold hover:bg-blue-100 transition"
        >
          Book Appointment
        </Link>
      </section>

    </main>
  );
}
