import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-10 px-4 border-t border-white/10">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-lg font-heading text-neon-blue">
              &lt;NEON.DEV/&gt;
            </p>
            <p className="text-gray-400 mt-2">
              Navigating the DevOps cosmos since 2018
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a 
              href="mailto:contact@neonastro.dev" 
              className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Alex Nova. All rights reserved.</p>
          <p className="mt-2">
            Designed with 💙 in the cosmic cloud
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;