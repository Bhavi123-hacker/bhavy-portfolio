import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { SERVICES } from '@/lib/constants';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
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
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '32px',
        background: 'rgba(13,13,13,0.85)',
        border: `1px solid ${hovered ? 'rgba(0,255,136,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '20px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered ? '0 24px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,136,0.08)' : 'none',
        cursor: 'default',
      }}
    >
      {/* Mouse spotlight */}
      <div style={{
        position: 'absolute', inset: 0, borderRadius: 'inherit',
        background: `radial-gradient(400px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,255,136,0.06), transparent 60%)`,
        opacity: hovered ? 1 : 0, transition: 'opacity 0.3s ease', pointerEvents: 'none',
      }} />

      {/* Glow top border line */}
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
          background: `linear-gradient(90deg, transparent, rgba(0,255,136,0.8) ${spotlight.x}%, transparent)`,
          pointerEvents: 'none',
        }} />
      )}

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Icon */}
        <motion.div
          animate={hovered ? { rotate: [0, -10, 10, 0], scale: 1.1 } : { rotate: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            width: 52, height: 52, borderRadius: '14px',
            background: hovered ? 'rgba(0,255,136,0.12)' : 'rgba(0,255,136,0.06)',
            border: `1px solid ${hovered ? 'rgba(0,255,136,0.3)' : 'rgba(0,255,136,0.12)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '24px', marginBottom: '20px',
            transition: 'all 0.3s ease',
            boxShadow: hovered ? '0 0 20px rgba(0,255,136,0.15)' : 'none',
          }}
        >
          {service.icon}
        </motion.div>

        <h3 className="font-heading" style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
          {service.title}
        </h3>
        <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.7, marginBottom: '20px' }}>
          {service.description}
        </p>

        {/* Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {service.highlights.map((h) => (
            <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#00FF88', flexShrink: 0 }} />
              <span style={{ color: '#a1a1aa', fontSize: '13px' }}>{h}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-wrapper">
      <div className="section-container">
        <SectionTitle
          label="Services"
          title={<>What I <span className="text-gradient-green">Offer</span></>}
          subtitle="Delivering end-to-end solutions across AI, data science, and modern software engineering."
        />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px,1fr))', gap: '20px' }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
