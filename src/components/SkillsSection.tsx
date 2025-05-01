import React from 'react';
import { motion } from './MotionWrapper';
import { IconCloudDemo } from './SkillsIcons';

interface SkillItemProps {
  name: string;
  level: number;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, level, color }) => {
  return (
    <motion.div
      className="relative group"
      animate={{ scale: [1, 1.02, 1] }}
      transition={{ duration: 0.2 }}
    >
      <div className={`p-4 rounded-lg backdrop-blur-sm border ${color.replace('text-', 'border-')}/20 
        group-hover:shadow-lg group-hover:shadow-${color.replace('text-', '')}/20 
        transition-all duration-300 hover:bg-space-light/10`}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-white font-medium group-hover:${color} transition-colors duration-300`}>{name}</span>
          <span className={`${color} text-sm font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
            {level}%
          </span>
        </div>
        <div className="h-1.5 bg-gray-700/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full rounded-full ${color.replace('text-', 'bg-')} group-hover:animate-pulse`}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ duration: 1, delay: 0.2 }}
            children={null}
          />
        </div>
      </div>
    </motion.div>
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
    <section id="skills" className="relative py-16 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-stretch gap-10 md:gap-16">
          {/* Left: Icon Cloud */}
          <div className="flex-1 flex items-center md:justify-start justify-center md:pl-0 pl-0">
            <div className="w-full max-w-[560px] md:max-w-[720px] h-[400px] md:h-[640px] flex items-center md:justify-start justify-center md:-ml-16 lg:-ml-24 xl:-ml-32">
              <IconCloudDemo />
            </div>
          </div>
          {/* Right: Skills Content */}
          <div className="flex-[2] flex flex-col justify-center">
            <motion.div
              className="mb-12 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-sans mb-4 text-white hover:text-neon-green transition-colors duration-300">
                <span className="relative inline-block group">
                  Technical Arsenal
                  <span className="absolute -inset-1 bg-neon-green/20 blur opacity-30 rounded-lg group-hover:opacity-60 transition-opacity duration-300"></span>
                </span>
              </h2>
              <div className="w-12 h-0.5 bg-neon-green md:ml-0 mx-auto mb-6 hover:w-24 transition-all duration-300"></div>
              <p className="text-gray-300 max-w-2xl md:mx-0 mx-auto">
                Tools and technologies I've mastered during my cosmic journey
              </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...technologies, ...tools].map((skill, index) => (
                <SkillItem
                  key={index}
                  name={skill.name}
                  level={skill.level}
                  color={skill.color}
                />
              ))}
            </div>
            <div className="mt-12">
              <h3 className="text-xl font-sans mb-8 text-white md:text-left text-center hover:text-neon-blue transition-colors duration-300">
                Additional Technologies
              </h3>
              <div
                className="flex flex-wrap md:justify-start justify-center gap-3 max-w-3xl md:mx-0 mx-auto"
              >
                {otherSkills.map((skill, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full border backdrop-blur-sm cursor-pointer
                      ${skill.color === 'blue'
                        ? 'border-neon-blue/30 hover:border-neon-blue hover:text-neon-blue hover:shadow-lg hover:shadow-neon-blue/20'
                        : skill.color === 'pink'
                          ? 'border-neon-pink/30 hover:border-neon-pink hover:text-neon-pink hover:shadow-lg hover:shadow-neon-pink/20'
                          : 'border-neon-green/30 hover:border-neon-green hover:text-neon-green hover:shadow-lg hover:shadow-neon-green/20'
                      } transition-all duration-300`}
                  >
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced orbital decorations */}
      <div className="absolute w-96 h-96 border border-neon-blue/5 rounded-full -right-48 top-1/2 animate-spin-slow 
        hover:border-neon-blue/20 transition-colors duration-300"></div>
      <div className="absolute w-64 h-64 border border-neon-pink/5 rounded-full -left-32 bottom-24 animate-spin-slower
        hover:border-neon-pink/20 transition-colors duration-300"></div>
    </section>
  );
};

export default SkillsSection;