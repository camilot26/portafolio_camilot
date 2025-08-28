import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ExternalLink, 
  Github, 
  Filter,
  Star,
  Clock,
  Code,
  Users,
  Eye,
  ArrowRight
} from 'lucide-react';

// Components
import SectionTitle from '@components/ui/SectionTitle';
import Container from '@components/ui/Container';
import Button from '@components/ui/Button';

// Utils
import { fadeInUp, staggerContainer } from '@utils/animations';

// Data
import { projectsData, projectCategories } from '@data/projects';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => 
        project.category === activeFilter || project.tags.includes(activeFilter)
      );

  const ProjectCard = ({ project, index }) => {
    const isHovered = hoveredProject === project.id;

    return (
      <motion.div
        variants={fadeInUp}
        custom={index}
        className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
        onHoverStart={() => setHoveredProject(project.id)}
        onHoverEnd={() => setHoveredProject(null)}
        whileHover={{ y: -8 }}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10">
            <div className="flex items-center gap-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 px-2 py-1 rounded-full text-xs font-medium">
              <Star className="w-3 h-3" />
              Destacado
            </div>
          </div>
        )}

        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white/80 text-6xl font-bold">
              {project.title.charAt(0)}
            </div>
          </div>
          
          {/* Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(project.demo, '_blank')}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <Eye className="w-4 h-4" />
              Demo
            </Button>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => window.open(project.github, '_blank')}
              className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <Github className="w-4 h-4" />
              Código
            </Button>
          </motion.div>

          {/* Status Badge */}
          <div className="absolute top-4 right-4">
            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
              project.status === 'completed' 
                ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                : project.status === 'in-progress'
                ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                : 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
            }`}>
              {project.status === 'completed' && 'Completado'}
              {project.status === 'in-progress' && 'En Desarrollo'}
              {project.status === 'planned' && 'Planeado'}
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
              {project.description}
            </p>
          </div>

          {/* Project Stats */}
          <div className="flex items-center gap-4 mb-4 text-xs text-gray-500 dark:text-gray-400">
            {project.duration && (
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {project.duration}
              </div>
            )}
            {project.team && (
              <div className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {project.team}
              </div>
            )}
            {project.lines && (
              <div className="flex items-center gap-1">
                <Code className="w-3 h-3" />
                {project.lines} líneas
              </div>
            )}
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md text-xs font-medium"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-md text-xs font-medium">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Project Links */}
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.github, '_blank')}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Github className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => window.open(project.demo, '_blank')}
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 group"
            >
              Ver más
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
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
              title="Proyectos Destacados"
              subtitle="Una selección de mis mejores trabajos y contribuciones"
            />
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={fadeInUp} className="flex justify-center">
            <div className="inline-flex bg-white dark:bg-gray-800 rounded-2xl p-2 shadow-lg">
              {projectCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={`px-6 py-2 rounded-xl font-medium transition-all duration-200 ${
                    activeFilter === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <category.icon className="w-4 h-4" />
                    {category.label}
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={staggerContainer}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="max-w-2xl mx-auto">
                <Github className="w-12 h-12 text-gray-900 dark:text-white mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ¿Quieres ver más?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explora mi repositorio en GitHub donde encontrarás más proyectos, 
                  contribuciones open source y experimentos con nuevas tecnologías.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => window.open('https://github.com/camilotejada', '_blank')}
                  className="group"
                >
                  <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Ver GitHub
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;