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
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              <span className="text-neon-blue font-medium">Greetings, fellow space traveler!</span> I'm a passionate DevOps engineer and cloud architect on a mission to automate, optimize, and revolutionize the way we deploy and manage infrastructure.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              With over <span className="text-neon-green font-medium">5 years of experience</span> navigating the cosmos of cloud platforms, I specialize in crafting robust CI/CD pipelines, orchestrating containerized applications, and engineering infrastructure as code solutions that scale across galaxies.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              When I'm not terraforming cloud environments, you can find me exploring the latest technologies, contributing to open-source projects, or mentoring the next generation of cosmic engineers.
            </p>
            
            <NeonButton 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              color="green"
            >
              Let's Connect
            </NeonButton>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              { 
                icon: <Rocket className="h-8 w-8 text-neon-pink" />, 
                title: "CI/CD Pipelines", 
                description: "Launching code to production with automated precision" 
              },
              { 
                icon: <Code className="h-8 w-8 text-neon-blue" />, 
                title: "Infrastructure as Code", 
                description: "Crafting galaxies of resources with a few lines of code" 
              },
              { 
                icon: <Cloud className="h-8 w-8 text-neon-green" />, 
                title: "Cloud Architecture", 
                description: "Designing resilient systems across multiple dimensions" 
              },
              { 
                icon: <Terminal className="h-8 w-8 text-neon-purple" />, 
                title: "Automation", 
                description: "Creating self-healing systems that operate autonomously" 
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-space-light/20 backdrop-blur-sm p-6 rounded-lg border border-white/5 hover:border-neon-blue/30 transition-all duration-300 transform hover:-translate-y-1 group"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-lg font-heading mb-2 text-white group-hover:text-neon-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400">{item.description}</p>
              </div>
            ))}
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