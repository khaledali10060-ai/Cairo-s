import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Users, Phone, User, MessageSquare, MapPin } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    guests: '2',
    date: '',
    time: '',
    branch: 'Mivida'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppReservation = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { fullName, phone, guests, date, time, branch } = formData;
    
    const message = `*New Reservation Request from Website*%0A%0A` +
      `*Branch:* ${branch}%0A` +
      `*Name:* ${fullName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Guests:* ${guests}%0A` +
      `*Date:* ${date}%0A` +
      `*Time:* ${time}%0A%0A` +
      `Thank you!`;

    const branchNumbers: { [key: string]: string } = {
      'Mivida': '201222201160',
      'City Square': '201203475096'
    };

    const whatsappNumber = branchNumbers[branch] || "201222201160";
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="reservation" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Reservation</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-text">Book Your Table</h3>
          <p className="mt-4 text-text-muted max-w-2xl mx-auto">
            Book your table in advance to ensure the best experience at Cairo's.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface p-8 md:p-12 rounded-3xl shadow-xl border border-amber-100"
        >
          <form onSubmit={handleWhatsAppReservation} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Branch Selection */}
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="branch" className="flex items-center gap-2 text-sm font-semibold text-text">
                <MapPin size={16} className="text-primary" />
                Select Branch
              </label>
              <select
                id="branch"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="Mivida">Mivida Branch</option>
                <option value="City Square">City Square Branch</option>
              </select>
            </div>

            {/* Full Name */}
            <div className="space-y-2">
              <label htmlFor="fullName" className="flex items-center gap-2 text-sm font-semibold text-text">
                <User size={16} className="text-primary" />
                Full Name
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-text">
                <Phone size={16} className="text-primary" />
                Phone Number
              </label>
              <input
                required
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="01xxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Number of Guests */}
            <div className="space-y-2">
              <label htmlFor="guests" className="flex items-center gap-2 text-sm font-semibold text-text">
                <Users size={16} className="text-primary" />
                Number of People
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                ))}
                <option value="10+">More than 10</option>
              </select>
            </div>

            {/* Date */}
            <div className="space-y-2">
              <label htmlFor="date" className="flex items-center gap-2 text-sm font-semibold text-text">
                <Calendar size={16} className="text-primary" />
                Date
              </label>
              <input
                required
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Time */}
            <div className="space-y-2">
              <label htmlFor="time" className="flex items-center gap-2 text-sm font-semibold text-text">
                <Clock size={16} className="text-primary" />
                Time
              </label>
              <input
                required
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-amber-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 mt-4">
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-4 rounded-xl text-lg font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <MessageSquare size={24} />
                Reserve via WhatsApp
              </button>
              <p className="text-center text-xs text-text-muted mt-4">
                By clicking, you will be redirected to WhatsApp to complete your booking.
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
