import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { CERTIFICATIONS } from '@/lib/constants';
import { ExternalLink, CheckCircle2, Calendar } from 'lucide-react';

/* Inline SVG logos — zero external dependencies, always renders */

function GoogleLogo() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30">
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    </svg>
  );
}

function HelsinkiLogo() {
  return (
    <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
      <circle cx="20" cy="20" r="20" fill="#00205B"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="13" fontWeight="700" fontFamily="serif">UH</text>
    </svg>
  );
}

function IITMadrasLogo() {
  return (
    <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
      <circle cx="20" cy="20" r="20" fill="#8B0000"/>
      <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="sans-serif">IIT-M</text>
    </svg>
  );
}

const certLogos: Record<string, React.ReactNode> = {
  'google-ai':           <GoogleLogo />,
  'google-prompting':    <GoogleLogo />,
  'elements-ai':         <HelsinkiLogo />,
  'nptel-conservation':  <IITMadrasLogo />,
};

export default function Certifications() {
  return (
    <section id="certifications" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Certifications"
          title={<>Licenses & <span className="text-gradient-green">Certifications</span></>}
          subtitle="Continuously upskilling through recognized online courses and professional certifications."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px,1fr))', gap: '20px' }}>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -8, borderColor: 'rgba(0,255,136,0.25)', boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,255,136,0.06)' }}
              style={{
                padding: '28px',
                background: 'rgba(13,13,13,0.85)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '20px',
                backdropFilter: 'blur(12px)',
                transition: 'all 0.35s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Top gradient accent */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #00FF88, rgba(0,255,136,0.2), transparent)' }} />

              <div style={{ display: 'flex', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '14px',
                  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px', flexShrink: 0, padding: '8px',
                }}>
                  {certLogos[cert.id] ?? <span>{cert.icon}</span>}
                </div>
                <div style={{ flex: 1 }}>
                  <h3 className="font-heading" style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '4px', lineHeight: 1.3 }}>{cert.name}</h3>
                  <p style={{ color: '#00FF88', fontSize: '13px', fontFamily: 'JetBrains Mono, monospace' }}>{cert.issuer}</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
                <CheckCircle2 size={13} style={{ color: '#00FF88' }} />
                <span style={{ color: '#52525b', fontSize: '12px' }}>Verified Credential</span>
                <span style={{ color: '#3f3f46', fontSize: '12px', marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={11} /> {cert.year}
                </span>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
                {cert.topics.map((topic) => (
                  <span key={topic} style={{
                    padding: '4px 10px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '6px',
                    color: '#71717a', fontSize: '12px',
                  }}>
                    {topic}
                  </span>
                ))}
              </div>

              <motion.a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#00FF88', fontSize: '13px', fontWeight: 600,
                  textDecoration: 'none',
                  padding: '6px 12px',
                  background: 'rgba(0,255,136,0.06)',
                  border: '1px solid rgba(0,255,136,0.15)',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease',
                }}
                whileHover={{ background: 'rgba(0,255,136,0.12)', borderColor: 'rgba(0,255,136,0.35)' }}
              >
                <ExternalLink size={12} /> Verify Certificate
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
