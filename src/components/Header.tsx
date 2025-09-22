import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#home' },
    { name: 'Recursos', href: '#features' },
    { name: 'Como Funciona', href: '#how-it-works' },
    { name: 'Benefícios', href: '#benefits' },
    { name: 'Preços', href: '#pricing' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <svg className="h-12 w-12" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 2 C25 2 10 22 10 45 C10 60 25 85 50 98 C75 85 90 60 90 45 C90 22 75 2 50 2 Z M30 70 L50 30 L70 70 H55 L50 60 L45 70 H30Z" fill="#F97316"/>
              <path d="M25 50 Q 50 40 75 50" stroke="#FFFFFF" strokeWidth="8" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-2xl font-bold text-gradient">MOTOROTAS</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block btn-primary"
            onClick={() => navigate('/construction')}
          >
            Começar Agora
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-gray-700 hover:text-orange-500 font-medium transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
            <button 
              className="w-full btn-primary mt-4"
              onClick={() => navigate('/construction')}
            >
              Começar Agora
            </button>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;