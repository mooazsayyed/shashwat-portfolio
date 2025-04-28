import React from 'react';

interface NeonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  color?: 'blue' | 'pink' | 'green';
}

const NeonButton: React.FC<NeonButtonProps> = ({ 
  children, 
  onClick, 
  className = '',
  color = 'blue'
}) => {
  const colorStyles = {
    blue: 'bg-space border-neon-blue text-neon-blue hover:bg-neon-blue/20',
    pink: 'bg-space border-neon-pink text-neon-pink hover:bg-neon-pink/20',
    green: 'bg-space border-neon-green text-neon-green hover:bg-neon-green/20'
  };

  return (
    <button
      onClick={onClick}
      className={`
        relative flex items-center px-6 py-2 overflow-hidden font-medium
        transition-all duration-300 ease-out
        border-2 rounded-full group
        ${colorStyles[color]}
        ${className}
      `}
    >
      <span className="absolute z-0 w-full h-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};

export default NeonButton;