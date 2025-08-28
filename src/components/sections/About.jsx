import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Award, 
  Code, 
  Coffee,
  Users,
  Lightbulb
} from 'lucide-react';

// Components
import SectionTitle from '@components/ui/SectionTitle';
import Container from '@components/ui/Container';

// Utils
import { fadeInUp, staggerContainer } from '@utils/animations';

// Data
import { personalInfo, timeline, achievements } from '@data/about';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
              title="Sobre Mí"
              subtitle="Conoce más sobre mi trayectoria y pasión por el desarrollo"
            />
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Personal Info & Description */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  ¡Hola! Soy Camilo
                </h3>
                
                <div className="space-y-4 text-gray-600 dark:text-gray-400">
                  <p>
                    Desarrollador Full Stack apasionado por crear soluciones digitales 
                    que marquen la diferencia. Con más de 3 años de experiencia, me 
                    especializo en el desarrollo backend con Java y frontend con React.
                  </p>
                  
                  <p>
                    Mi enfoque se centra en escribir código limpio, escalable y 
                    mantenible, siempre aplicando las mejores prácticas de la industria 
                    y manteniéndome actualizado con las últimas tecnologías.
                  </p>
                  
                  <p>
                    Cuando no estoy programando, disfruto aprendiendo nuevas tecnologías, 
                    contribuyendo a proyectos open source, y compartiendo conocimiento 
                    con la comunidad de desarrolladores.
                  </p>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Medellín, Colombia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      3+ años experiencia
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Ing. Sistemas
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Full Stack Dev
                    </span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div 
                  variants={fadeInUp}
                  className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl"
                >
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-xl"
                >
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tecnologías</div>
                </motion.div>
                <motion.div 
                  variants={fadeInUp}
                  className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-xl"
                >
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Dedicación</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Timeline & Experience */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Mi Trayectoria
              </h3>

              {/* Timeline */}
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.id}
                    variants={fadeInUp}
                    custom={index}
                    className="relative flex gap-4"
                  >
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.type === 'work' 
                          ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                          : item.type === 'education'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      }`}>
                        {item.type === 'work' && <Code className="w-5 h-5" />}
                        {item.type === 'education' && <GraduationCap className="w-5 h-5" />}
                        {item.type === 'achievement' && <Award className="w-5 h-5" />}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-px h-16 bg-gray-200 dark:bg-gray-700 mt-2" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-gray-900 dark:text-white">
                            {item.title}
                          </h4>
                          <span className="text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-700 px-2 py-1 rounded">
                            {item.period}
                          </span>
                        </div>
                        <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">
                          {item.company || item.institution}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                        {item.technologies && (
                          <div className="flex flex-wrap gap-1 mt-3">
                            {item.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs px-2 py-1 bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Values & Approach */}
          <motion.div variants={fadeInUp} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Mi Enfoque
            </h3>
            
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code className="w-8 h-8" />,
                  title: "Código Limpio",
                  description: "Escribo código mantenible, escalable y bien documentado"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Colaboración",
                  description: "Trabajo efectivamente en equipo usando metodologías ágiles"
                },
                {
                  icon: <Lightbulb className="w-8 h-8" />,
                  title: "Innovación",
                  description: "Always learning y aplicando las últimas tecnologías"
                },
                {
                  icon: <Coffee className="w-8 h-8" />,
                  title: "Pasión",
                  description: "Amo lo que hago y se refleja en cada proyecto"
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={fadeInUp}
                  custom={index}
                  className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl text-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {value.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;