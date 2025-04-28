import React, { useState, useEffect } from 'react';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  texts,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false);
        setIsTyping(false);
      }, pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isTyping) {
      if (currentText.length < texts[currentTextIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(texts[currentTextIndex].slice(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        setIsPaused(true);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <div className={className}>
      <span>{currentText}</span>
      <span className="inline-block w-0.5 h-5 ml-1 bg-neon-blue animate-blink"></span>
    </div>
  );
};

export default TypewriterText;