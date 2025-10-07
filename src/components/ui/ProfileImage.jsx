import React from 'react';
import { motion } from 'framer-motion';
import profileImage from "../../images/profile1.png";
const ProfileImage = ({ 
  src = profileImage,
  alt = "Profile Image",
  size = "lg",
  className = ""
}) => {
  const sizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-80 h-80',
    xl: 'w-96 h-96'
  };

  return (
    <div className="relative">
      {/* Animated Background Ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, #3B82F6, #8B5CF6, #EC4899, #3B82F6)',
          padding: '4px'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-full h-full rounded-full bg-white dark:bg-gray-900" />
      </motion.div>

      {/* Secondary Ring */}
      <motion.div
        className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20"
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Profile Image Container */}
      <motion.div
        className={`relative ${sizes[size]} ${className} rounded-full overflow-hidden z-10 mx-auto`}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ 
          scale: 1.05,
          transition: { duration: 0.3 }
        }}
      >
        {/* Image */}
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover relative z-20"
          onLoad={(e) => {
            // Hide fallback div when image loads
            const fallback = e.target.nextElementSibling;
            if (fallback) fallback.style.display = 'none';
          }}
          onError={(e) => {
            // Hide image and show fallback
            e.target.style.display = 'none';
          }}
        />
        
        {/* Fallback - only shows if image fails */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center z-10">
          <div className="text-white text-4xl font-bold">CT</div>
        </div>
        
        {/* Overlay Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent z-30"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Floating elements - rest of your code stays the same */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"
        animate={{
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full"
        animate={{
          x: [0, 5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-white dark:border-gray-900 rounded-full z-20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
      >
        <motion.div
          className="w-full h-full bg-green-400 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </div>
  );
};

export default ProfileImage;