import { motion } from 'framer-motion';
import { BookOpen, Eye, Github } from 'lucide-react';
import { useState } from 'react';
import jobinhelperImage from '../assets/Images/jobinthelper.png';
import qriva from '../assets/Images/qriva.jpg';
import timentern from '../assets/Images/timentern.jpg';
import { Button } from './ui/button';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'JobInHelper',
      description: 'A supportive mobile app designed to help IT job seekers boost their confidence, improve communication skills, and expand their knowledge in their specific field. The goal is to empower candidates to perform better in interviews and stand out in the competitive tech industry.',
      image: jobinhelperImage, // Updated image path
      technologies: ['React Native', 'EXPO', 'Firebase', 'EAS'],
      categories: ['Mobile', 'Frontend', 'Backend'], // Changed from category to categories
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2024',
    },
    {
      id: 2,
      title: 'TimeNtern',
      description: 'A mobile app that streamlines time tracking for interns. It records time-ins and time-outs, then automatically calculates remaining hours, total hours, salary, and overtime. To ensure accuracy, it uses Expo Location for validation, preventing interns from clocking in when they are not in the office.',
      image: timentern,
      technologies: ['React Native', 'Google AppScript', 'EXPO', 'Firebase', 'EAS'],
      categories: ['Mobile', 'Frontend', 'Backend'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true,
      year: '2025',
    },
    {
      id: 3,
      title: 'File Management App',
      description: 'A file management app with an added layer of security. It allows users to lock folders and hide their contents, using SHA-256 for password encryption. The app also supports file compression with advanced encryption options like AES-256 and ZipCrypto, along with several other productivity and security-focused features.',
      image: '/api/placeholder/600/400',
      technologies: ['Android Studio', 'Java', 'Kotlin'],
      categories: ['Mobile', 'Frontend'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2023',
    },
    {
      id: 4,
      title: 'Event Check-In App',
      description: 'An event time-recording app designed to streamline participant check-ins. It quickly identifies attendees as VIP, General Admission, or Non-VIP, helping HR and organizers manage entries efficiently. Integrated with Google Sheets and Google Forms for walk-in participants, the app automatically generates and sends a personalized registration form that includes event details and a unique QR code.',
      image: qriva,
      technologies: ['React Native', 'EXPO', 'Google AppScript', 'EAS'],
      categories: ['Mobile', 'Frontend'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false,
      year: '2025',
    },
  ];

  // Update filters to match your categories
  const filters = [
    { key: 'all', label: 'All Works' },
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'mobile', label: 'Mobile' },
  ];

  // Update filtering logic to work with array of categories
  const filteredProjects = projects.filter(project => 
    activeFilter === 'all' || project.categories.map(c => c.toLowerCase()).includes(activeFilter)
  );

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="book-page p-12 sm:p-16 lg:p-20">
          {/* Chapter Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <BookOpen size={32} className="text-amber-700 mr-3" />
              <span className="book-subtitle text-amber-600 text-sm tracking-widest uppercase">Chapter III</span>
            </div>
            <h2 className="chapter-title text-4xl sm:text-5xl lg:text-6xl text-center mb-8">
              Portfolio of Works
            </h2>
            <p className="book-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated collection of digital masterpieces that showcase the evolution of a craftsman's journey through the realms of technology and design.
            </p>
          </motion.div>

          {/* Filter Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12"
          >
            {filters.map((filter) => (
              <Button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                variant={activeFilter === filter.key ? 'default' : 'outline'}
                className={`text-sm sm:text-base transition-all duration-200 ${
                  activeFilter === filter.key
                    ? 'bg-amber-700 hover:bg-amber-800 text-white'
                    : 'border-amber-600 text-amber-700 hover:bg-amber-50'
                }`}
              >
                {filter.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="space-y-8 sm:space-y-12" // Adjusted spacing for mobile
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`book-body ${
                  project.featured ? 'bg-gradient-to-r from-amber-50 to-amber-100/50 p-4 sm:p-8 rounded-lg border border-amber-200' : ''
                }`}
              >
                <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 items-start lg:items-center">
                  {/* Project Image */}
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 sm:h-64 rounded-lg object-cover border border-amber-300 shadow-lg"
                    />
                    {project.featured && (
                      <div className="absolute -top-2 -right-2 bg-amber-600 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-semibold">
                        Featured Work
                      </div>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                      <h3 className="book-subtitle text-xl sm:text-2xl text-gray-900">{project.title}</h3>
                      <span className="text-amber-600 font-medium text-sm">{project.year}</span>
                    </div>
                    
                    <p className="book-body text-base sm:text-lg text-gray-700 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div>
                      <h4 className="book-subtitle text-sm text-amber-800 mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 sm:px-3 py-1 bg-amber-100 text-amber-800 text-xs sm:text-sm rounded-full border border-amber-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 pt-4">
                      <Button
                        onClick={() => window.open(project.liveUrl, '_blank')}
                        className="w-full sm:w-auto bg-amber-700 hover:bg-amber-800 text-white px-4 sm:px-6 py-2 text-sm font-semibold"
                      >
                        <Eye size={16} className="mr-0.5" />
                        View Live
                      </Button>
                      <Button
                        onClick={() => window.open(project.githubUrl, '_blank')}
                        variant="outline"
                        className="w-full sm:w-auto border-amber-600 text-amber-700 hover:bg-amber-50 px-4 sm:px-6 py-2 text-sm font-semibold"
                      >
                        <Github size={16} className="mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Portfolio Summary - Make responsive */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 sm:mt-16 text-center"
          >
            <div className="border-2 border-amber-300 p-4 sm:p-8 bg-gradient-to-r from-amber-50 to-amber-100/50">
              <h3 className="book-subtitle text-xl sm:text-2xl text-amber-800 mb-4">Portfolio Summary</h3>
              <p className="book-body text-base sm:text-lg text-gray-700 leading-relaxed">
                Each project represents a chapter in the ongoing story of digital innovation. 
                From concept to completion, every work embodies the principles of clean code, 
                thoughtful design, and user-centered development that define the craft.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-amber-700">
                <div>
                  <span className="font-semibold">{projects.length}</span> Projects
                </div>
                <div className="hidden sm:block">•</div>
                <div>
                  <span className="font-semibold">{projects.filter(p => p.featured).length}</span> Featured
                </div>
                <div className="hidden sm:block">•</div>
                <div>
                  <span className="font-semibold">
                    {new Set(projects.flatMap(p => p.categories)).size}
                  </span> Categories
                </div>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="book-body text-lg text-gray-600 mb-6">
              Interested in collaborating on your next digital masterpiece?
            </p>
            <Button
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              size="lg"
              className="bg-amber-700 hover:bg-amber-800 text-white px-8 py-3 text-lg font-semibold"
            >
              Begin Collaboration →
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;