/**
 * Hero.jsx
 * Full-screen hero section — name, role, tagline
 * Edit content in: src/data/content.js → personal
 */
import { motion } from 'framer-motion';
import { personal } from '../../data/content';

// Stagger animation variants
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #1a1a1a 1px, transparent 1px),
            linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 50%, black 20%, transparent 80%)',
          opacity: 0.35,
        }}
      />

      <div className="section-container relative z-10 pt-24 pb-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          {/* Greeting */}
          <motion.p
            variants={item}
            className="font-mono text-xs tracking-[0.22em] text-[#505050] uppercase mb-6"
          >
            {personal.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-light leading-[1.05] tracking-[-0.02em] text-[#f0f0f0] mb-4"
          >
            {personal.name}
          </motion.h1>

          {/* Role */}
          <motion.div variants={item} className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-[#3a3a3a]" />
            <span className="text-[#707070] text-sm font-light tracking-[0.08em]">
              {personal.role}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={item}
            className="text-[#585858] text-base font-light leading-relaxed max-w-md"
          >
            {personal.tagline}
          </motion.p>

          {/* CTA */}
          <motion.div variants={item} className="mt-12 flex items-center gap-6">
            <button
              onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
              className="group flex items-center gap-3 text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors duration-200"
            >
              <span className="w-8 h-px bg-[#3a3a3a] group-hover:w-12 group-hover:bg-[#707070] transition-all duration-300" />
              Ver projetos
            </button>

            <button
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-[#404040] hover:text-[#808080] transition-colors duration-200"
            >
              Entrar em contato
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="absolute bottom-12 right-0 flex flex-col items-center gap-2"
        >
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#404040] uppercase" style={{ writingMode: 'vertical-rl' }}>
            scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-px h-8 bg-gradient-to-b from-[#3a3a3a] to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
