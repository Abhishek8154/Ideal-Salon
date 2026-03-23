import React from 'react';
import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Regular Client',
    content: 'The customized wig I received from Ideal Salon completely changed my life. The quality is unmatched, and it looks so natural. The staff was incredibly supportive throughout the consultation.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Neha Verma',
    role: 'Bridal Client',
    content: 'I got my hair extensions done here for my wedding. The blending was flawless, and the volume it added was exactly what I dreamed of. Highly recommend their premium services!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Rahul Desai',
    role: 'Hair Replacement Client',
    content: 'Professional, discreet, and exceptional quality. The hair replacement solution provided by Ideal Salon gave me back my confidence. The maintenance is easy and the look is 100% natural.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-500 font-sans tracking-[0.2em] text-sm uppercase mb-4">Client Stories</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-6">What They Say</h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-beige-50 p-8 rounded-sm relative"
            >
              <div className="flex text-gold-500 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 font-light leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-serif text-black">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
