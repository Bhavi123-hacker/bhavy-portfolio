import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Mail, ChevronDown, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { PERSONAL_INFO, STATS, FLOATING_TECH } from '@/lib/constants';

import type { Variants } from 'framer-motion';

const terminalLines = [
  { prompt: '~', text: 'whoami', delay: 300 },
  { prompt: '', text: 'bhavy_garg — ML & Software Engineer', delay: 700, color: '#00FF88' },
  { prompt: '~', text: 'cat stack.json', delay: 1200 },
  { prompt: '', text: 'Python · React · ML · Node.js · SQL', delay: 1600, color: '#a1a1aa' },
  { prompt: '~', text: 'echo $STATS', delay: 2100 },
  { prompt: '', text: 'CGPA: 9.15 | LeetCode: 1490 | Projects: 7+', delay: 2500, color: '#00FF88' },
  { prompt: '~', text: './ship --production', delay: 3000 },
  { prompt: '', text: 'Build ready ✓ Ships quality code.', delay: 3500, color: '#00FF88' },
];

function Terminal() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines((prev) => [...prev, i]), line.delay);
    });
  }, []);

  return (
    <div className="terminal" style={{ width: '100%', maxWidth: '480px' }}>
      <div className="terminal-header">
        <div className="terminal-dot" style={{ background: '#FF5F57' }} />
        <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
        <div className="terminal-dot" style={{ background: '#28C840' }} />
        <span style={{ marginLeft: '8px', color: '#52525b', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
          bhavy@portfolio ~ zsh
        </span>
      </div>
      <div className="terminal-body">
        {terminalLines.map((line, i) => (
          visibleLines.includes(i) && (
            <motion.div
              key={i}
              className="terminal-line"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {line.prompt && (
                <span className="terminal-prompt">
                  <span style={{ color: '#00FF88' }}>❯</span>
                </span>
              )}
              <span style={{ color: line.color || '#e4e4e7' }}>
                {line.prompt ? (
                  <span>
                    <span style={{ color: '#71717a' }}>$ </span>
                    {line.text}
                  </span>
                ) : line.text}
              </span>
            </motion.div>
          )
        ))}
        {visibleLines.length === terminalLines.length && (
          <div className="terminal-line">
            <span className="terminal-prompt"><span style={{ color: '#00FF88' }}>❯</span></span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}

/* Premium identity card — no photo, pure typography + badges */
function IdentityCard() {
  return (
    <motion.div
      whileHover={{ borderColor: 'rgba(0,255,136,0.35)', boxShadow: '0 0 28px rgba(0,255,136,0.10)' }}
      style={{
        padding: '20px 24px',
        background: 'rgba(13,13,13,0.92)',
        border: '1px solid rgba(0,255,136,0.18)',
        borderRadius: '16px',
        backdropFilter: 'blur(16px)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.35s ease',
      }}
    >
      {/* Top-left green accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, #00FF88, rgba(0,255,136,0.15), transparent)',
      }} />

      {/* Monogram + name row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
        {/* Monogram avatar */}
        <div style={{
          width: 46, height: 46, borderRadius: '12px', flexShrink: 0,
          background: 'rgba(0,255,136,0.1)', border: '1px solid rgba(0,255,136,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Outfit, sans-serif', fontSize: '18px', fontWeight: 800, color: '#00FF88',
          letterSpacing: '-0.04em',
        }}>
          BG
        </div>
        <div>
          <p style={{ color: '#ffffff', fontSize: '15px', fontWeight: 700, marginBottom: '2px', letterSpacing: '-0.01em' }}>Bhavy Garg</p>
          <p style={{ color: '#71717a', fontSize: '12px', fontFamily: 'JetBrains Mono, monospace' }}>
            VIT Chennai · B.Tech CSE (AI & ML)
          </p>
        </div>
        {/* Status dot */}
        <div style={{
          marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '6px',
          padding: '5px 10px', background: 'rgba(0,255,136,0.07)',
          border: '1px solid rgba(0,255,136,0.2)', borderRadius: '20px',
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00FF88', boxShadow: '0 0 6px rgba(0,255,136,0.8)', display: 'inline-block' }} />
          <span style={{ color: '#00FF88', fontSize: '11px', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace' }}>Open to work</span>
        </div>
      </div>

      {/* CGPA + Year badge row */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {[
          { label: '9.15 CGPA', dim: false },
          { label: '2026 · BTech', dim: true },
          { label: 'AI & ML Specialisation', dim: true },
        ].map((b) => (
          <span key={b.label} style={{
            padding: '4px 12px',
            background: b.dim ? 'rgba(255,255,255,0.04)' : 'rgba(0,255,136,0.08)',
            border: `1px solid ${b.dim ? 'rgba(255,255,255,0.07)' : 'rgba(0,255,136,0.2)'}`,
            borderRadius: '6px',
            color: b.dim ? '#52525b' : '#00FF88',
            fontSize: '12px', fontWeight: 600, fontFamily: 'JetBrains Mono, monospace',
          }}>
            {b.label}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const { ref: inViewRef, inView } = useInView({ threshold: 0.3, triggerOnce: true });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToProjects = () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px', paddingBottom: '40px', overflow: 'hidden' }}
    >
      <motion.div style={{ y, opacity, width: '100%' }}>
        <div className="section-container">
          <div
            ref={inViewRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '60px',
              alignItems: 'center',
            }}
          >
            {/* Main content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ maxWidth: '840px' }}
            >
              {/* Name */}
              <motion.h1
                variants={itemVariants}
                className="font-heading"
                style={{
                  fontSize: 'clamp(52px, 8vw, 86px)',
                  fontWeight: 700,
                  lineHeight: 1.02,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  marginBottom: '8px',
                }}
              >
                Hi, I'm{' '}
                <span className="text-gradient-green">Bhavy Garg</span>
              </motion.h1>

              {/* Typing role */}
              <motion.div variants={itemVariants} style={{ marginBottom: '20px', height: '44px' }}>
                <span className="font-heading" style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', color: '#71717a', fontWeight: 500 }}>
                  <TypeAnimation
                    sequence={[
                      'Software Engineer', 2000,
                      'Machine Learning Engineer', 2000,
                      'AI Engineer', 2000,
                      'Full Stack Developer', 2000,
                      'Data Scientist', 2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    deletionSpeed={65}
                    repeat={Infinity}
                    style={{ color: '#a1a1aa' }}
                    cursor={true}
                  />
                </span>
              </motion.div>

              {/* Value Proposition Bio */}
              <motion.p
                variants={itemVariants}
                style={{ color: '#a1a1aa', fontSize: 'clamp(16px, 1.9vw, 19px)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '36px', fontWeight: 400 }}
              >
                Building AI-powered products with Machine Learning, Full-Stack Development, and Data Engineering to solve real-world problems.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '48px' }}>
                <motion.a
                  href="/bhavyresume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px',
                    background: '#00FF88',
                    border: '1px solid #00FF88',
                    borderRadius: '10px',
                    color: '#050505',
                    fontSize: '15px',
                    fontWeight: 700,
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ boxShadow: '0 0 30px rgba(0,255,136,0.4)', scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <FileText size={16} /> View Resume
                </motion.a>

                <motion.button
                  onClick={scrollToProjects}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px',
                    background: 'rgba(0,255,136,0.06)',
                    border: '1px solid rgba(0,255,136,0.25)',
                    borderRadius: '10px',
                    color: '#00FF88',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ background: 'rgba(0,255,136,0.12)', boxShadow: '0 0 20px rgba(0,255,136,0.15)', scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  View Projects <ArrowRight size={16} />
                </motion.button>

                <motion.button
                  onClick={scrollToContact}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '8px',
                    padding: '14px 28px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '10px',
                    color: '#a1a1aa',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{ color: '#ffffff', borderColor: 'rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.07)', scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Mail size={16} /> Contact Me
                </motion.button>
              </motion.div>

              {/* Stat counters */}
              <motion.div variants={itemVariants}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0px' }}>
                  {STATS.map((stat, i) => (
                    <React.Fragment key={stat.label}>
                      <div style={{ textAlign: 'left', padding: '0 28px 0 0' }}>
                        <div className="font-heading" style={{ fontSize: 'clamp(28px, 4vw, 38px)', fontWeight: 700, color: '#00FF88', lineHeight: 1.1 }}>
                          {inView && (
                            <CountUp
                              end={stat.value}
                              duration={2.2}
                              decimals={stat.decimals || 0}
                              suffix={stat.suffix}
                              delay={0.3 + i * 0.15}
                            />
                          )}
                        </div>
                        <div style={{ color: '#52525b', fontSize: '13px', marginTop: '4px', fontWeight: 500 }}>{stat.label}</div>
                      </div>
                      {i < STATS.length - 1 && (
                        <div style={{ width: '1px', background: 'rgba(255,255,255,0.08)', margin: '0 28px 0 0', alignSelf: 'stretch' }} />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </motion.div>

              {/* Social links */}
              <motion.div variants={itemVariants} style={{ display: 'flex', gap: '12px', marginTop: '32px' }}>
                {[
                  { icon: GithubIcon, href: PERSONAL_INFO.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: PERSONAL_INFO.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${PERSONAL_INFO.email}`, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    style={{
                      width: 42, height: 42,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '10px',
                      color: '#71717a',
                    }}
                    whileHover={{ color: '#00FF88', borderColor: 'rgba(0,255,136,0.3)', background: 'rgba(0,255,136,0.06)', y: -3, boxShadow: '0 8px 20px rgba(0,255,136,0.15)' }}
                    whileTap={{ scale: 0.93 }}
                  >
                    <Icon size={18} />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Terminal + Premium Identity Card (no photo) */}
            <motion.div
              initial={{ opacity: 0, x: 40, filter: 'blur(12px)' }}
              animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                maxWidth: '480px',
                width: '38%',
              }}
              className="hidden xl:flex"
            >
              <Terminal />
              <IdentityCard />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Floating tech badges */}
      {FLOATING_TECH.map((tech, i) => {
        const positions = [
          { top: '18%', left: '72%' }, { top: '30%', left: '85%' },
          { top: '55%', left: '90%' }, { top: '70%', left: '75%' },
          { top: '80%', left: '62%' }, { top: '20%', left: '60%' },
          { top: '42%', left: '68%' }, { top: '65%', left: '55%' },
        ];
        const pos = positions[i] || { top: '50%', left: '80%' };

        return (
          <motion.div
            key={tech.label}
            className="floating-icon hidden lg:flex"
            style={{
              position: 'absolute',
              ...pos,
              '--duration': `${5 + i * 0.7}s`,
              '--delay': `${i * 0.4}s`,
            } as React.CSSProperties}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
            title={tech.label}
          >
            <span style={{ fontSize: '20px' }}>{tech.emoji}</span>
          </motion.div>
        );
      })}

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: '#52525b', cursor: 'pointer',
        }}
        onClick={scrollToProjects}
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>Scroll to explore</span>
        <ChevronDown size={14} style={{ color: '#00FF88' }} />
      </motion.div>
    </section>
  );
}
