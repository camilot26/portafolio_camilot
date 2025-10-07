import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
  Code,
  Coffee,
  ArrowUp,
  ExternalLink
} from 'lucide-react';

// Utils
import { scrollToSection } from '@utils/navigation';
import { fadeInUp } from '@utils/animations';

// Data
import { socialLinks, contactInfo } from '@data/contact';
import { navigationItems } from '@data/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Sobre Mí', href: '#about' },
    { label: 'Habilidades', href: '#skills' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' }
  ];

  const services = [
    { label: 'Desarrollo Web', description: 'Sitios web modernos y responsivos' },
    { label: 'Desarrollo Mobile', description: 'Apps nativas y multiplataforma' },
    { label: 'API Development', description: 'APIs REST y GraphQL' },
    { label: 'Consultoría Tech', description: 'Arquitectura y mejores prácticas' }
  ];

  const technologies = [
    'React', 'Node.js', 'Java', 'Spring Boot',
    'PostgreSQL', 'MongoDB', 'Docker', 'AWS'
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600" />
        <div className="absolute inset-0 bg-grid-pattern" />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

            {/* Company Info */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="lg:col-span-1 space-y-6"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  &lt;/Tejada&gt;
                </h3>
                <p className="text-sm leading-relaxed">
                  Desarrollador Full Stack apasionado por crear soluciones
                  digitales innovadoras y escalables. Especializándome en
                  tecnologías modernas y mejores prácticas.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Medellín, Antioquia, Colombia</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="mailto:camilotejada1@gmail.com" 
                    className="hover:text-white transition-colors"
                  >
                    camilotejada1@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <a
                    href="tel:+573001234567"
                    className="hover:text-white transition-colors"
                  >
                    +57 322 508 0206
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Github, href: 'https://github.com/camilot26', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com/in/camilo-tejada-09386b1a4/', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://instagram.com/tejada.1/', label: 'Instagram' }
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="sr-only">{label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Enlaces Rápidos</h4>
              <nav className="space-y-3">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href.slice(1))}
                    className="block text-sm hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="https://rohbbpgyovkazjunjeji.supabase.co/storage/v1/object/public/images/resume.pdf"
                  download="CV-Camilo-Tejada.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm hover:text-white transition-colors hover:translate-x-1 transform duration-200"
                >
                  Descargar CV
                  <ExternalLink className="w-3 h-3" />
                </a>

              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Servicios</h4>
              <div className="space-y-4">
                {services.map((service) => (
                  <div key={service.label} className="space-y-1">
                    <h5 className="text-sm font-medium text-white">
                      {service.label}
                    </h5>
                    <p className="text-xs text-gray-400">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white">Tecnologías</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-800 text-xs rounded-md hover:bg-gray-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <div className="text-xl font-bold text-blue-400">10+</div>
                  <div className="text-xs text-gray-400">Proyectos</div>
                </div>
                <div className="text-center p-3 bg-gray-800 rounded-lg">
                  <div className="text-xl font-bold text-green-400">2+</div>
                  <div className="text-xs text-gray-400">Años Exp.</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-gray-800"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">
                ¿Tienes un proyecto en mente?
              </h4>
              <p className="text-sm text-gray-400 mb-4">
                ¡Hablemos sobre cómo puedo ayudarte a hacerlo realidad!
              </p>
              <motion.button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-4 h-4" />
                Iniciar Conversación
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">

              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm">
                <span>© {currentYear} Camilo Tejada. Hecho con</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>y</span>
                <Coffee className="w-4 h-4 text-yellow-600" />
                <span>en Colombia</span>
              </div>

              {/* Tech Stack */}
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Code className="w-4 h-4" />
                <span>Construido con React + Vite + Tailwind CSS</span>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="flex items-center gap-2 text-sm hover:text-white transition-colors group"
                whileHover={{ y: -2 }}
              >
                <span>Volver arriba</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;