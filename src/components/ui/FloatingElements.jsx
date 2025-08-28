import React from 'react';
import { motion } from 'framer-motion';

const FloatingElements = ({ count = 6 }) => {
  const elements = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 60 + 20, // 20-80px
    initialX: Math.random() * window.innerWidth,
    initialY: Math.random() * window.innerHeight,
    duration: Math.random() * 10 + 10, // 10-20 seconds
    delay: Math.random() * 5,
    color: ['blue', 'purple', 'indigo', 'pink'][Math.floor(Math.random() * 4)]
  }));

  const colorClasses = {
    blue: 'bg-blue-500/20',
    purple: 'bg-purple-500/20',
    indigo: 'bg-indigo-500/20',
    pink: 'bg-pink-500/20'
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute rounded-full blur-sm ${colorClasses[element.color]}`}
          style={{
            width: element.size,
            height: element.size,
            left: element.initialX,
            top: element.initialY,
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.3, 0.6, 0.2, 0.3],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-300/30 rotate-45"
        animate={{ rotate: [45, 405], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-12 h-12 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full"
        animate={{ 
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute top-1/3 right-10 w-8 h-8 bg-indigo-400/30"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default FloatingElements;