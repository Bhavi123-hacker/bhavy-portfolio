import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { Badge } from '@/components/ui/Badge';
import { EXPERIENCE } from '@/lib/constants';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Experience"
          title={<>Work <span className="text-gradient-green">Experience</span></>}
          subtitle="Hands-on industry experience applying AI and data science to real-world problems."
        />

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            left: '28px',
            top: '28px',
            bottom: '28px',
            width: '1px',
            background: 'linear-gradient(to bottom, rgba(0,255,136,0.6), rgba(0,255,136,0.1), transparent)',
          }} />

          <div style={{ paddingLeft: '72px' }}>
            {EXPERIENCE.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ position: 'relative' }}
              >
                {/* Pulsing dot */}
                <motion.div
                  style={{
                    position: 'absolute', left: '-58px', top: '32px',
                    width: '14px', height: '14px', borderRadius: '50%',
                    background: '#00FF88', border: '3px solid #050505',
                    boxShadow: '0 0 20px rgba(0,255,136,0.7)',
                  }}
                  animate={{ boxShadow: ['0 0 12px rgba(0,255,136,0.5)', '0 0 28px rgba(0,255,136,0.9)', '0 0 12px rgba(0,255,136,0.5)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />

                <motion.div
                  whileHover={{ y: -8, borderColor: 'rgba(0,255,136,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,136,0.08)' }}
                  style={{
                    padding: '32px',
                    background: 'rgba(13,13,13,0.85)',
                    border: '1px solid rgba(255,255,255,0.07)',
                    borderRadius: '20px',
                    backdropFilter: 'blur(12px)',
                    transition: 'all 0.4s ease',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  {/* Left accent bar */}
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, #00FF88, transparent)' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '20px' }}>
                    <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: 48, height: 48, borderRadius: '12px',
                        background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '22px', flexShrink: 0,
                      }}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="font-heading" style={{ fontSize: '22px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>{exp.role}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#00FF88', fontSize: '14px', fontWeight: 600 }}>
                          <Building2 size={13} /> {exp.company}
                        </div>
                        <div style={{ display: 'flex', gap: '14px', marginTop: '6px', flexWrap: 'wrap' }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#52525b', fontSize: '13px' }}>
                            <Calendar size={12} /> {exp.period}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#52525b', fontSize: '13px' }}>
                            <MapPin size={12} /> {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <span style={{
                      padding: '5px 12px',
                      background: 'rgba(0,255,136,0.06)',
                      border: '1px solid rgba(0,255,136,0.2)',
                      borderRadius: '20px',
                      color: '#00FF88',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'JetBrains Mono, monospace',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                    }}>
                      {exp.type}
                    </span>
                  </div>

                  {/* Bullet points */}
                  <div style={{ marginBottom: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.description.map((point, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + j * 0.08 }}
                        style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}
                      >
                        <CheckCircle2 size={15} style={{ color: '#00FF88', flexShrink: 0, marginTop: '3px' }} />
                        <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: 1.65 }}>{point}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Tech badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {exp.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
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
