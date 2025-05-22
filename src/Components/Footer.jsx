import React from 'react';
import { FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa';
import { FaLeaf, FaMailchimp, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
         <footer className=" bg-gradient-to-r from-[#556B2F]/90 via-[#6B8E23]/80 to-[#808000]/90 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm">
        
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold">
            <FaLeaf className="w-6 h-6 text-lime-200" />
            <span className="font-serif">BONSAI BLISS</span>
          </div>
          <p className="mt-2 text-gray-100">
            Your ultimate companion for smart plant care 🌿.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-lime-100 mb-2">Contact</h3>
          <p className="flex items-center gap-2">
            <FaMailchimp className="w-4 h-4" /> bonsai@bliss.com
          </p>
          <p className="flex items-center gap-2 mt-1">
            <FaPhone className="w-4 h-4" /> +880 1234-567890
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-lime-100 mb-2">Follow Us</h3>
          <div className="flex gap-4 text-lime-200">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-lime-200/30 text-center py-4 text-xs text-gray-200 backdrop-blur-sm">
        © {new Date().getFullYear()} BONSAI BLISS. All rights reserved.
      </div>
    </footer>   
        </div>
    );
};

export default Footer;