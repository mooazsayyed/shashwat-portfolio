import React from 'react';
import { Rocket, Code, Cloud, Terminal } from 'lucide-react';
import NeonButton from './NeonButton';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white">
            <span className="relative inline-block">
              Mission Control
              <span className="absolute -inset-1 bg-neon-pink/20 blur opacity-30 rounded-lg"></span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-neon-pink mx-auto mb-8"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: About Text */}
          <div className="flex-1 flex flex-col gap-8 max-w-xl mx-auto lg:mx-0">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-neon-blue font-medium">Greetings, fellow space traveler!</span> I'm a passionate DevOps engineer and cloud architect on a mission to automate, optimize, and revolutionize the way we deploy and manage infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
               <span className="text-neon-green font-medium">Good experience</span> navigating the cosmos of cloud platforms, I specialize in crafting robust CI/CD pipelines, orchestrating containerized applications, and engineering infrastructure as code solutions that scale across galaxies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not terraforming cloud environments, you can find me exploring the latest technologies, contributing to open-source projects, or mentoring the next generation of cosmic engineers.
            </p>
            <div className="mt-4">
              <NeonButton 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                color="green"
                className="px-8 py-3 text-lg font-semibold"
              >
                Let's Connect
              </NeonButton>
            </div>
          </div>
          {/* Right: Feature Cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { 
                icon: <Rocket className="h-10 w-10 text-neon-pink" />, 
                title: "CI/CD Pipelines", 
                description: "Launching code to production with automated precision" 
              },
              { 
                icon: <Code className="h-10 w-10 text-neon-blue" />, 
                title: "Infrastructure as Code", 
                description: "Crafting galaxies of resources with a few lines of code" 
              },
              { 
                icon: <Cloud className="h-10 w-10 text-neon-green" />, 
                title: "Cloud Architecture", 
                description: "Designing resilient systems across multiple dimensions" 
              },
              { 
                icon: <Terminal className="h-10 w-10 text-neon-purple" />, 
                title: "Automation", 
                description: "Creating self-healing systems that operate autonomously" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 shadow-lg hover:shadow-neon-pink/20 transition-all duration-300 flex flex-col items-center text-center gap-4 group relative overflow-hidden"
              >
                <div className="mb-2 z-10">{item.icon}</div>
                <h3 className="text-xl font-heading mb-1 text-white group-hover:text-neon-pink transition-colors z-10">
                  {item.title}
                </h3>
                <p className="text-base text-gray-400 z-10">{item.description}</p>
                {/* Neon border beam effect */}
                <div className="absolute inset-0 pointer-events-none z-0 rounded-2xl border-2 border-transparent animate-border-beam"
                  style={{
                    background: 'linear-gradient(120deg, #ff00ff, #00f0ff, #00ffaa, #ff00ff)',
                    backgroundSize: '300% 300%',
                    filter: 'blur(6px)',
                    opacity: 0.5,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="container mx-auto mt-20 max-w-3xl z-10">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl border border-neon-blue/30 shadow-2xl p-10 flex flex-col gap-10 overflow-visible">
          {/* Glowing background */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 via-neon-pink/10 to-neon-green/10 blur-2xl opacity-80 animate-pulse"></div>
          </div>
          {/* Heading with icon and gradient text */}
          <div className="flex items-center gap-3 mb-2 z-10">
            <svg className="w-8 h-8 text-neon-blue animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5a12.083 12.083 0 01-6.16-10.922L12 14z" /></svg>
            <h2 className="text-2xl md:text-3xl font-heading bg-gradient-to-r from-neon-blue via-neon-pink to-neon-green bg-clip-text text-transparent font-bold tracking-wide animate-pulse">Education</h2>
          </div>
          {/* Timeline */}
          <div className="relative flex gap-8">
            {/* Vertical neon timeline bar */}
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-pink to-neon-green rounded-full blur-sm opacity-80"></div>
            <div className="flex flex-col gap-10 pl-12 w-full z-10">
              {/* Timeline entry */}
              <div className="relative flex items-start gap-6 group">
                {/* Neon dot */}
                <div className="absolute -left-7 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-neon-blue via-neon-pink to-neon-green shadow-lg animate-pulse border-4 border-white/10"></div>
                <div>
                  <h3 className="text-lg font-heading text-white font-semibold">Bachelor's in Computer Application Hons Cloud Computing</h3>
                  <p className="text-gray-400">Symbiosis Institute of Computer Studies and Research, 2022 - 2025</p>
                </div>
              </div>
              {/* Add more timeline entries here if needed */}
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute w-72 h-72 border border-neon-green/10 rounded-full -left-36 bottom-20 opacity-30"></div>
      <div className="absolute w-48 h-48 border border-neon-pink/10 rounded-full right-12 bottom-12 opacity-20"></div>
    </section>
  );
};

export default AboutSection;