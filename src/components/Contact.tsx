import { motion } from 'framer-motion';
import { BookOpen, CheckCircle, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import ErrorModal from './ui/ErrorModal';

const API_URL = 'https://myportfolio-six-steel-86.vercel.app/api/contact';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<{ title: string; message: string } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError({
        title: 'Incomplete Form',
        message: 'Please fill in all required fields before submitting.',
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }
      
      setIsSubmitted(true);
    } catch (error: Error | unknown) {
      console.error('Error details:', {
        message: error instanceof Error ? error.message : 'An unknown error occurred',
        formData: formData
      });
      setError({
        title: 'Error Sending Message',
        message: error instanceof Error 
          ? error.message 
          : 'There was a problem sending your message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Electronic Correspondence',
      value: 'russelnitullano08@gmail.com',
      href: 'mailto:russelnitullano08@gmail.com',
    },
    {
      icon: Phone,
      title: 'Voice Communication',
      value: '+639166879824',
      href: 'tel:+639166879824',
    },
    {
      icon: MapPin,
      title: 'Geographic Location',
      value: 'Central Bicutan, Taguig City, Philippines',
      href: 'https://www.google.com/maps/place/Central+Bicutan,+Taguig,+Metro+Manila',
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20">
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
              <span className="book-subtitle text-amber-600 text-sm tracking-widest uppercase">Chapter IV</span>
            </div>
            <h2 className="chapter-title text-4xl sm:text-5xl lg:text-6xl text-center mb-8">
              Contact & Epilogue
            </h2>
            <p className="book-body text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              The story doesn’t end here. It continues through collaboration,
              conversation, and the shared pursuit of building meaningful digital experiences.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="book-subtitle text-2xl text-amber-800 mb-6">
                  Establishing Connection
                </h3>
                <div className="book-body text-lg text-gray-700 leading-relaxed space-y-4">
                  <p>
                    <span className="drop-cap">T</span>
                    he journey of collaboration starts with a simple conversation.
                    Whether you’re looking for a partner for your next digital project,
                    want to explore new ideas, or just connect with someone passionate about the craft,
                    I’d be glad to talk.
                  </p>
                  <p>
                    Every successful project begins with understanding—your vision,
                    your challenges, and your goals. Together, we can turn ideas into reality
                    through thoughtful design and reliable development.
                  </p>
                </div>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <h4 className="book-subtitle text-xl text-amber-800 mb-4">Preferred Methods of Contact</h4>
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-4 p-4 rounded-lg hover:bg-amber-50 transition-colors duration-200 border border-amber-200"
                  >
                    <info.icon className="w-6 h-6 text-amber-700" />
                    <div>
                      <p className="text-sm text-amber-600">{info.title}</p>
                      <p className="text-gray-700">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-8 rounded-lg border border-amber-200"
            >
              <h3 className="book-subtitle text-2xl text-amber-800 mb-6">
                Send a Message
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={64} className="text-green-600 mx-auto mb-4" />
                  <h4 className="book-subtitle text-2xl text-gray-900 mb-2">
                    Message Delivered
                  </h4>
                  <p className="book-body text-gray-600">
                    Your correspondence has been received and will be attended to with the utmost care.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block book-subtitle text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 book-body bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block book-subtitle text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 book-body bg-white"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block book-subtitle text-gray-700 mb-2">
                      Subject Matter *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 book-body bg-white"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block book-subtitle text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none book-body bg-white"
                      placeholder="Share your thoughts, ideas, or project requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-amber-700 hover:bg-amber-800 text-white py-3 text-lg font-semibold"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending Message...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center space-x-2">
                        <Send size={20} />
                        <span>Send Correspondence</span>
                      </div>
                    )}
                  </Button>
                </form>
              )}
            </motion.div>
          </div>

          {/* Epilogue */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="border-2 border-amber-300 p-8 bg-gradient-to-r from-amber-50 to-amber-100/50">
              <h3 className="book-subtitle text-2xl text-amber-800 mb-6">Epilogue</h3>
              <div className="book-body text-lg text-gray-700 leading-relaxed space-y-4">
                <p>
                  <span className="drop-cap">T</span>
                  he digital story doesn’t really conclude. it keeps unfolding through innovation and collaboration.
                  Every project adds a new chapter, every challenge opens a chance to grow, and every connection can spark something extraordinary.
                </p>
                <p>
                  The journey of a developer never truly ends. It’s a continuous growth of skills,
                  ideas, and contributions to the digital world.
                  Thank you for taking the time to explore my portfolio, and I look forward to the chance to create the next chapter together.
                </p>
                <p className="text-center mt-6 text-amber-700 font-medium">
                  "The best way to predict the future is to create it together."
                </p>
                <p className="text-right mt-4 text-amber-600 font-medium">- Kaiz Nitullano</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <ErrorModal
        isOpen={!!error}
        onClose={() => setError(null)}
        title={error?.title || ''}
        message={error?.message || ''}
      />
    </section>
  );
};

export default Contact;