import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';

// Components
import Button from '@components/ui/Button';
import TypewriterText from '@components/ui/TypewriterText';
import FloatingElements from '@components/ui/FloatingElements';
import ProfileImage from '@components/ui/ProfileImage';

// Utils
import { fadeInUp, staggerContainer } from '@utils/animations';
import { scrollToSection } from '@utils/navigation';

const Hero = () => {
  const handleDownloadCV = () => {
    // Implementar descarga del CV
    const link = document.createElement('a');
    link.href = '/cv-camilo-tejada.pdf';
    link.download = 'CV-Camilo-Tejada.pdf';
    link.click();
  };

  const handleContact = () => {
    scrollToSection('contact');
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Elements */}
      <FloatingElements />
      
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-gray-900 dark:to-gray-800" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <motion.div 
            variants={fadeInUp}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/20 dark:border-gray-700/50 mb-6"
            >
              <span className="text-2xl">👋</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                ¡Hola! Soy
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Camilo Tejada
              </span>
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.div
              variants={fadeInUp}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-6 h-16 flex items-center justify-center lg:justify-start"
            >
              <TypewriterText
                texts={[
                  'Full Stack Developer',
                  'Backend Specialist',
                  'Java Expert',
                  'Problem Solver'
                ]}
                speed={100}
                deleteSpeed={50}
                delayBetween={2000}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Desarrollador apasionado especializado en crear soluciones digitales 
              robustas y escalables. Experto en Java, JavaScript y tecnologías modernas.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={handleContact}
                className="group"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Contáctame
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={handleDownloadCV}
                className="group"
              >
                <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Descargar CV
              </Button>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex gap-8 justify-center lg:justify-start mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Años Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-white">10+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center lg:justify-end"
          >
            <ProfileImage />
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={fadeInUp}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
            whileHover={{ y: -5 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;