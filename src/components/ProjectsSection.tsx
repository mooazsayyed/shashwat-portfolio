import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  codeLink?: string;
  demoLink?: string;
  color: 'blue' | 'pink' | 'green';
}

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const projects: Project[] = [
    {
      title: "Cloud Cost Optimizer",
      description: "Automated tool that analyzes AWS resources and suggests optimization strategies to reduce costs while maintaining performance.",
      tags: ["AWS", "Python", "Terraform", "DevOps"],
      codeLink: "#",
      demoLink: "#",
      color: "blue"
    },
    {
      title: "Kubernetes Dashboard",
      description: "Custom monitoring dashboard that provides real-time insights into Kubernetes cluster health, resource utilization, and deployment status.",
      tags: ["Kubernetes", "React", "Node.js", "Prometheus"],
      codeLink: "#",
      demoLink: "#",
      color: "pink"
    },
    {
      title: "GitOps Pipeline",
      description: "Complete CI/CD solution that implements GitOps principles for automated infrastructure and application deployments.",
      tags: ["GitOps", "ArgoCD", "GitHub Actions", "Docker"],
      codeLink: "#",
      demoLink: "#",
      color: "green"
    },
    {
      title: "Multi-Cloud Strategy",
      description: "Framework for deploying applications across multiple cloud providers with unified management and monitoring.",
      tags: ["AWS", "GCP", "Terraform", "IaC"],
      codeLink: "#",
      demoLink: "#",
      color: "blue"
    },
  ];
  
  const categories = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  const filteredProjects = activeCategory 
    ? projects.filter(project => project.tags.includes(activeCategory))
    : projects;

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading mb-4 text-white">
            <span className="relative inline-block">
              Stellar Projects
              <span className="absolute -inset-1 bg-neon-blue/20 blur opacity-30 rounded-lg"></span>
            </span>
          </h2>
          <div className="w-16 h-1 bg-neon-blue mx-auto mb-8"></div>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Explore my latest missions and technical expeditions
          </p>
        </div>
        
        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${!activeCategory 
                ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50' 
                : 'bg-transparent text-white border border-white/20 hover:border-neon-blue/30 hover:text-neon-blue'
              }`}
            onClick={() => setActiveCategory(null)}
          >
            All
          </button>
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
                ${activeCategory === category 
                  ? 'bg-neon-blue/20 text-neon-blue border border-neon-blue/50' 
                  : 'bg-transparent text-white border border-white/20 hover:border-neon-blue/30 hover:text-neon-blue'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`group relative bg-space-light/30 backdrop-blur-sm overflow-hidden rounded-lg transition-all duration-500 transform hover:-translate-y-2
                before:absolute before:inset-0 before:rounded-lg before:p-[2px] before:bg-gradient-to-r
                ${project.color === 'blue' 
                  ? 'before:from-neon-blue/50 before:via-transparent before:to-neon-blue/50' 
                  : project.color === 'pink'
                  ? 'before:from-neon-pink/50 before:via-transparent before:to-neon-pink/50'
                  : 'before:from-neon-green/50 before:via-transparent before:to-neon-green/50'
                }
                before:animate-border-flow
              `}
            >
              <div className="relative bg-space-light/30 p-6 rounded-lg h-full z-10">
                <h3 className="text-xl font-heading mb-3 text-white group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        project.color === 'blue' ? 'bg-neon-blue/10 text-neon-blue' : 
                        project.color === 'pink' ? 'bg-neon-pink/10 text-neon-pink' : 
                        'bg-neon-green/10 text-neon-green'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex space-x-4 mt-auto">
                  {project.codeLink && (
                    <a 
                      href={project.codeLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-blue transition-colors duration-300 flex items-center"
                    >
                      <Github size={16} className="mr-1" /> Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-neon-pink transition-colors duration-300 flex items-center"
                    >
                      <ExternalLink size={16} className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decoration */}
      <div className="absolute w-96 h-96 border border-neon-pink/10 rounded-full -left-48 bottom-24 opacity-20"></div>
    </section>
  );
};

export default ProjectsSection;