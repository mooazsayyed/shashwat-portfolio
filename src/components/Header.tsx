import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import NeonButton from './NeonButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-space/90 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-heading text-neon-blue font-bold glitch-text"
            onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}
          >
            <span className="relative inline-block">
              &lt; SHASHWAT.DEV /&gt;
              <span className="absolute -inset-0.5 bg-neon-blue/20 blur opacity-30"></span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-lg text-white hover:text-neon-pink transition-colors duration-300 relative group"
                onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <NeonButton onClick={() => window.open('/resume.pdf', '_blank')}>
              Resume
            </NeonButton>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'
        }`}>
        <nav className="bg-space/95 backdrop-blur-md px-4 py-4 flex flex-col space-y-4 border-t border-neon-blue/30">
          {['about', 'skills', 'projects', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-lg text-white hover:text-neon-pink py-2 transition-colors duration-300"
              onClick={(e) => { e.preventDefault(); scrollToSection(item); }}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}
          <NeonButton
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="w-full justify-center"
          >
            Resume
          </NeonButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;