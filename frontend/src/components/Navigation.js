import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, Code } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#company' },
    { name: 'Team', href: '#team' },
    { name: 'Careers', href: '#careers' },
    { name: 'Learning', href: '#learning' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-2 rounded-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Hot Beans <span className="text-blue-400">Web</span>
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
              </motion.a>
            ))}
            <Link to="/apply">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden bg-slate-800/95 backdrop-blur-md rounded-lg mt-2 p-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-300 hover:text-white py-2 transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link to="/apply">
              <button
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2 rounded-full font-semibold mt-4 hover:shadow-lg transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Apply Now
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;