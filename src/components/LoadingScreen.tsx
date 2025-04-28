import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          onLoadingComplete();
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-space flex items-center justify-center">
      <div className="relative w-48 h-48">
        {/* Spinning Satellite Animation */}
        <div className="absolute inset-0">
          <div className="w-32 h-16 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* Satellite Body */}
            <div className="w-16 h-16 bg-neon-blue/80 rounded-full absolute left-1/2 -translate-x-1/2 animate-pulse">
              <div className="w-8 h-8 bg-space rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            {/* Solar Panels */}
            <div className="absolute inset-0 animate-spin" style={{ animationDuration: '3s' }}>
              <div className="w-32 h-4 bg-neon-pink/60 absolute top-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>
        
        {/* Loading Progress */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
            <div 
              className="h-full bg-neon-blue transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-center mt-4 text-neon-blue font-mono">
            Loading... {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;