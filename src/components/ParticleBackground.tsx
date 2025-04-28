import React, { useEffect, useRef } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    let animationFrameId: number;

    // Set canvas size to match window
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', () => {
      setCanvasSize();
      createParticles();
    });

    setCanvasSize();

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      alpha: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.alpha = Math.random() * 0.5 + 0.1;
        
        // Random colors - stars or nebulae with different hues
        const colorType = Math.random();
        if (colorType < 0.7) {
          // White/blue stars
          this.color = `rgba(255, 255, 255, ${this.alpha})`;
        } else if (colorType < 0.8) {
          // Blue nebula
          this.color = `rgba(100, 180, 255, ${this.alpha})`;
        } else if (colorType < 0.9) {
          // Pink nebula
          this.color = `rgba(255, 100, 255, ${this.alpha})`;
        } else {
          // Green nebula
          this.color = `rgba(100, 255, 180, ${this.alpha})`;
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        // Wrap around edges
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx!.fillStyle = this.color;
        ctx!.beginPath();
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function createParticles() {
      particlesArray = [];
      // Adjust number based on screen size
      const particleCount = Math.min(200, (canvas.width * canvas.height) / 10000);
      for (let i = 0; i < particleCount; i++) {
        particlesArray.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Add a subtle gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 30, 1)');
      gradient.addColorStop(1, 'rgba(20, 5, 40, 1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0 bg-space"
    />
  );
};

export default ParticleBackground;