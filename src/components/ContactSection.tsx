import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import NeonButton from './NeonButton';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white">
            <span className="relative inline-block">
              Initiate Contact
              <span className="absolute -inset-1 bg-neon-green/20 blur opacity-30 rounded-lg"></span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-neon-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Ready to collaborate on your next  venture? Send me a transmission!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
          {/* Contact Info Cards */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-neon-blue/20 shadow-lg hover:shadow-neon-blue/30 transition-all duration-300 flex items-center gap-6">
              <Mail className="text-neon-blue w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">Email</h3>
                <p className="text-gray-400 mb-1">contact@neonastro.dev</p>
                <a href="mailto:contact@neonastro.dev" className="text-neon-blue hover:text-neon-pink transition-colors duration-300 text-sm font-medium">
                  Send a message
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-neon-pink/20 shadow-lg hover:shadow-neon-pink/30 transition-all duration-300 flex items-center gap-6">
              <Phone className="text-neon-pink w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">Phone</h3>
                <p className="text-gray-400 mb-1">+91 9665398253</p>
                <a href="tel:+15551234567" className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm font-medium">
                  Give me a call
                </a>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-neon-green/20 shadow-lg hover:shadow-neon-green/30 transition-all duration-300 flex items-center gap-6">
              <MapPin className="text-neon-green w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-heading font-semibold text-white mb-1">Location</h3>
                <p className="text-gray-400 mb-1">Pune, MH, INDIA</p>
                <p className="text-neon-green text-sm font-medium">
                  Available for remote work
                </p>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="flex-1 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-lg p-10 rounded-2xl border border-white/10 shadow-xl flex flex-col gap-6 relative overflow-hidden">
              {/* Neon beam above the form */}
              <div className="absolute left-1/2 -translate-x-1/2 -top-3 w-3/4 h-2 bg-gradient-to-r from-neon-blue via-neon-green to-neon-pink blur-lg opacity-80 animate-pulse rounded-full z-10 pointer-events-none"></div>
              {/* Animated glowing border beam */}
              <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl">
                <div className="absolute inset-0 w-full h-full rounded-2xl border-2 border-transparent animate-border-beam" style={{
                  background: 'linear-gradient(120deg, #00f0ff, #00ffaa, #ff00ff, #00f0ff)',
                  backgroundSize: '300% 300%',
                  filter: 'blur(4px)',
                  opacity: 0.7,
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }} />
              </div>
              <h3 className="text-2xl font-heading font-semibold text-white mb-2">Send a Message</h3>
              {submitted ? (
                <div className="bg-neon-green/10 border border-neon-green/30 text-neon-green p-4 rounded-md mb-2 text-center">
                  Message sent successfully! I'll respond to your transmission shortly.
                </div>
              ) : null}
              <div>
                <label htmlFor="name" className="block text-gray-300 mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-lg px-4 py-3 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-300 mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-lg px-4 py-3 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-lg px-4 py-3 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <NeonButton
                color="green"
                className="w-full justify-center mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Transmitting...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </NeonButton>
            </form>
          </div>
        </div>
      </div>

      {/* Decoration */}
      <div className="absolute w-80 h-80 border border-neon-green/10 rounded-full -right-40 top-20 opacity-20"></div>
    </section>
  );
};

export default ContactSection;