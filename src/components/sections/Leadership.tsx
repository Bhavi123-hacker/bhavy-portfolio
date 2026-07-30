import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { LEADERSHIP } from '@/lib/constants';
import { Calendar, Building2, Users } from 'lucide-react';

export default function Leadership() {
  return (
    <section id="leadership" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Leadership"
          title={<>Leadership & <span className="text-gradient-green">Activities</span></>}
          subtitle="Contributing to the tech community through management, research, and event coordination."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(340px,1fr))', gap: '24px' }}>
          {LEADERSHIP.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, borderColor: 'rgba(0,255,136,0.3)', boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(0,255,136,0.06)' }}
              style={{
                padding: '32px',
                background: 'rgba(13,13,13,0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.35s ease',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Accent bar */}
              <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '3px', background: 'linear-gradient(to bottom, #00FF88, transparent)' }} />

              <div style={{ display: 'flex', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '14px',
                  background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '19px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>{item.role}</h3>
                  <p style={{ color: '#00FF88', fontSize: '14px', fontWeight: 600 }}>{item.organization}</p>
                  <div style={{ display: 'flex', gap: '12px', marginTop: '6px', flexWrap: 'wrap' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#52525b', fontSize: '12px' }}>
                      <Building2 size={11} /> {item.institution}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#52525b', fontSize: '12px' }}>
                      <Calendar size={11} /> {item.period}
                    </span>
                  </div>
                </div>
              </div>

              <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, marginBottom: item.highlights ? '16px' : '0' }}>
                {item.description}
              </p>

              {item.highlights && (
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {item.highlights.map((h) => (
                    <span key={h} style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      padding: '5px 12px',
                      background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.15)',
                      borderRadius: '20px', color: '#00FF88', fontSize: '12px', fontWeight: 600,
                    }}>
                      <Users size={10} /> {h}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
