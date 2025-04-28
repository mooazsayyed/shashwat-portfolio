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
            Ready to collaborate on your next cosmic venture? Send me a transmission!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-1 space-y-8">
            <div className="bg-space-light/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all duration-300">
              <div className="flex items-start">
                <Mail className="text-neon-blue w-6 h-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Email</h3>
                  <p className="text-gray-400">contact@neonastro.dev</p>
                  <a href="mailto:contact@neonastro.dev" className="text-neon-blue hover:text-neon-pink transition-colors duration-300 text-sm">
                    Send a message
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-space-light/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-neon-pink/30 transition-all duration-300">
              <div className="flex items-start">
                <Phone className="text-neon-pink w-6 h-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                  <a href="tel:+15551234567" className="text-neon-pink hover:text-neon-blue transition-colors duration-300 text-sm">
                    Give me a call
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-space-light/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-neon-green/30 transition-all duration-300">
              <div className="flex items-start">
                <MapPin className="text-neon-green w-6 h-6 mt-1 mr-4" />
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Location</h3>
                  <p className="text-gray-400">Seattle, WA, USA</p>
                  <p className="text-neon-green text-sm">
                    Available for remote work
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-space-light/20 backdrop-blur-sm p-8 rounded-lg border border-white/5">
              <h3 className="text-xl font-heading mb-6 text-white">Send a Message</h3>
              
              {submitted ? (
                <div className="bg-neon-green/10 border border-neon-green/30 text-neon-green p-4 rounded-md mb-6">
                  Message sent successfully! I'll respond to your transmission shortly.
                </div>
              ) : null}
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-md px-4 py-3 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-md px-4 py-3 focus:outline-none transition-colors duration-300"
                  placeholder="Enter your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-space border border-gray-700 focus:border-neon-blue text-white rounded-md px-4 py-3 focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <NeonButton 
                color="green"
                className="w-full justify-center"
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