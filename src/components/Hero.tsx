import { motion } from 'framer-motion';
import { ArrowDown, BookOpen, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Book Page Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-amber-300 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 border border-amber-400 rounded-full"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 border border-amber-200 rounded-full"></div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10 pt-24 pb-16">
        <div className="book-page p-12 sm:p-16 lg:p-20">
          {/* Bookmark */}
          <div className="bookmark"></div>
          
          {/* Chapter Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-amber-700 mr-3" />
              <span className="book-subtitle text-amber-600 text-sm tracking-widest uppercase">Chapter I</span>
            </div>
            <h1 className="chapter-title text-4xl sm:text-5xl lg:text-6xl text-center mb-8">
              Introduction
            </h1>
          </motion.div>

          {/* Author Portrait */}
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center mb-12"
          >
            <div className="relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden border-4 border-amber-200 shadow-lg">
                <img
                  src="/src/assets/Images/profile.jpg"
                  alt="Kaiz Nitullano"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-4xl font-bold text-amber-600 bg-amber-100">KN</div>';
                    }
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold">K</span>
              </div>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Drop Cap Introduction */}
            <div className="book-body text-lg sm:text-xl text-gray-700 leading-relaxed">
              <span className="drop-cap mt-1.5">I</span>
              n the digital space where creativity meets technology, there is a developer driven by curiosity and innovation. Meet Kaiz Nitullano, an aspiring Full-Stack Web Developer whose path began with mobile app development in React Native and has since expanded into the broader world of web technologies.
            </div>

            <div className="book-body text-lg sm:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              With a growing mastery of both frontend design and backend development, Kaiz is dedicated to building applications that not only work seamlessly but also deliver meaningful, engaging experiences for users. His journey is fueled by a passion for learning, creating, and pushing the boundaries of what’s possible in the digital landscape.
            </div>
            {/* Signature Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="border-l-4 border-amber-400 pl-8 py-4 bg-amber-50/50 max-w-3xl mx-auto"
            >
              <p className="book-subtitle text-xl text-amber-800 italic">
                "Each line of code contributes to a story, each design choice shapes the user experience, and every project reflects progress in the ongoing journey of digital innovation."
              </p>
              <p className="text-right mt-4 text-amber-700 font-medium">- Kaiz Nitullano</p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Continue Reading →
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="border-2 border-amber-600 text-amber-700 hover:bg-amber-50 px-8 py-3 text-lg font-semibold"
              >
                Contact the Author
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex justify-center space-x-6 pt-8"
            >
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 border border-amber-200"
                  aria-label={label}
                >
                  <Icon size={24} className="text-amber-700 hover:text-amber-800 transition-colors" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Page Turn Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="absolute bottom-8 right-8"
          >
            <motion.button
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              onClick={scrollToProjects}
              className="text-amber-600 hover:text-amber-800 transition-colors flex items-center space-x-2"
            >
              <span className="book-subtitle text-sm">Next Chapter</span>
              <ArrowDown size={20} />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;