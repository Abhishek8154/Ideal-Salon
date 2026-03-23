import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <h2 className="font-serif text-2xl font-bold tracking-wider mb-6">
              IDEAL SALON
            </h2>
            <p className="text-gray-400 font-light leading-relaxed mb-6 text-sm">
              Premium Natural Hair Wigs & Extensions Nationwide and Globally. Your trusted destination for luxurious hair transformations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gold-500 hover:border-gold-500 transition-colors duration-300">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Gallery', 'Testimonials', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-light">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Our Services</h3>
            <ul className="space-y-4">
              {['Natural Hair Wigs', 'Hair Extensions', 'Hair Replacement', 'Hair Styling', 'Hair Coloring', 'Bridal Styling'].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm font-light">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-lg mb-6 tracking-wide">Contact Us</h3>
            <ul className="space-y-4 text-sm font-light text-gray-400">
              <li>10 No. Market, MIG - 9</li>
              <li>BDA Complex E-3, Arera Colony</li>
              <li>Maharana Pratap Nagar</li>
              <li>Bhopal, MP 462016</li>
              <li className="pt-2">
                <a href="tel:+919179766000" className="text-gold-400 hover:text-gold-300 transition-colors">
                  +91 91797 66000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm font-light mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ideal Salon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm font-light transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
