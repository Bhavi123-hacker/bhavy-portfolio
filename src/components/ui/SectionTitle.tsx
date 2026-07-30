import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionTitleProps {
  label?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export default function SectionTitle({ label, title, subtitle, align = 'left', className }: SectionTitleProps) {
  return (
    <div className={cn(className)} style={{ textAlign: align, marginBottom: '64px' }}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(0,255,136,0.06)',
            border: '1px solid rgba(0,255,136,0.18)',
            borderRadius: '20px',
            marginBottom: '20px',
          }}
        >
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FF88', display: 'inline-block', boxShadow: '0 0 8px rgba(0,255,136,0.8)' }} />
          <span style={{ color: '#00FF88', fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'JetBrains Mono, monospace' }}>
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        className="font-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{ fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 700, color: '#ffffff', lineHeight: 1.1, letterSpacing: '-0.02em', marginBottom: subtitle ? '16px' : '0' }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: '#71717a', fontSize: '17px', lineHeight: 1.7, maxWidth: align === 'center' ? '560px' : '560px', margin: align === 'center' ? '0 auto' : '0' }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
