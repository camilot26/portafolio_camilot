import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const TypewriterText = ({
  texts = [],
  speed = 150,
  deleteSpeed = 100,
  delayBetween = 2000,
  className = '',
  cursorClassName = ''
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), delayBetween);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, move to next text
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, texts, speed, deleteSpeed, delayBetween]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <div className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        className={`inline-block w-0.5 h-8 bg-blue-600 dark:bg-blue-400 ml-1 ${cursorClassName}`}
        animate={{ opacity: showCursor ? 1 : 0 }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
};

export default TypewriterText;