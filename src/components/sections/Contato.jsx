/**
 * Contato.jsx
 * Contact section — minimal, just GitHub, LinkedIn, Email
 * Edit links in: src/data/content.js → social
 */
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { social, personal } from '../../data/content';

const GithubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const contactLinks = [
  { href: social.github, icon: GithubIcon, label: 'GitHub', desc: 'Repositórios e código open source' },
  { href: social.linkedin, icon: LinkedinIcon, label: 'LinkedIn', desc: 'Histórico profissional e contato' },
  { href: social.email, icon: MailIcon, label: 'Email', desc: 'Mensagem direta por e-mail' },
];

export default function Contato() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="contato" className="py-32 border-t border-[#1a1a1a]">
      <div className="section-container" ref={ref}>
        <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">05 — Contato</p>
          </motion.div>

          <div>
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-light text-[#c0c0c0] tracking-tight mb-3">
                Vamos trabalhar juntos?
              </h2>
              <p className="text-[#505050] font-light text-sm max-w-sm leading-relaxed">
                Aberto a novas oportunidades, projetos e conversas sobre engenharia de software e infraestrutura.
              </p>
            </motion.div>

            {/* Links */}
            <div className="space-y-3">
              {contactLinks.map(({ href, icon: Icon, label, desc }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="group flex items-center gap-5 p-5 border border-[#1a1a1a] rounded bg-[#0d0d0d] hover:border-[#2a2a2a] hover:bg-[#101010] transition-all duration-250"
                >
                  <span className="text-[#404040] group-hover:text-[#909090] transition-colors duration-200 flex-shrink-0">
                    <Icon />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#909090] text-sm font-light group-hover:text-[#d0d0d0] transition-colors duration-200">
                      {label}
                    </p>
                    <p className="font-mono text-[10px] tracking-wider text-[#3a3a3a] uppercase mt-0.5">
                      {desc}
                    </p>
                  </div>
                  <svg
                    width="14" height="14"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="text-[#2e2e2e] group-hover:text-[#606060] transition-colors duration-200 flex-shrink-0 group-hover:translate-x-0.5 transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"/>
                    <polyline points="12 5 19 12 12 19"/>
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-24 pt-8 border-t border-[#161616] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[10px] tracking-[0.18em] text-[#303030] uppercase">
            {personal.name} · {personal.role}
          </p>
          <p className="font-mono text-[10px] tracking-[0.14em] text-[#2a2a2a] uppercase">
            {new Date().getFullYear()} — Todos os direitos reservados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
