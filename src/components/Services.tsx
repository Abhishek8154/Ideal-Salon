import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Sparkles, Crown, Droplets, Palette, Heart } from 'lucide-react';

const services = [
  {
    title: 'Customized Natural Hair Wigs',
    description: 'Premium, hand-crafted wigs tailored to your exact specifications for a flawless, natural look.',
    icon: Crown,
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hair Extensions',
    description: 'High-quality natural hair extensions seamlessly blended for length, volume, and style.',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hair Replacement Solutions',
    description: 'Advanced, non-surgical hair replacement systems for men and women.',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Professional Hair Styling',
    description: 'Expert cuts and styling tailored to your face shape and lifestyle.',
    icon: Scissors,
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hair Coloring',
    description: 'Bespoke color services from subtle highlights to complete transformations.',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
  },
  {
    title: 'Hair Treatments',
    description: 'Nourishing and restorative treatments for optimal hair health and shine.',
    icon: Droplets,
    image: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=800&auto=format&fit=crop',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-500 font-sans tracking-[0.2em] text-sm uppercase mb-4">What We Offer</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-6">Our Premium Services</h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group border border-gray-100 hover:border-gold-500 transition-colors duration-300 bg-beige-50/50 hover:bg-white overflow-hidden rounded-sm flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm flex items-center justify-center rounded-full text-gold-600 shadow-sm">
                  <service.icon className="w-5 h-5" />
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h4 className="text-xl font-serif text-black mb-3">{service.title}</h4>
                <p className="text-gray-600 font-light leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white font-medium tracking-wider uppercase text-sm transition-colors duration-300"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
