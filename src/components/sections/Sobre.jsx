/**
 * Sobre.jsx
 * About / Bio section
 * Edit content in: src/data/content.js → personal.bio
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { personal } from '../../data/content';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Sobre() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="sobre" className="py-32 border-t border-[#1a1a1a]">
      <div className="section-container" ref={ref}>
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.14 } } }}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid md:grid-cols-[200px_1fr] gap-16 items-start"
        >
          {/* Section label */}
          <motion.div variants={fadeUp}>
            <p className="section-label">01 — Sobre</p>
          </motion.div>

          {/* Content */}
          <motion.div variants={fadeUp} className="max-w-xl">
            {personal.bio.map((paragraph, i) => (
              <p
                key={i}
                className={`text-[#888888] font-light leading-[1.85] text-[15px] ${i > 0 ? 'mt-5' : ''}`}
              >
                {paragraph}
              </p>
            ))}

            {/* Stats row */}
            <motion.div
              variants={fadeUp}
              className="mt-12 grid grid-cols-3 gap-8 pt-10 border-t border-[#1e1e1e]"
            >
              {[
                { value: '5+', label: 'Anos de experiência' },
                { value: '10+', label: 'Projetos entregues' },
                { value: '3+', label: 'Stacks dominadas' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-light text-[#d0d0d0] tracking-tight">{value}</p>
                  <p className="font-mono text-[10px] tracking-widest text-[#505050] uppercase mt-1">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
