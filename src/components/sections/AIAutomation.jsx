import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import SectionTitle from '@components/ui/SectionTitle';
import Container from '@components/ui/Container';
import { aiTools, workflowSteps } from '@data/aiAutomation';
import { fadeInUp, staggerContainer } from '@utils/animations';

const AIAutomation = () => {
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section
      id="ai"
      className="py-20 relative overflow-hidden bg-gray-950"
    >
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid-pattern pointer-events-none" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.1 }}
          className="space-y-16 relative z-10"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium text-gray-300">
                Automatización con IA
              </span>
            </div>
            <SectionTitle
              title="IA & Automatización"
              subtitle="Soluciones inteligentes con Python, flujos automatizados con n8n y agentes de voz con ElevenLabs"
            />
          </motion.div>

          {/* Tool Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              const isActive = activeCard === tool.id;

              return (
                <motion.div
                  key={tool.id}
                  variants={fadeInUp}
                  custom={index}
                  onMouseEnter={() => setActiveCard(tool.id)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative rounded-2xl border bg-gray-900/80 backdrop-blur-sm p-6 cursor-default
                    transition-all duration-300 ${tool.border}
                    ${isActive ? 'scale-[1.02] shadow-2xl' : 'hover:scale-[1.01]'}
                  `}
                  style={{
                    boxShadow: isActive
                      ? `0 0 40px ${tool.glow}, 0 20px 60px rgba(0,0,0,0.4)`
                      : undefined,
                  }}
                >
                  {/* Card top accent line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-px rounded-full opacity-60"
                    style={{ background: `linear-gradient(90deg, transparent, ${tool.color}, transparent)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${tool.color}18`, border: `1px solid ${tool.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: tool.color }} />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-1">{tool.name}</h3>
                  <p className="text-xs font-medium mb-3" style={{ color: tool.color }}>
                    {tool.tagline}
                  </p>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {tool.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {tool.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-md text-xs font-medium text-gray-300 bg-white/5 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Use cases */}
                  <div className="space-y-2">
                    {tool.useCases.map((useCase) => (
                      <div key={useCase} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: tool.color }}
                        />
                        <span className="text-xs text-gray-400">{useCase}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Workflow diagram */}
          <motion.div variants={fadeInUp}>
            <div className="bg-gray-900/60 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <p className="text-center text-sm font-medium text-gray-400 mb-8 uppercase tracking-wider">
                Arquitectura de un agente de voz
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                {workflowSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <React.Fragment key={step.id}>
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.12 }}
                        className={`flex flex-col items-center gap-2 px-5 py-4 rounded-xl border min-w-[110px] ${step.bg}`}
                      >
                        <Icon className={`w-6 h-6 ${step.color}`} />
                        <span className={`text-sm font-semibold ${step.color}`}>
                          {step.label}
                        </span>
                        <span className="text-xs text-gray-500 text-center">
                          {step.description}
                        </span>
                      </motion.div>

                      {index < workflowSteps.length - 1 && (
                        <ArrowRight className="w-4 h-4 text-gray-600 flex-shrink-0 hidden sm:block" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default AIAutomation;
