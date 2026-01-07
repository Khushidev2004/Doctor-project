import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, Stethoscope, MessageSquare, CheckCircle, XCircle, Loader } from 'lucide-react';

export default function AppointmentSystem() {
  const [activeTab, setActiveTab] = useState('booking');
  const [appointments, setAppointments] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '1234567890', doctor: 'Dr. Smith', date: '2024-01-15', time: '10:00 AM', message: 'Regular checkup', status: 'Pending' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '0987654321', doctor: 'Dr. Johnson', date: '2024-01-16', time: '2:00 PM', message: 'Follow-up visit', status: 'Approved' }
  ]);

  // Booking Form Component
  const BookingForm = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      doctor: '',
      date: '',
      time: '',
      message: ''
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const doctors = ['Dr. Smith', 'Dr. Johnson', 'Dr. Williams', 'Dr. Brown', 'Dr. Davis'];
    const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
      setError('');
    };

    const handleSubmit = () => {
      setLoading(true);
      setError('');

      // Validation
      if (!formData.name || !formData.email || !formData.phone || !formData.doctor || !formData.date || !formData.time) {
        setError('Please fill all required fields');
        setLoading(false);
        return;
      }

      // Simulate API call
      setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setFormData({ name: '', email: '', phone: '', doctor: '', date: '', time: '', message: '' });
        
        setTimeout(() => setSuccess(false), 3000);
      }, 1500);
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Book Your Appointment</h1>
              <p className="text-blue-100">Schedule your visit with our expert doctors</p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mx-8 mt-8 bg-green-50 border-l-4 border-green-500 p-4 rounded-lg flex items-center gap-3">
                <CheckCircle className="text-green-500" size={24} />
                <div>
                  <p className="font-semibold text-green-800">Appointment Booked Successfully!</p>
                  <p className="text-green-600 text-sm">We'll send you a confirmation email shortly.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mx-8 mt-8 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center gap-3">
                <XCircle className="text-red-500" size={24} />
                <p className="text-red-800">{error}</p>
              </div>
            )}

            {/* Form */}
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800 placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Doctor */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Doctor <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Stethoscope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white text-gray-800"
                    >
                      <option value="">Choose a doctor</option>
                      {doctors.map(doc => (
                        <option key={doc} value={doc}>{doc}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Appointment Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-gray-800"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all appearance-none bg-white text-gray-800"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map(slot => (
                        <option key={slot} value={slot}>{slot}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-gray-400" size={20} />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your symptoms or concerns..."
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none text-gray-800 placeholder-gray-400"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Booking...
                  </>
                ) : (
                  <>
                    <CheckCircle size={20} />
                    Book Appointment
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Admin Panel Component
  const AdminPanel = () => {
    const [filter, setFilter] = useState('all');

    const filteredAppointments = appointments.filter(apt => {
      if (filter === 'all') return true;
      return apt.status.toLowerCase() === filter;
    });

    const handleApprove = (id) => {
      setAppointments(appointments.map(apt => 
        apt.id === id ? { ...apt, status: 'Approved' } : apt
      ));
    };

    const handleDelete = (id) => {
      setAppointments(appointments.filter(apt => apt.id !== id));
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Admin Dashboard
            </h1>
            <p className="text-gray-600">Manage all appointments</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <div className="flex flex-wrap gap-3">
              {['all', 'pending', 'approved'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    filter === f
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="grid gap-6">
            {filteredAppointments.map(apt => (
              <div key={apt.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-1">{apt.name}</h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        apt.status === 'Approved' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {apt.status}
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {apt.status === 'Pending' && (
                        <button
                          onClick={() => handleApprove(apt.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-all flex items-center gap-2 font-semibold"
                        >
                          <CheckCircle size={18} />
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(apt.id)}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all flex items-center gap-2 font-semibold"
                      >
                        <XCircle size={18} />
                        Delete
                      </button>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-700">
                    <div className="flex items-center gap-3">
                      <Mail className="text-blue-500" size={20} />
                      <span className="text-sm">{apt.email}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="text-green-500" size={20} />
                      <span className="text-sm">{apt.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Stethoscope className="text-purple-500" size={20} />
                      <span className="text-sm font-semibold">{apt.doctor}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="text-orange-500" size={20} />
                      <span className="text-sm">{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="text-red-500" size={20} />
                      <span className="text-sm">{apt.time}</span>
                    </div>
                  </div>

                  {apt.message && (
                    <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 flex items-start gap-2">
                        <MessageSquare className="text-gray-400 mt-0.5" size={18} />
                        <span>{apt.message}</span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {filteredAppointments.length === 0 && (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <p className="text-gray-500 text-lg">No appointments found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {/* Tab Switcher */}
      <div className="fixed top-4 right-4 z-50 bg-white rounded-full shadow-2xl p-2 flex gap-2">
        <button
          onClick={() => setActiveTab('booking')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === 'booking'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Booking
        </button>
        <button
          onClick={() => setActiveTab('admin')}
          className={`px-6 py-2 rounded-full font-semibold transition-all ${
            activeTab === 'admin'
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          Admin
        </button>
      </div>

      {activeTab === 'booking' ? <BookingForm /> : <AdminPanel />}
    </div>
  );
}