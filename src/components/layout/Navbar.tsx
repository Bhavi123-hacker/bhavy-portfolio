import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, PERSONAL_INFO } from '@/lib/constants';
import { FileText, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastScrollY = useRef(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastScrollY.current && y > 200);
      lastScrollY.current = y;
      setScrollY(y);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  // Scroll progress bar width
  const progressWidth = typeof document !== 'undefined'
    ? (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    : 0;

  return (
    <>
      {/* Scroll progress */}
      <div
        className="scroll-progress"
        style={{ width: `${progressWidth}%`, transition: 'width 0.1s linear' }}
      />

      <motion.nav
        className={`navbar-glass fixed top-0 left-0 right-0 z-50 ${scrolled ? 'scrolled' : ''}`}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: scrolled ? '12px 24px' : '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            transition: 'padding 0.4s ease',
          }}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollTo('#home')}
            className="font-heading font-bold text-white cursor-pointer"
            style={{ fontSize: '22px', letterSpacing: '-0.02em', background: 'none', border: 'none' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={{ color: '#00FF88' }}>B</span>havy
            <span style={{ color: '#00FF88' }}>.</span>
          </motion.button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1" style={{ position: 'relative' }}>
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="relative font-body cursor-pointer"
                  style={{
                    padding: '8px 14px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive ? '#00FF88' : '#a1a1aa',
                    background: 'none',
                    border: 'none',
                    borderRadius: '8px',
                    transition: 'color 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) (e.currentTarget as HTMLElement).style.color = '#a1a1aa';
                  }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(0,255,136,0.08)',
                        border: '1px solid rgba(0,255,136,0.2)',
                        borderRadius: '8px',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span style={{ position: 'relative', zIndex: 1 }}>{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Resume button */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="/bhavyresume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
              style={{
                padding: '9px 18px',
                background: 'rgba(0,255,136,0.08)',
                border: '1px solid rgba(0,255,136,0.3)',
                borderRadius: '10px',
                color: '#00FF88',
                fontSize: '14px',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
              whileHover={{
                background: 'rgba(0,255,136,0.15)',
                boxShadow: '0 0 20px rgba(0,255,136,0.2)',
                scale: 1.03,
              }}
              whileTap={{ scale: 0.97 }}
            >
              <FileText size={14} />
              Resume
            </motion.a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center text-white"
            style={{
              width: 40, height: 40, background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
              cursor: 'pointer',
            }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileOpen
                ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={18} /></motion.span>
                : <motion.span key="m" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={18} /></motion.span>
              }
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{
                overflow: 'hidden',
                background: 'rgba(5,5,5,0.97)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div style={{ padding: '16px 24px 24px' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    style={{
                      display: 'block', width: '100%', textAlign: 'left',
                      padding: '12px 0', fontSize: '16px', fontWeight: 500,
                      color: activeSection === link.href.replace('#', '') ? '#00FF88' : '#a1a1aa',
                      background: 'none', border: 'none', cursor: 'pointer',
                      borderBottom: '1px solid rgba(255,255,255,0.04)',
                    }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <motion.a
                  href="/bhavyresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16,
                    padding: '10px 20px', background: 'rgba(0,255,136,0.1)',
                    border: '1px solid rgba(0,255,136,0.3)', borderRadius: 10,
                    color: '#00FF88', fontSize: 14, fontWeight: 600, textDecoration: 'none',
                  }}
                >
                  <FileText size={14} /> View Resume
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
