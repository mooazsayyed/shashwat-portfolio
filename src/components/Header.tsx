import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Twitter } from 'lucide-react';
import NeonButton from './NeonButton';

const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SOCIALS = [
  {
    href: 'https://github.com',
    label: 'GitHub',
    icon: Github,
    color: 'neon-blue',
    pulse: 'animate-pulse',
  },
  {
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: Linkedin,
    color: 'neon-green',
    pulse: 'animate-pulse',
  },
  {
    href: 'https://twitter.com',
    label: 'Twitter',
    icon: Twitter,
    color: 'neon-pink',
    pulse: 'animate-pulse',
  },
];

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/10 backdrop-blur-xl shadow-2xl`}
      style={{ boxShadow: '0 4px 32px 0 #00f0ff33, 0 1.5px 0 0 #00f0ff55' }}
    >
      <div className="relative container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="text-2xl font-heading font-orbitron text-neon-blue font-bold glitch-text drop-shadow-neon-blue hover:scale-105 transition-transform"
          onClick={e => { e.preventDefault(); scrollToSection('hero'); }}
        >
          <span className="relative inline-block">
            &lt; SHASHWAT.DEV /&gt;
            <span className="absolute -inset-0.5 bg-neon-blue/20 blur opacity-30"></span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 xl:space-x-8">
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative px-4 py-2 text-base font-sans font-medium text-white transition-all duration-200 group hover:text-neon-blue focus:text-neon-blue focus:outline-none"
              onClick={e => { e.preventDefault(); scrollToSection(item.id); }}
            >
              <span className="transition-all duration-200 group-hover:drop-shadow-[0_0_8px_#00f0ff] group-hover:scale-110 group-focus:scale-110">
                {item.label}
              </span>
            </a>
          ))}
          <NeonButton onClick={() => window.open('/resume.pdf', '_blank')} className="ml-2 font-orbitron">
            Resume
          </NeonButton>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4 ml-6">
          {SOCIALS.map(({ href, label, icon: Icon, color }, i) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`relative group text-${color} transition-transform duration-200 hover:scale-125 focus:scale-125`}
            >
              <span className={`absolute -inset-2 rounded-full blur-lg opacity-40 group-hover:opacity-80 group-focus:opacity-80 bg-${color}`}></span>
              <Icon size={26} className={`relative z-10 drop-shadow-[0_0_8px_var(--color-${color})] animate-orbit`} />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neon-blue hover:text-neon-pink transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${mobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}
        style={{ boxShadow: mobileMenuOpen ? '0 8px 32px 0 #00f0ff33' : undefined }}
      >
        <nav className="px-4 py-4 flex flex-col space-y-4 border-t border-neon-blue/30" style={{ background: 'transparent' }}>
          {NAV_ITEMS.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-base text-white font-sans hover:text-neon-blue py-2 transition-all duration-200 group"
              onClick={e => { e.preventDefault(); scrollToSection(item.id); }}
            >
              <span className="group-hover:drop-shadow-[0_0_8px_#00f0ff] group-hover:scale-110 transition-transform duration-200">
                {item.label}
              </span>
            </a>
          ))}
          <NeonButton
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="w-full justify-center mt-2 font-orbitron"
          >
            Resume
          </NeonButton>
          <div className="flex items-center justify-center space-x-6 mt-4">
            {SOCIALS.map(({ href, label, icon: Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`relative group text-${color} transition-transform duration-200 hover:scale-125 focus:scale-125`}
              >
                <span className={`absolute -inset-2 rounded-full blur-lg opacity-40 group-hover:opacity-80 group-focus:opacity-80 bg-${color}`}></span>
                <Icon size={24} className={`relative z-10 drop-shadow-[0_0_8px_var(--color-${color})] animate-orbit`} />
              </a>
            ))}
          </div>
        </nav>
      </div>
      {/* Custom orbit animation */}
      <style>{`
        @keyframes orbit {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(8deg) scale(1.15); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .animate-orbit {
          animation: orbit 2.2s cubic-bezier(.4,0,.2,1) infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;