import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { EDUCATION } from '@/lib/constants';
import { MapPin, Award, Calendar } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Education"
          title={<>Academic <span className="text-gradient-green">Journey</span></>}
          subtitle="Building a strong foundation in Computer Science, AI, and Machine Learning."
        />

        <div style={{ position: 'relative' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '28px',
            bottom: '28px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(0,255,136,0.5), rgba(0,255,136,0.2), transparent)',
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingLeft: '72px' }}>
            {EDUCATION.map((edu, i) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: 'relative' }}
              >
                {/* Timeline dot */}
                <motion.div
                  style={{
                    position: 'absolute',
                    left: '-58px',
                    top: '28px',
                    width: '14px',
                    height: '14px',
                    borderRadius: '50%',
                    background: '#00FF88',
                    boxShadow: '0 0 16px rgba(0,255,136,0.6)',
                    border: '2px solid #050505',
                  }}
                  animate={{ boxShadow: ['0 0 10px rgba(0,255,136,0.4)', '0 0 24px rgba(0,255,136,0.8)', '0 0 10px rgba(0,255,136,0.4)'] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.5 }}
                />

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, borderColor: 'rgba(0,255,136,0.3)', boxShadow: '0 16px 50px rgba(0,0,0,0.4), 0 0 30px rgba(0,255,136,0.08)' }}
                  style={{
                    padding: '28px',
                    background: 'rgba(13,13,13,0.85)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '16px',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.35s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Top accent line */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00FF88, transparent)' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontSize: '24px' }}>{edu.icon}</span>
                      <div>
                        <h3 className="font-heading" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', lineHeight: 1.2 }}>{edu.institution}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#52525b', fontSize: '12px', marginTop: '4px' }}>
                          <MapPin size={11} /> {edu.location}
                        </div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                      <span style={{
                        padding: '4px 12px',
                        background: 'rgba(0,255,136,0.08)',
                        border: '1px solid rgba(0,255,136,0.2)',
                        borderRadius: '20px',
                        color: '#00FF88',
                        fontSize: '12px',
                        fontWeight: 700,
                        fontFamily: 'JetBrains Mono, monospace',
                      }}>{edu.grade}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#52525b', fontSize: '12px' }}>
                        <Calendar size={11} /> {edu.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#00FF88', fontSize: '14px', fontWeight: 600, marginBottom: '10px' }}>{edu.degree}</p>
                  <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>{edu.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {edu.highlights.map((h) => (
                      <span key={h} style={{
                        padding: '4px 10px',
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.08)',
                        borderRadius: '6px',
                        color: '#71717a',
                        fontSize: '12px',
                      }}>{h}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
