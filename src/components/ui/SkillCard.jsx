import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, ExternalLink, Award } from 'lucide-react';

const SkillCard = ({ skill, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = skill.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-6 h-6" />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
            {skill.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {skill.description}
          </p>
        </div>
      </div>

      {/* Technologies Preview */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-2">
          {skill.technologies.slice(0, isExpanded ? skill.technologies.length : 3).map((tech) => (
            <span
              key={tech.name}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
              style={{ borderLeft: `3px solid ${tech.color || '#3B82F6'}` }}
            >
              {tech.name}
            </span>
          ))}
          {!isExpanded && skill.technologies.length > 3 && (
            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              +{skill.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Progress Bars - Only show when expanded or if less than 4 technologies */}
      {(isExpanded || skill.technologies.length <= 3) && (
        <motion.div
          initial={isExpanded ? { opacity: 0, height: 0 } : { opacity: 1, height: 'auto' }}
          animate={isExpanded ? { opacity: 1, height: 'auto' } : { opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="space-y-3 mb-4"
        >
          {skill.technologies.map((tech, techIndex) => (
            <div key={tech.name} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="text-gray-700 dark:text-gray-300">{tech.name}</span>
                <span className="text-gray-500 dark:text-gray-400">{tech.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <motion.div
                  className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tech.level}%` }}
                  transition={{ duration: 1, delay: techIndex * 0.1 }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>{skill.projects} proyectos</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>{skill.experience}</span>
          </div>
        </div>
      </div>

      {/* Expand Button */}
      {skill.technologies.length > 3 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-center gap-2 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {isExpanded ? (
            <>
              <span>Ver menos</span>
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Ver más</span>
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </motion.div>
  );
};

export default SkillCard;