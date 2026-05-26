/**
 * SocialSidebar.jsx
 * Fixed social icons on bottom-left — GitHub, LinkedIn, Email
 * Edit links in: src/data/content.js → social
 */
import { motion } from 'framer-motion';
import { social } from '../../data/content';

// Minimal SVG icons — monochromatic
const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const MailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const links = [
  { href: social.github, icon: GithubIcon, label: 'GitHub' },
  { href: social.linkedin, icon: LinkedinIcon, label: 'LinkedIn' },
  { href: social.email, icon: MailIcon, label: 'Email' },
];

export default function SocialSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-8 left-6 z-40 hidden lg:flex flex-col items-center gap-1"
    >
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-2.5 text-[#505050] hover:text-[#d0d0d0] transition-all duration-200 hover:-translate-y-0.5"
        >
          <Icon />
          {/* Tooltip */}
          <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 font-mono text-[10px] tracking-widest text-[#606060] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 uppercase">
            {label}
          </span>
        </a>
      ))}

      {/* Vertical line below icons */}
      <div className="mt-3 w-px h-16 bg-gradient-to-b from-[#2a2a2a] to-transparent" />
    </motion.div>
  );
}
