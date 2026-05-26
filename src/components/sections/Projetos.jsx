/**
 * Projetos.jsx
 * Projects section — premium cards with mock image placeholders
 * Edit projects in: src/data/content.js → projects
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '../../data/content';

// Minimal external link icon
const ExternalIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

// Abstract code-pattern mock image for each project
function ProjectMock({ index }) {
  const patterns = [
    // Pattern 1 — grid lines
    <svg key={0} width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0f0f0f"/>
      {[...Array(6)].map((_, i) => (
        <line key={i} x1={i * 70} y1="0" x2={i * 70} y2="220" stroke="#1a1a1a" strokeWidth="1"/>
      ))}
      {[...Array(5)].map((_, i) => (
        <line key={i} x1="0" y1={i * 55} x2="400" y2={i * 55} stroke="#1a1a1a" strokeWidth="1"/>
      ))}
      <rect x="30" y="30" width="120" height="8" rx="2" fill="#222"/>
      <rect x="30" y="46" width="80" height="6" rx="2" fill="#1a1a1a"/>
      <rect x="30" y="70" width="200" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="30" y="82" width="160" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="30" y="94" width="180" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="30" y="120" width="100" height="30" rx="4" fill="#1a1a1a" stroke="#252525" strokeWidth="1"/>
      <rect x="145" y="120" width="100" height="30" rx="4" fill="#1a1a1a" stroke="#252525" strokeWidth="1"/>
      <rect x="260" y="120" width="100" height="30" rx="4" fill="#1a1a1a" stroke="#252525" strokeWidth="1"/>
    </svg>,
    // Pattern 2 — terminal-ish
    <svg key={1} width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0d0d0d"/>
      <rect x="0" y="0" width="400" height="32" fill="#111"/>
      <circle cx="20" cy="16" r="5" fill="#1e1e1e"/>
      <circle cx="38" cy="16" r="5" fill="#1e1e1e"/>
      <circle cx="56" cy="16" r="5" fill="#1e1e1e"/>
      <rect x="20" y="52" width="8" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="34" y="52" width="120" height="8" rx="2" fill="#1e1e1e"/>
      <rect x="34" y="68" width="180" height="6" rx="2" fill="#181818"/>
      <rect x="20" y="90" width="8" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="34" y="90" width="90" height="8" rx="2" fill="#1e1e1e"/>
      <rect x="34" y="106" width="220" height="6" rx="2" fill="#181818"/>
      <rect x="34" y="116" width="160" height="6" rx="2" fill="#181818"/>
      <rect x="20" y="138" width="8" height="8" rx="1" fill="#2a2a2a"/>
      <rect x="34" y="138" width="140" height="8" rx="2" fill="#1e1e1e"/>
      <rect x="34" y="154" width="12" height="8" rx="1" fill="#252525"/>
    </svg>,
    // Pattern 3 — dashboard widgets
    <svg key={2} width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0e0e0e"/>
      <rect x="20" y="20" width="170" height="80" rx="4" fill="#111" stroke="#1e1e1e" strokeWidth="1"/>
      <rect x="210" y="20" width="170" height="80" rx="4" fill="#111" stroke="#1e1e1e" strokeWidth="1"/>
      <rect x="20" y="116" width="360" height="80" rx="4" fill="#111" stroke="#1e1e1e" strokeWidth="1"/>
      {[...Array(8)].map((_, i) => (
        <rect key={i} x={30 + i * 43} y={116 + 30 + Math.random() * 20} width="35" height={20 + i * 3} rx="2" fill="#1a1a1a"/>
      ))}
      <rect x="30" y="36" width="60" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="30" y="50" width="40" height="20" rx="2" fill="#222"/>
      <rect x="220" y="36" width="60" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="220" y="50" width="40" height="20" rx="2" fill="#222"/>
    </svg>,
    // Pattern 4 — pipeline/flow
    <svg key={3} width="100%" height="100%" viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="220" fill="#0c0c0c"/>
      {[0,1,2,3].map((i) => (
        <g key={i}>
          <rect x={20 + i * 95} y="80" width="70" height="60" rx="4" fill="#111" stroke="#1e1e1e" strokeWidth="1"/>
          <rect x={30 + i * 95} y="96" width="50" height="5" rx="1" fill="#1e1e1e"/>
          <rect x={30 + i * 95} y="108" width="35" height="5" rx="1" fill="#181818"/>
          {i < 3 && <line x1={90 + i * 95} y1="110" x2={115 + i * 95} y2="110" stroke="#222" strokeWidth="1.5"/>}
          {i < 3 && <polygon points={`${110 + i * 95},106 ${118 + i * 95},110 ${110 + i * 95},114`} fill="#222"/>}
        </g>
      ))}
      <rect x="20" y="30" width="100" height="6" rx="2" fill="#1e1e1e"/>
      <rect x="20" y="42" width="70" height="5" rx="2" fill="#181818"/>
    </svg>,
  ];
  return (
    <div className="w-full h-44 overflow-hidden rounded-t">
      {patterns[index % patterns.length]}
    </div>
  );
}

export default function Projetos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projetos" className="py-32 border-t border-[#1a1a1a]">
      <div className="section-container" ref={ref}>
        {/* Header row */}
        <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start mb-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">04 — Projetos</p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[#505050] font-light text-sm max-w-sm"
          >
            Seleção de projetos em infraestrutura, automação e desenvolvimento de produto.
          </motion.p>
        </div>

        {/* Featured — large cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.1 + i * 0.1 }}
              className="group border border-[#1e1e1e] rounded bg-[#0d0d0d] hover:border-[#2a2a2a] transition-all duration-300 overflow-hidden"
            >
              {/* Mock image */}
              <div className="relative overflow-hidden border-b border-[#1a1a1a] group-hover:border-[#252525] transition-colors">
                <ProjectMock index={i} />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/20 transition-colors duration-300" />
              </div>

              {/* Card content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-[#c0c0c0] font-light text-base tracking-wide group-hover:text-[#e0e0e0] transition-colors duration-200">
                    {project.name}
                  </h3>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3a3a3a] hover:text-[#888] transition-colors duration-200 mt-0.5 flex-shrink-0"
                  >
                    <ExternalIcon />
                  </a>
                </div>
                <p className="text-[#585858] text-[13px] font-light leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[9px] tracking-[0.14em] text-[#404040] uppercase border border-[#1c1c1c] px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rest — smaller horizontal cards */}
        <div className="grid md:grid-cols-2 gap-4">
          {rest.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="group border border-[#1e1e1e] rounded bg-[#0d0d0d] hover:border-[#2a2a2a] transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-[#b0b0b0] font-light text-sm tracking-wide group-hover:text-[#d0d0d0] transition-colors duration-200">
                  {project.name}
                </h3>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2e2e2e] hover:text-[#707070] transition-colors duration-200 flex-shrink-0"
                >
                  <ExternalIcon />
                </a>
              </div>
              <p className="text-[#505050] text-[13px] font-light leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[9px] tracking-[0.14em] text-[#383838] uppercase border border-[#1a1a1a] px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
