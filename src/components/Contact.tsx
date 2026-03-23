import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-500 font-sans tracking-[0.2em] text-sm uppercase mb-4">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-6">Book a Consultation</h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-8 mb-10">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mr-6 shrink-0 shadow-sm">
                  <MapPin className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-black mb-2">Visit Us</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    10 No. Market, MIG - 9<br />
                    BDA Complex E-3, Arera Colony<br />
                    Maharana Pratap Nagar<br />
                    Bhopal, Madhya Pradesh 462016
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mr-6 shrink-0 shadow-sm">
                  <Phone className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-black mb-2">Call Us</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    +91 91797 66000
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full mr-6 shrink-0 shadow-sm">
                  <Clock className="w-5 h-5 text-gold-600" />
                </div>
                <div>
                  <h4 className="font-serif text-xl text-black mb-2">Opening Hours</h4>
                  <p className="text-gray-600 font-light leading-relaxed">
                    Monday - Sunday<br />
                    10:00 AM - 8:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="w-full h-64 bg-gray-200 rounded-sm overflow-hidden shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d3666.241571583726!2d77.4308!3d23.2344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c426999999999%3A0x9999999999999999!2sIdeal%20Salon!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ideal Salon Location"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 md:p-10 shadow-sm rounded-sm"
          >
            <h4 className="text-2xl font-serif text-black mb-8">Send us a Message</h4>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full border-b border-gray-300 py-3 focus:outline-none focus:border-gold-500 transition-colors bg-transparent resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="button"
                className="w-full py-4 bg-black hover:bg-gray-900 text-white font-medium tracking-wider uppercase text-sm transition-colors duration-300 mt-4"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
