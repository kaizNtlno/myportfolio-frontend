import { motion } from 'framer-motion';
import { BookOpen, Code, Database, Globe, Palette, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: Code, level: 95 },
    { name: 'UI/UX Design', icon: Palette, level: 90 },
    { name: 'Mobile Development', icon: Smartphone, level: 95 },
    { name: 'Backend Development', icon: Database, level: 80 },
    { name: 'Web Performance', icon: Zap, level: 50 },
    { name: 'DevOps & Deployment', icon: Globe, level: 75 },
  ];

  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Freelance',
      period: '2025 - Present',
      description: 'Learning full-stack web development with the MERN stack (MongoDB, Express.js, React, Node.js) and TypeScript, focusing on building scalable, type-safe, and performant applications.',
    },
    {
      title: 'Mobile App Developer',
      company: 'ARIVA Academy Philippines Inc.',
      period: '2024 - 2025',
      description: 'Transitioned to cross-platform development using React Native with Expo, building mobile applications with reusable components, responsive design, and optimized performance for both Android and iOS.',
    },
    {
      title: 'Android App Developer',
      company: 'Freelance',
      period: '2023 - 2024',
      description: 'Started developing a mobile application in Android Studio, focusing on learning modern Android development practices and building scalable, user-friendly features.',
    },
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20">
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
              <span className="book-subtitle text-amber-600 text-sm tracking-widest uppercase">Chapter II</span>
            </div>
            <h2 className="chapter-title text-4xl sm:text-5xl lg:text-6xl text-center mb-8">
              About the Author
            </h2>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Author Story */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="book-body text-lg text-gray-700 leading-relaxed">
                <span className="drop-cap">T</span>
                he journey of Kaiz Nitullano began with curiosity, where each line of code was a new adventure to explore. Starting with mobile app development in React Native, Kaiz has since expanded his skills and is now focused on becoming a full-stack web developer.
              </div>

              <div className="book-body text-lg text-gray-700 leading-relaxed">
                His experience spans building intuitive user interfaces and diving deeper into backend development, with a growing ability to bring both sides together into seamless, scalable applications. What sets Kaiz apart is not just technical skill, but a commitment to creating digital experiences that are meaningful, user-centered, and impactful.
              </div>

              <div className="book-body text-lg text-gray-700 leading-relaxed">
                In the ever-changing world of technology, Kaiz continues to learn and evolve, exploring new frameworks, best practices, and design approaches. His philosophy is simple: great software should not only work well, but also feel natural, look beautiful, and inspire transformation.
              </div>

              {/* Technology Expertise */}
              <div className="mt-8">
                <h3 className="book-subtitle text-xl text-amber-800 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-cyan-100 text-cyan-800 rounded-full text-sm font-medium"
                  >
                    React + Vite
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    TypeScript
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    Node.js + Express.js
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                  >
                    Tailwind CSS
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium"
                  >
                    MongoDB
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                  >
                    Firebase
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium"
                  >
                    React Native + Expo
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    EAS
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Skills Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="book-subtitle text-xl text-amber-800 mb-6">Mastery Levels</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <skill.icon size={20} className="text-amber-600" />
                        <span className="book-body font-medium text-gray-700">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-amber-600 to-amber-800 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Professional Journey */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <h3 className="chapter-title text-3xl text-center mb-12">
              Professional Journey
            </h3>
            
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="border-l-4 border-amber-400 pl-8 py-4 bg-amber-50/30"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <h4 className="book-subtitle text-xl text-gray-900">{exp.title}</h4>
                    <span className="text-amber-700 font-medium text-sm">{exp.period}</span>
                  </div>
                  <p className="text-amber-600 mb-3 font-medium">{exp.company}</p>
                  <p className="book-body text-gray-700 leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Author's Philosophy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="border-2 border-amber-300 p-8 bg-gradient-to-r from-amber-50 to-amber-100/50">
              <h3 className="book-subtitle text-2xl text-amber-800 mb-4">Author's Philosophy</h3>
              <p className="book-body text-lg text-gray-700 italic leading-relaxed">
                "The true art of development happens where technology meets human experience.
                Every project is a chance to tell a story, solve a problem,
                and create something that makes the digital world more beautiful and useful."
              </p>
              <p className="text-right mt-4 text-amber-700 font-medium">- Kaiz Nitullano</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;