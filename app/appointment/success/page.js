export default function AppointmentSuccessPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white max-w-lg w-full p-10 rounded-3xl shadow-2xl text-center">

        <div className="text-6xl mb-4">✅</div>

        <h1 className="text-3xl font-extrabold text-gray-900">
          Appointment Request Sent
        </h1>

        <p className="mt-4 text-gray-600 text-lg">
          Your appointment request has been successfully submitted.
        </p>

        <p className="mt-2 text-gray-600">
          Our clinic team will review your request and contact you shortly.
        </p>

        <div className="mt-8 text-sm text-gray-500">
          Status: <span className="font-semibold text-yellow-600">Pending</span>
        </div>

        <a
          href="/"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
