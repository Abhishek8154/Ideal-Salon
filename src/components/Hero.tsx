import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2069&auto=format&fit=crop"
          alt="Luxury Hair Salon"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="text-gold-400 font-sans tracking-[0.2em] text-sm md:text-base uppercase mb-6 block">
            Welcome to Ideal Salon
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
            Premium Natural Hair Wigs & <br className="hidden md:block" /> Salon Services in Bhopal
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
            Customized Hair Wigs, Extensions and Professional Beauty Services tailored to your unique style.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-medium tracking-wider uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              Book Consultation
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border border-white hover:bg-white hover:text-black text-white font-medium tracking-wider uppercase text-sm transition-colors duration-300 w-full sm:w-auto text-center"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
