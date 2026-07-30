import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { PERSONAL_INFO } from '@/lib/constants';
import { MapPin, GraduationCap, Target, Heart, Cpu, Code2, BrainCircuit } from 'lucide-react';

const interests = [
  { label: 'AI & Machine Learning', icon: '🧠' },
  { label: 'Data Science', icon: '📊' },
  { label: 'Software Engineering', icon: '⚙️' },
  { label: 'Full-Stack Development', icon: '🌐' },
  { label: 'Database Systems', icon: '🗄️' },
  { label: 'Algorithms & DSA', icon: '📐' },
];

const enjoys = [
  'Solving challenging algorithmic problems',
  'Building real-world ML applications',
  'Exploring cutting-edge AI research',
  'Continuous learning & upskilling',
  'Collaborating on impactful projects',
  'Competitive programming',
];

const profileDetails = [
  { icon: MapPin,        label: 'Location',    value: 'New Delhi, India' },
  { icon: GraduationCap, label: 'University',  value: 'VIT Chennai' },
  { icon: Code2,        label: 'Degree',       value: 'B.Tech CSE (AI & ML)' },
  { icon: BrainCircuit, label: 'CGPA',         value: '9.15 / 10' },
];

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="About Me"
          title={<>Who I <span className="text-gradient-green">Am</span></>}
          subtitle="A passionate engineer driven by curiosity, creativity, and a love for building things that matter."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px,1fr))', gap: '24px' }}>

          {/* ── Premium Identity Card (no photo) ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'rgba(13,13,13,0.85)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '20px',
              overflow: 'hidden',
              backdropFilter: 'blur(12px)',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Top green accent bar */}
            <div style={{
              height: '3px',
              background: 'linear-gradient(90deg, #00FF88 0%, rgba(0,255,136,0.25) 60%, transparent 100%)',
              flexShrink: 0,
            }} />

            {/* Header block */}
            <div style={{
              padding: '32px 28px 24px',
              background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,136,0.06) 0%, transparent 70%)',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
            }}>
              {/* Monogram + name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '18px', marginBottom: '20px' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '16px', flexShrink: 0,
                  background: 'rgba(0,255,136,0.08)',
                  border: '1px solid rgba(0,255,136,0.22)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Outfit, sans-serif', fontSize: '20px', fontWeight: 800,
                  color: '#00FF88', letterSpacing: '-0.04em',
                  boxShadow: '0 0 20px rgba(0,255,136,0.08)',
                }}>
                  BG
                </div>
                <div>
                  <h3 className="font-heading" style={{
                    fontSize: '22px', fontWeight: 700, color: '#ffffff',
                    letterSpacing: '-0.02em', marginBottom: '4px',
                  }}>
                    Bhavy Garg
                  </h3>
                  <p style={{
                    color: '#00FF88', fontSize: '12px', fontWeight: 600,
                    fontFamily: 'JetBrains Mono, monospace', letterSpacing: '0.04em',
                  }}>
                    Machine Learning Engineer · Software Engineer
                  </p>
                </div>
              </div>

              {/* Short bio */}
              <p style={{
                color: '#71717a', fontSize: '14px', lineHeight: 1.75,
              }}>
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Detail rows */}
            <div style={{ padding: '20px 28px', display: 'flex', flexDirection: 'column', gap: '0px', flex: 1 }}>
              {profileDetails.map((detail, i) => (
                <div key={detail.label}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 0',
                  }}>
                    <div style={{
                      width: 32, height: 32, borderRadius: '9px', flexShrink: 0,
                      background: 'rgba(0,255,136,0.06)',
                      border: '1px solid rgba(0,255,136,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <detail.icon size={15} style={{ color: '#00FF88' }} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ color: '#3f3f46', fontSize: '11px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1px' }}>
                        {detail.label}
                      </p>
                      <p style={{ color: '#a1a1aa', fontSize: '14px', fontWeight: 500 }}>
                        {detail.value}
                      </p>
                    </div>
                  </div>
                  {i < profileDetails.length - 1 && (
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.04)', marginLeft: '44px' }} />
                  )}
                </div>
              ))}
            </div>

            {/* Status footer */}
            <div style={{
              margin: '0 28px 24px',
              padding: '14px 18px',
              background: 'rgba(0,255,136,0.04)',
              border: '1px solid rgba(0,255,136,0.12)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%', flexShrink: 0,
                background: '#00FF88',
                boxShadow: '0 0 8px rgba(0,255,136,0.8)',
              }} />
              <p style={{ color: '#71717a', fontSize: '13px', lineHeight: 1.5 }}>
                <span style={{ color: '#00FF88', fontWeight: 600 }}>Open to opportunities</span>
                {' '}— Internships, research roles & full-time positions in ML / SWE.
              </p>
            </div>
          </motion.div>

          {/* ── Content column ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Career objective */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                padding: '24px',
                background: 'rgba(0,255,136,0.04)',
                border: '1px solid rgba(0,255,136,0.15)',
                borderRadius: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,255,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Target size={16} style={{ color: '#00FF88' }} />
                </div>
                <h4 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>Career Objective</h4>
              </div>
              <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.7, fontStyle: 'italic' }}>
                "{PERSONAL_INFO.objective}"
              </p>
            </motion.div>

            {/* Technical interests */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,255,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Cpu size={16} style={{ color: '#00FF88' }} />
                </div>
                <h4 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>Technical Interests</h4>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {interests.map((item, i) => (
                  <motion.span
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    whileHover={{ borderColor: 'rgba(0,255,136,0.4)', background: 'rgba(0,255,136,0.08)', y: -2 }}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '6px 12px',
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '8px',
                      color: '#a1a1aa',
                      fontSize: '13px',
                      cursor: 'default',
                      transition: 'all 0.2s ease',
                    }}
                  >
                    <span>{item.icon}</span> {item.label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* What I enjoy */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ padding: '24px', background: 'rgba(13,13,13,0.8)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(0,255,136,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Heart size={16} style={{ color: '#00FF88' }} />
                </div>
                <h4 className="font-heading" style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff' }}>What I Enjoy</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {enjoys.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.35 + i * 0.06 }}
                    style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: '#a1a1aa', fontSize: '14px' }}
                  >
                    <span style={{ color: '#00FF88', flexShrink: 0, marginTop: '2px' }}>▸</span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
