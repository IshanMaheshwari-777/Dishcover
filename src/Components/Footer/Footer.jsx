import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="bg-gray-900 text-white py-12"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'About', 'Recipes', 'Blog'].map((link, i) => (
              <li key={i}>
                <a
                  href={`/${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-gray-400">
            <li>https://dishcover-lemon.vercel.app/home</li>
            <li>+91 9058904238</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-bold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="https://facebook.com" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="https://x.com" className="hover:text-white transition"><FaXTwitter /></a>
            <a href="https://linkedin.com" className="hover:text-white transition"><FaLinkedinIn /></a>
            <a href="https://instagram.com" className="hover:text-white transition"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 mt-12 border-t border-gray-700 pt-6">
        © 2025 Dishcover. All rights reserved.
      </div>
    </motion.footer>
  );
};

export default Footer;
