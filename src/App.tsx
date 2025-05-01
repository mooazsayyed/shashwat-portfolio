import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.className = 'neon-cursor';
    document.body.appendChild(cursor);

    const trail = document.createElement('div');
    trail.className = 'neon-cursor-trail';
    document.body.appendChild(trail);

    let mouseX = 0, mouseY = 0;
    let trailX = 0, trailY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate3d(${mouseX - 9}px, ${mouseY - 9}px, 0)`;
    };
    const moveTrail = () => {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      trail.style.transform = `translate3d(${trailX - 18}px, ${trailY - 18}px, 0)`;
      requestAnimationFrame(moveTrail);
    };
    window.addEventListener('mousemove', moveCursor);
    moveTrail();
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cursor.remove();
      trail.remove();
    };
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen bg-space text-white font-body overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
    </>
  );
}

export default App;