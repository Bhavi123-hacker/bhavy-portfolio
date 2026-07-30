import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn('tech-badge', className)}>
      {children}
    </span>
  );
}

interface ChipProps {
  children: React.ReactNode;
  icon?: string;
  className?: string;
}

export function Chip({ children, icon, className }: ChipProps) {
  return (
    <span
      className={cn(className)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '20px',
        fontSize: '13px',
        color: '#a1a1aa',
        transition: 'all 0.2s ease',
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}
