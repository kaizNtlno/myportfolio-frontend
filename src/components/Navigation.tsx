import { motion } from 'framer-motion';
import { BookOpen, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('1');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update page number based on scroll position
      const sections = [
        { id: 'home', page: '1' },
        { id: 'about', page: '15' },
        { id: 'projects', page: '32' },
        { id: 'contact', page: '48' },
      ];

      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentPage(sections[i].page);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Chapter I', title: 'Introduction', href: '#home' },
    { name: 'Chapter II', title: 'About the Author', href: '#about' },
    { name: 'Chapter III', title: 'Portfolio of Works', href: '#projects' },
    { name: 'Chapter IV', title: 'Contact & Epilogue', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Book-style Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-amber-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Book Title */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3"
            >
              <BookOpen size={28} className="text-amber-700" />
              <div>
                <h1 className="book-title text-xl text-amber-900">The Story of</h1>
                <p className="book-subtitle text-lg text-amber-800 font-semibold">Kaiz Nitullano</p>
              </div>
            </motion.div>

            {/* Desktop Table of Contents */}
            <div className="hidden lg:flex space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left hover:bg-amber-50 p-3 rounded-lg transition-all duration-200 group"
                >
                  <div className="text-xs text-amber-600 font-medium">{item.name}</div>
                  <div className="text-sm text-gray-700 group-hover:text-amber-800 font-medium">
                    {item.title}
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-amber-700 hover:bg-amber-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Mobile Table of Contents */}
          <motion.div
            initial={false}
            animate={{
              height: isMobileMenuOpen ? 'auto' : 0,
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-t border-amber-200"
          >
            <div className="py-4 space-y-1">
              <div className="text-xs text-amber-600 font-semibold mb-3 px-4">TABLE OF CONTENTS</div>
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 hover:bg-amber-50 transition-colors duration-200 border-l-2 border-transparent hover:border-amber-300"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-amber-600 font-medium">{item.name}</div>
                      <div className="text-sm text-gray-700 font-medium">{item.title}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Page Number Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="page-number"
      >
        <span className="book-subtitle">Page {currentPage}</span>
      </motion.div>
    </>
  );
};

export default Navigation;
