/**
 * Skills.jsx
 * Technologies / stacks section — fluid, elegant badge layout
 * Edit technologies in: src/data/content.js → skills
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '../../data/content';

// Tech icon mapping — minimal SVG, monochromatic
const TechBadge = ({ name, icon }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ duration: 0.18 }}
    className="group flex flex-col items-center justify-center gap-3 min-w-[82px] cursor-default"
  >
    {/* Icon */}
    <div className="flex items-center justify-center w-10 h-10 opacity-75 group-hover:opacity-100 transition-all duration-200">
      <img
        src={icon}
        alt={name}
        className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
      />
    </div>

    {/* Name */}
    <span className="text-[12px] text-[#7a7a7a] group-hover:text-[#d0d0d0] tracking-wide font-light transition-colors duration-200 text-center">
      {name}
    </span>
  </motion.div>
);

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="skills" className="py-32 border-t border-[#1a1a1a]">
      <div className="section-container" ref={ref}>
        <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">02 — Skills</p>
          </motion.div>

          {/* Skill groups */}
          <div className="space-y-10">
            {Object.values(skills).map((group, gi) => (
              <motion.div
                key={group.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: gi * 0.14 }}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-[#3a3a3a] uppercase mb-4">
                  {group.label}
                </p>
                <div className="flex flex-wrap gap-x-10 gap-y-8">
                  {group.items.map((tech) => (
                    <TechBadge
                      key={tech.name}
                      name={tech.name}
                      icon={tech.icon}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
