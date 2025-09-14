import { motion } from 'framer-motion';
import { BookOpen, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/kainitxyz', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/nitullano-russel-l-5a07a0291/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:russelnitullano08@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Chapter I - Introduction', href: '#home' },
    { name: 'Chapter II - About the Author', href: '#about' },
    { name: 'Chapter III - Portfolio of Works', href: '#projects' },
    { name: 'Chapter IV - Contact & Epilogue', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-white">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 py-12 sm:py-16">
        <div className="book-page p-8 sm:p-12 bg-white/10 backdrop-blur-sm">
          {/* Book End */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-amber-200 mr-3" />
              <span className="book-subtitle text-amber-200 text-sm tracking-widest uppercase">The End</span>
            </div>
            <p className="book-body text-lg text-amber-100 max-w-2xl mx-auto leading-relaxed">
              "Every ending is a new beginning. The story continues..."
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Author Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h3 className="book-subtitle text-xl text-white mb-4">About the Author</h3>
              <p className="book-body text-amber-100 mb-6 max-w-md leading-relaxed">
                Kaiz Nitullano is a future Full-Stack Developer
                who loves building digital experiences that are both useful and enjoyable.
                He’s passionate about turning ideas into apps and websites that connect people and technology in simple, meaningful ways.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-all duration-200 backdrop-blur-sm"
                    aria-label={label}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="book-subtitle text-lg text-white mb-4">Table of Contents</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-amber-200 hover:text-white transition-colors duration-200 text-sm book-body"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Copyright & Credits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-amber-200/30 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          >
            <p className="text-amber-200 mb-3 sm:mb-0 text-sm book-body">
              © {currentYear} Kaiz Nitullano. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-amber-200 text-sm book-body">
              <span>Built with React, Tailwind CSS, Framer Motion, and Node.js with Express.</span>
            </div>
          </motion.div>

          {/* Final Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <div className="border border-amber-200/30 p-6 bg-white/5 backdrop-blur-sm rounded-lg">
              <p className="book-body text-lg text-amber-100 italic leading-relaxed">
                "The best way to predict the future is to create it. Thank you for reading this chapter of my story."
              </p>
              <p className="text-right mt-4 text-amber-200 font-medium">— Kaiz Nitullano</p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;