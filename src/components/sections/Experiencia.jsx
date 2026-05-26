/**
 * Experiencia.jsx
 * Experience timeline section — minimal, elegant vertical timeline
 * Edit content in: src/data/content.js → experiences
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../../data/content';

export default function Experiencia() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="experiencia" className="py-32 border-t border-[#1a1a1a]">
      <div className="section-container" ref={ref}>
        <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">03 — Experiência</p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-[#2a2a2a] via-[#2a2a2a] to-transparent origin-top"
              style={{ transform: 'translateX(-1px)' }}
            />

            <div className="space-y-12 pl-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
                  className="relative group"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full border border-[#3a3a3a] bg-[#0a0a0a] group-hover:border-[#666] transition-colors duration-300" />

                  {/* Period */}
                  <p className="font-mono text-[10px] tracking-[0.18em] text-[#3a3a3a] uppercase mb-2">
                    {exp.period}
                  </p>

                  {/* Role + Company */}
                  <div className="mb-3">
                    <h3 className="text-[#c0c0c0] font-light text-base tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-[#505050] text-sm font-light mt-0.5">{exp.company}</p>
                  </div>

                  {/* Description */}
                  <p className="text-[#606060] text-[14px] font-light leading-relaxed max-w-lg">
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-[0.15em] text-[#3a3a3a] uppercase border border-[#1e1e1e] px-2 py-0.5 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
