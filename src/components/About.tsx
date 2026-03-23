import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative pr-8 pb-8"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-sm w-4/5">
              <img
                src="https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1974&auto=format&fit=crop"
                alt="Professional Hair Styling"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-0 right-0 w-3/5 aspect-square overflow-hidden rounded-sm border-8 border-beige-50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=800&auto=format&fit=crop"
                alt="Premium Hair Extensions"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-2/3 aspect-square border-2 border-gold-500 -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold-500 font-sans tracking-[0.2em] text-sm uppercase mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-6 leading-tight">
              Crafting Confidence Through Exceptional Hair
            </h3>
            <div className="w-12 h-1 bg-gold-500 mb-8"></div>
            <p className="text-gray-600 mb-6 leading-relaxed font-light text-lg">
              Ideal Salon is a trusted, premium destination specializing in customized natural hair wigs, hair extensions, and advanced hair styling solutions. Based in Bhopal, we serve clients across India and globally.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed font-light text-lg">
              Our expert stylists and technicians are dedicated to providing personalized transformations that look completely natural and feel luxurious. Whether you're looking for a subtle enhancement or a complete hair replacement solution, we deliver unparalleled artistry and care.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-3xl font-serif text-black mb-2">10+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-black mb-2">5k+</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Happy Clients</p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block border-b-2 border-gold-500 text-black font-medium pb-1 hover:text-gold-600 transition-colors uppercase tracking-wider text-sm"
            >
              Discover More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
