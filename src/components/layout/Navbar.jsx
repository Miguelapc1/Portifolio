/**
 * Navbar.jsx
 * Top navigation bar — fixed, minimal, with scroll-spy active state
 * Edit nav links in: src/data/content.js → navLinks
 */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, personal } from '../../data/content';
import { useScrollSpy } from '../../hooks/useScrollSpy';

const sectionIds = ['sobre', 'skills', 'experiencia', 'projetos', 'contato'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1e1e1e]' : 'bg-transparent'
      }`}
    >
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo / Name */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-xs tracking-[0.18em] text-[#606060] hover:text-[#f0f0f0] transition-colors duration-200 uppercase"
        >
          {personal.name.split(' ')[0]}.dev
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.replace('#', '');
            const isActive = activeSection === id;
            return (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="Menu"
        >
          <span className={`block w-5 h-px bg-[#a0a0a0] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-px bg-[#a0a0a0] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-px bg-[#a0a0a0] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-md border-b border-[#1e1e1e]"
          >
            <nav className="section-container flex flex-col gap-4 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm text-[#a0a0a0] hover:text-[#f0f0f0] transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
