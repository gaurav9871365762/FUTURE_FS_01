import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, Coffee, Copyright, ArrowUp,
  Code, Mail, Phone 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-transparent to-gray-50 dark:to-dark/50 pt-16 pb-8">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-0">
        <svg 
          className="relative block w-full h-16" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            className="fill-current text-gray-50 dark:text-dark"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                <Code className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold gradient-text">Portfolio</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Crafting digital experiences with passion and precision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Web Development',
                'UI/UX Design',
                'Mobile Apps',
                'API Development',
                'Consulting'
              ].map((service) => (
                <li key={service} className="text-gray-600 dark:text-gray-300">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-primary" />
                <span className="text-gray-600 dark:text-gray-300">
                  hello@gauravportfolio.dev
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-primary" />
                <span className="text-gray-600 dark:text-gray-300">
                  +91 9871365762
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-800 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
            <Copyright size={16} />
            <span>{new Date().getFullYear()} Gaurav Maurya. All rights reserved.</span>
          </div>

          {/* Made With Love */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600 dark:text-gray-300">Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span className="text-gray-600 dark:text-gray-300">and</span>
            <Coffee size={16} className="text-amber-600" />
            <span className="text-gray-600 dark:text-gray-300">in India</span>
          </div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-4 py-2 rounded-full glass-effect"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </motion.button>
        </div>

        {/* Visitor Counter (Optional) */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <div className="inline-flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span>Currently online</span>
            <span className="mx-2">•</span>
            <span>Visitors: 1,234</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;