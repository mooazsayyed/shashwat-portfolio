import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import GlitchText from './GlitchText';
import TypewriterText from './TypewriterText';
import NeonButton from './NeonButton';
import { Meteors } from './magicui/meteors';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const shootingStar = () => {
      if (!sectionRef.current) return;

      const star = document.createElement('div');
      star.className = 'shooting-star';

      // Random position
      const startX = Math.random() * window.innerWidth;
      const startY = Math.random() * (window.innerHeight / 2);

      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;

      sectionRef.current.appendChild(star);

      // Remove after animation completes
      setTimeout(() => {
        star.remove();
      }, 1000);
    };

    // Shooting star every 5 seconds
    const interval = setInterval(shootingStar, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Meteors background effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <div className="relative overflow-hidden h-full w-full">
          <Meteors />
          {/* <div style={{background: 'red', width: 100, height: 100, position: 'absolute', top: 0, left: 0, zIndex: 1000}}></div> */}
        </div>
      </div>
      <div className="container mx-auto text-center z-10">
        <div className="mb-4">
          <GlitchText className="text-4xl md:text-6xl font-crazy mb-4">
            🌌 Hello, I'm Shashwat Agarwal
          </GlitchText>

          <div className="h-16 md:h-24">
            <TypewriterText
              texts={[
                "DevOps Voyager",
                "Cloud Explorer",
                "Automation Expert"
              ]}
              className="text-xl md:text-3xl text-neon-blue font-heading"
            />
          </div>

          <p className="text-lg md:text-2xl mt-6 mb-10 text-gray-300 max-w-3xl mx-auto">
            I don't just deploy servers — <span className="text-neon-pink font-semibold">I launch missions</span>. 🚀
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <NeonButton
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              color="blue"
              className="sm:w-auto"
            >
              🚀 Launch My Journey
            </NeonButton>
            <NeonButton
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              color="pink"
              className="sm:w-auto"
            >
              💻 Explore My Missions
            </NeonButton>
          </div>
        </div>
      </div>

      <button
        className="absolute bottom-10 animate-bounce text-white opacity-70 hover:opacity-100 transition-opacity"
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>

      {/* Orbital decoration elements */}
      <div className="absolute w-64 h-64 border border-neon-blue/30 rounded-full animate-spin-slow opacity-20 -left-20 top-1/3"></div>
      <div className="absolute w-96 h-96 border border-neon-pink/20 rounded-full animate-spin-reverse-slow opacity-20 -right-32 top-1/4"></div>
    </section>
  );
};

export default HeroSection;