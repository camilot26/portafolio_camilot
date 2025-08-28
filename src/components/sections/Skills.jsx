import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Components
import SkillCard from '@components/ui/SkillCard';
import SectionTitle from '@components/ui/SectionTitle';
import Container from '@components/ui/Container';

// Data
import { skillsData } from '@data/skills';

// Utils
import { staggerContainer, fadeInUp } from '@utils/animations';

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <Container>
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <SectionTitle
              title="Tecnologías & Habilidades"
              subtitle="Las herramientas y tecnologías que domino para crear soluciones excepcionales"
            />
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillsData.map((skill, index) => (
              <motion.div
                key={skill.id}
                variants={fadeInUp}
                custom={index}
              >
                <SkillCard skill={skill} index={index} />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                En Constante Aprendizaje
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                La tecnología evoluciona constantemente, y yo también. Siempre estoy 
                explorando nuevas herramientas, frameworks y metodologías para 
                mantenerme actualizado y ofrecer las mejores soluciones.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['Machine Learning', 'GraphQL', 'Microservices', 'Kubernetes', 'Blockchain'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;