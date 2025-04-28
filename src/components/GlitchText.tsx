import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ children, className = '' }) => {
  const [isGlitching, setIsGlitching] = useState(false);
  
  useEffect(() => {
    // Initial glitch on mount
    setIsGlitching(true);
    const timeout = setTimeout(() => setIsGlitching(false), 1000);
    
    // Periodic random glitches
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 800);
    }, 7000);
    
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <h1 className={`relative inline-block ${className}`}>
      <span className="relative z-10">
        {children}
      </span>
      
      {isGlitching && (
        <>
          <span className="absolute inset-0 z-0 text-neon-pink left-[0.5px] animate-glitch-1 opacity-70">
            {children}
          </span>
          <span className="absolute inset-0 z-0 text-neon-blue left-[-0.5px] animate-glitch-2 opacity-70">
            {children}
          </span>
        </>
      )}
    </h1>
  );
};

export default GlitchText;