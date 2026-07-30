import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { SKILLS } from '@/lib/constants';

const categories = ['All', 'Programming Languages', 'Machine Learning & AI', 'Frontend Development', 'Backend Development', 'Databases', 'Tools & Platforms', 'Core CS', 'Software Engineering'];

function SkillCard({ skill, delay }: { skill: typeof SKILLS[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({ x: ((e.clientX - rect.left) / rect.width) * 100, y: ((e.clientY - rect.top) / rect.height) * 100 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '28px',
        background: 'rgba(13,13,13,0.85)',
        border: `1px solid ${hovered ? 'rgba(0,255,136,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 20px 60px rgba(0,0,0,0.4), 0 0 40px rgba(0,255,136,0.06)' : '0 4px 24px rgba(0,0,0,0.3)',
        cursor: 'default',
      }}
    >
      {/* Mouse spotlight */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,255,136,0.07), transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none',
      }} />

      {/* Animated top border */}
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px', borderRadius: '16px 16px 0 0',
          background: `linear-gradient(90deg, transparent, rgba(0,255,136,0.7) ${spotlight.x}%, transparent)`,
          pointerEvents: 'none',
        }} />
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <motion.div
              animate={hovered ? { rotate: [0, -8, 8, 0] } : { rotate: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                width: 44, height: 44, borderRadius: '12px',
                background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px',
              }}
            >
              {skill.icon}
            </motion.div>
            <h3 className="font-heading" style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>{skill.category}</h3>
          </div>
          {/* Circular progress indicator */}
          <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
            <svg width="44" height="44" viewBox="0 0 44 44" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="22" cy="22" r="18" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
              <motion.circle
                cx="22" cy="22" r="18"
                fill="none"
                stroke="#00FF88"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 18}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 18 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 18 * (1 - skill.proficiency / 100) }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: delay + 0.2, ease: 'easeOut' }}
                style={{ filter: 'drop-shadow(0 0 4px rgba(0,255,136,0.6))' }}
              />
            </svg>
            <span style={{
              position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#00FF88', fontSize: '11px', fontWeight: 700, fontFamily: 'JetBrains Mono, monospace',
            }}>
              {skill.proficiency}%
            </span>
          </div>
        </div>

        {/* Technologies */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {skill.technologies.slice(0, 7).map((tech, j) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: delay + 0.1 + j * 0.04 }}
              whileHover={{ background: 'rgba(0,255,136,0.12)', borderColor: 'rgba(0,255,136,0.4)', y: -2 }}
              style={{
                padding: '4px 10px',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '6px',
                color: '#a1a1aa',
                fontSize: '12px',
                fontFamily: 'JetBrains Mono, monospace',
                cursor: 'default',
                transition: 'all 0.2s ease',
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Skills"
          title={<>Technical <span className="text-gradient-green">Expertise</span></>}
          subtitle="A comprehensive skill set spanning machine learning, full-stack development, and software engineering."
        />

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '48px' }}
        >
          {['All', ...SKILLS.map((s) => s.category)].filter((v, i, a) => a.indexOf(v) === i).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '7px 16px',
                background: active === cat ? 'rgba(0,255,136,0.12)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${active === cat ? 'rgba(0,255,136,0.4)' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '8px',
                color: active === cat ? '#00FF88' : '#71717a',
                fontSize: '13px',
                fontWeight: active === cat ? 600 : 400,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {cat === 'All' ? '✦ All' : cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '20px' }}
          >
            {filtered.map((skill, i) => (
              <SkillCard key={skill.category} skill={skill} delay={i * 0.07} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
