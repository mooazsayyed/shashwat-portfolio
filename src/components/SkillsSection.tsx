import React from 'react';
import { motion } from './MotionWrapper';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{name}</span>
        <span className={`${color} text-sm`}>{level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2.5 backdrop-blur-sm">
        <motion.div
          className={`h-2.5 rounded-full ${color.replace('text-', 'bg-')}`}
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const technologies = [
    { name: "AWS", level: 95, color: "text-neon-blue" },
    { name: "Kubernetes", level: 90, color: "text-neon-blue" },
    { name: "Docker", level: 92, color: "text-neon-pink" },
    { name: "Terraform", level: 88, color: "text-neon-pink" },
    { name: "CI/CD", level: 94, color: "text-neon-green" },
    { name: "Monitoring", level: 85, color: "text-neon-green" },
  ];

  const tools = [
    { name: "Jenkins", level: 92, color: "text-neon-pink" },
    { name: "GitHub Actions", level: 88, color: "text-neon-blue" },
    { name: "Ansible", level: 85, color: "text-neon-pink" },
    { name: "Prometheus", level: 82, color: "text-neon-blue" },
    { name: "Grafana", level: 90, color: "text-neon-green" },
    { name: "ELK Stack", level: 80, color: "text-neon-green" },
  ];

  const otherSkills = [
    { name: "Python", color: "blue" },
    { name: "Bash", color: "pink" },
    { name: "Git", color: "green" },
    { name: "Linux", color: "blue" },
    { name: "Serverless", color: "pink" },
    { name: "GCP", color: "green" },
    { name: "Azure", color: "blue" },
    { name: "Redis", color: "pink" },
    { name: "MongoDB", color: "green" },
    { name: "PostgreSQL", color: "blue" },
    { name: "Nginx", color: "pink" },
    { name: "Load Balancing", color: "green" }
  ];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white">
            <span className="relative inline-block">
              Technical Arsenal
              <span className="absolute -inset-1 bg-neon-green/20 blur opacity-30 rounded-lg"></span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-neon-green mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Tools and technologies I've mastered during my cosmic journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-space-light/20 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h3 className="text-2xl font-heading mb-8 text-white inline-flex items-center">
              <span className="w-2 h-2 bg-neon-blue rounded-full mr-2"></span>
              Cloud & Infrastructure
            </h3>
            {technologies.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
          
          <div className="bg-space-light/20 backdrop-blur-sm p-8 rounded-lg border border-white/5">
            <h3 className="text-2xl font-heading mb-8 text-white inline-flex items-center">
              <span className="w-2 h-2 bg-neon-pink rounded-full mr-2"></span>
              DevOps Tools
            </h3>
            {tools.map((skill, index) => (
              <SkillItem 
                key={index} 
                name={skill.name} 
                level={skill.level} 
                color={skill.color} 
              />
            ))}
          </div>
        </div>
        
        {/* Additional skills with hexagonal shapes */}
        <div className="mt-16">
          <h3 className="text-2xl font-heading mb-10 text-white text-center">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {otherSkills.map((skill, index) => (
              <div 
                key={index}
                className={`hexagon-container group cursor-pointer
                  ${skill.color === 'blue' ? 'hover:text-neon-blue' : 
                    skill.color === 'pink' ? 'hover:text-neon-pink' : 
                    'hover:text-neon-green'}`}
              >
                <div className={`hexagon before:bg-gradient-to-br
                  ${skill.color === 'blue' 
                    ? 'before:from-neon-blue/20 before:to-transparent border-neon-blue/30' 
                    : skill.color === 'pink'
                    ? 'before:from-neon-pink/20 before:to-transparent border-neon-pink/30'
                    : 'before:from-neon-green/20 before:to-transparent border-neon-green/30'
                  }`}>
                  <span className="text-sm font-medium z-10 relative text-center">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decoration */}
      <div className="absolute w-64 h-64 border border-neon-blue/10 rounded-full -right-32 top-1/2 opacity-20"></div>
    </section>
  );
};

export default SkillsSection;