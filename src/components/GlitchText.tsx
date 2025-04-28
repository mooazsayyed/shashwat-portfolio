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
    const timeout = setTimeout(() => setIsGlitching(false), 800);

    // More frequent random glitches (every 3 seconds instead of 7)
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 500); // Reduced duration from 800ms to 500ms
    }, 3000); // Reduced interval from 7000ms to 3000ms

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