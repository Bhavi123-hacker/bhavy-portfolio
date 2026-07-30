import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  delay?: number;
}

export default function GlowCard({ children, className, style, onClick, delay = 0 }: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      ref={ref}
      className={cn('spotlight-card', className)}
      style={{
        position: 'relative',
        background: 'rgba(13,13,13,0.8)',
        border: `1px solid ${hovered ? 'rgba(0,255,136,0.25)' : 'rgba(255,255,255,0.07)'}`,
        borderRadius: '16px',
        backdropFilter: 'blur(12px)',
        overflow: 'hidden',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,255,136,0.08)'
          : '0 4px 24px rgba(0,0,0,0.3)',
        ...style,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8 }}
    >
      {/* Spotlight overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(500px circle at ${spotlight.x}% ${spotlight.y}%, rgba(0,255,136,0.07), transparent 60%)`,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
          zIndex: 1,
          borderRadius: 'inherit',
        }}
      />

      {/* Animated top border glow */}
      {hovered && (
        <div
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '1px',
            background: `linear-gradient(90deg, transparent 0%, rgba(0,255,136,0.6) ${spotlight.x}%, transparent 100%)`,
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      )}

      <div style={{ position: 'relative', zIndex: 3 }}>
        {children}
      </div>
    </motion.div>
  );
}
