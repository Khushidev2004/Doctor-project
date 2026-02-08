import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#5f6cff] via-[#6c7bff] to-[#8fa4ff]">
  
  {/* soft background shapes */}
  <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-white/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 -right-32 w-[400px] h-[400px] bg-white/20 rounded-full blur-3xl"></div>

  <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">

      {/* LEFT CONTENT */}
      <div className="text-white">

        <span className="inline-block mb-5 px-5 py-2 rounded-full bg-white/20 backdrop-blur text-sm tracking-wide">
          Trusted Medical Care
        </span>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Caring for Your <br />
          Health at{" "}
          <span className="font-bold text-white">
            appointment Clinic
          </span>
        </h1>

        <p className="mt-6 text-lg text-white/80 max-w-xl leading-relaxed">
          We provide compassionate and professional healthcare services with
          experienced doctors, modern facilities, and patient-first care.
        </p>

        {/* buttons */}
        <div className="mt-10 flex flex-wrap gap-5">
          <a
            href="/appointment"
            className="px-8 py-3 rounded-full bg-white text-[#5f6cff] font-semibold
            shadow-lg hover:shadow-xl hover:scale-[1.02] transition"
          >
            Book Appointment
          </a>

          <a
            href="/services"
            className="px-8 py-3 rounded-full border border-white/60 text-white
            hover:bg-white hover:text-[#5f6cff] transition"
          >
            Our Services
          </a>
        </div>

        {/* glass info card */}
        <div className="mt-12 inline-flex items-center gap-4 px-6 py-4 rounded-2xl
        bg-white/20 backdrop-blur shadow-lg">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#5f6cff] font-bold">
            ✓
          </div>
          <p className="text-sm leading-snug">
            More than <b>10+ years</b> of trusted <br /> healthcare experience
          </p>
        </div>
      </div>
{/* RIGHT IMAGE */}
<div className="relative flex justify-center md:-mt-8">

  {/* soft glow behind image */}
  <div className="absolute inset-0 bg-white/30 rounded-[40px] blur-3xl"></div>

  {/* doctor image */}
  <img
    src="/priya.jpg"
    alt="doctor"
    className="
      relative z-10
      w-[300px] md:w-[420px]
      rounded-[40px]
      object-cover
      shadow-2xl
    "
  />

  {/* floating card */}
  <div
    className="
      absolute
      -bottom-6
      left-1/2
      -translate-x-1/2
      bg-white
      px-6 py-4
      rounded-2xl
      shadow-xl
    "
  >
   
  </div>

</div>


    </div>
  </div>
</section>




            {/* Clinic Highlights */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🩺</div>
              <h3 className="text-2xl font-bold text-blue-600">10+</h3>
              <p className="text-gray-600 mt-1">Years of Experience</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">👨‍⚕️</div>
              <h3 className="text-2xl font-bold text-blue-600">15+</h3>
              <p className="text-gray-600 mt-1">Qualified Doctors</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">😊</div>
              <h3 className="text-2xl font-bold text-blue-600">10k+</h3>
              <p className="text-gray-600 mt-1">Happy Patients</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
              <div className="text-4xl mb-3">🏥</div>
              <h3 className="text-2xl font-bold text-blue-600">20+</h3>
              <p className="text-gray-600 mt-1">Medical Services</p>
            </div>

          </div>
        </div>
      </section>

            {/* About Khushi Clinic */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <div>
              <Image
                src="/about-clinic.png"
                alt="About Khushi Clinic"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </div>

            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                About <span className="text-blue-600">Khushi Clinic</span>
              </h2>

              <p className="mt-4 text-gray-600 leading-relaxed">
              appointment Clinic is dedicated to providing high-quality and
                compassionate healthcare. Our experienced doctors and friendly
                staff focus on patient comfort, accurate diagnosis, and
                effective treatment.
              </p>

              <p className="mt-3 text-gray-600 leading-relaxed">
                We believe that healthcare should be personal, reliable, and
                accessible for every patient and their family.
              </p>

              <Link
                href="/about"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="bg-gradient-to-b from-blue-50 to-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Our <span className="text-blue-600">Medical Services</span>
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-gray-600 text-lg">
        At appointment Clinic, we provide trusted and compassionate healthcare
        services designed to meet your medical needs.
      </p>
    </div>

    {/* Services Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

      {/* Card */}
      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          🩺
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          General Checkup
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Complete health checkups for all age groups with expert guidance.
        </p>
      </div>

      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          ❤️
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Cardiology Care
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Advanced heart care services with modern diagnostic facilities.
        </p>
      </div>

      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          🦷
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Dental Care
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Complete dental solutions for healthy and confident smiles.
        </p>
      </div>

      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          🧠
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Neurology
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Specialized treatment for brain and nervous system disorders.
        </p>
      </div>

      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          🦴
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Orthopedic Care
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Bone, joint and muscle treatments with expert orthopedic doctors.
        </p>
      </div>

      <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-3xl mb-5 mx-auto group-hover:bg-blue-600 group-hover:text-white transition">
          👶
        </div>
        <h3 className="text-xl font-semibold text-center text-gray-800">
          Child Care
        </h3>
        <p className="text-gray-600 text-center mt-3 text-sm leading-relaxed">
          Gentle and personalized healthcare services for children.
        </p>
      </div>

    </div>

    {/* Button */}
    <div className="text-center mt-16">
      <a
        href="/services"
        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition shadow-lg"
      >
        View All Services
      </a>
    </div>

  </div>
</section>

{/* Testimonials Section */}
<section className="bg-gradient-to-b from-white to-blue-50 py-28">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-20">
      <h2 className="text-4xl font-extrabold text-gray-900">
        What Our <span className="text-blue-600">Patients Say</span>
      </h2>
      <p className="mt-5 text-gray-600 text-lg max-w-2xl mx-auto">
        Real stories from patients who trusted appointment Clinic for
        their healthcare needs.
      </p>
    </div>

    {/* Testimonials Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl text-blue-600 mb-6">“</div>
        <p className="text-gray-600 leading-relaxed text-base">
          Doctors at appointment Clinic are very kind and professional.
          The treatment quality and care exceeded my expectations.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            A
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Anjali Sharma</h4>
            <p className="text-sm text-gray-500">Happy Patient</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl text-blue-600 mb-6">“</div>
        <p className="text-gray-600 leading-relaxed text-base">
          Clean clinic environment, friendly staff, and accurate
          diagnosis. Highly recommend Khushi Clinic to everyone.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            R
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Rahul Verma</h4>
            <p className="text-sm text-gray-500">Satisfied Patient</p>
          </div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300">
        <div className="text-5xl text-blue-600 mb-6">“</div>
        <p className="text-gray-600 leading-relaxed text-base">
          Best clinic experience I’ve had. Doctors patiently listen
          and explain every detail before treatment.
        </p>

        <div className="mt-8 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            P
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Pooja Singh</h4>
            <p className="text-sm text-gray-500">Regular Patient</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


{/* Doctors Preview */}
<section className="bg-gradient-to-b from-blue-50 to-white py-24">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-extrabold text-gray-900">
        Meet Our <span className="text-blue-600">Expert Doctors</span>
      </h2>
      <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
        Our team of experienced and compassionate doctors is dedicated
        to providing the best healthcare at Khushi Clinic.
      </p>
    </div>

    {/* Doctor Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

      {/* Doctor Card */}
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-blue-100">
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src="/doctor1.png"
            alt="Dr. Khushi Kushwah"
            className="w-full h-full rounded-full object-cover border-4 border-blue-200 group-hover:border-blue-600 transition"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Dr. Khushi Kushwah
        </h3>
        <p className="text-blue-600 font-medium mt-1">
          General Physician
        </p>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          10+ years of experience in providing compassionate and
          personalized medical care to patients of all age groups.
        </p>

        <button className="mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>

      {/* Doctor Card */}
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-blue-100">
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src="/doctor2.png"
            alt="Dr. Amit Verma"
            className="w-full h-full rounded-full object-cover border-4 border-blue-200 group-hover:border-blue-600 transition"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Dr. Amit Verma
        </h3>
        <p className="text-blue-600 font-medium mt-1">
          Cardiologist
        </p>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Specialist in heart care with modern diagnostic and treatment
          techniques for cardiovascular health.
        </p>

        <button className="mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>

      {/* Doctor Card */}
      <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 p-8 text-center border border-blue-100">
        <div className="relative w-36 h-36 mx-auto mb-6">
          <img
            src="/doctor3.png"
            alt="Dr. Neha Singh"
            className="w-full h-full rounded-full object-cover border-4 border-blue-200 group-hover:border-blue-600 transition"
          />
        </div>

        <h3 className="text-xl font-bold text-gray-900">
          Dr. Neha Singh
        </h3>
        <p className="text-blue-600 font-medium mt-1">
          Pediatrician
        </p>

        <p className="text-gray-600 text-sm mt-4 leading-relaxed">
          Expert in child healthcare, focusing on growth, nutrition,
          and preventive care for children.
        </p>

        <button className="mt-6 px-6 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">
          Book Appointment
        </button>
      </div>

    </div>
  </div>
</section>





    </main>
  );
}
