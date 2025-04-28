import React, { useEffect, useRef, ReactNode } from 'react';

interface MotionProps {
  children: ReactNode;
  initial?: any;
  animate?: any;
  transition?: any;
  className?: string;
}

// A simple implementation of motion animations without external libraries
export const motion = {
  div: ({ children, initial, animate, transition, className = '' }: MotionProps) => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
      const element = ref.current;
      if (!element) return;
      
      // Simple animation for width only
      if (initial?.width !== undefined && animate?.width !== undefined) {
        element.style.transition = `width ${transition?.duration || 0.3}s ${transition?.delay ? transition.delay + 's' : ''}`;
        
        // Set initial state
        element.style.width = initial.width;
        
        // Start animation after a small delay
        const timeoutId = setTimeout(() => {
          element.style.width = animate.width;
        }, 50);
        
        return () => clearTimeout(timeoutId);
      }
    }, [initial, animate, transition]);
    
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }
};