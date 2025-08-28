import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  className = '',
  centered = true,
  ...props 
}) => {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`} {...props}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
      >
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          {title}
        </span>
      </motion.h2>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle;