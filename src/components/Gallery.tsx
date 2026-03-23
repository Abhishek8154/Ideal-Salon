import React from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop',
    alt: 'Natural Hair Wig Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop',
    alt: 'Hair Extensions Transformation',
  },
  {
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?q=80&w=1974&auto=format&fit=crop',
    alt: 'Professional Salon Services',
  },
  {
    src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop',
    alt: 'Bridal Hair Styling',
  },
  {
    src: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=2000&auto=format&fit=crop',
    alt: 'Customized Hair Replacement',
  },
  {
    src: 'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=2036&auto=format&fit=crop',
    alt: 'Salon Interior',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-gold-500 font-sans tracking-[0.2em] text-sm uppercase mb-4">Our Work</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-black mb-6">Transformation Gallery</h3>
            <div className="w-12 h-1 bg-gold-500 mx-auto"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <span className="text-white font-serif text-lg tracking-wider px-4 text-center">
                  {image.alt}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
