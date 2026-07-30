import React, { useEffect, useRef } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number; opacity: number;
  life: number; maxLife: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useMousePosition();
  const mousePosRef = useRef(mousePos);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    mousePosRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize floating particles
    for (let i = 0; i < 60; i++) {
      particlesRef.current.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        life: Math.random() * 300,
        maxLife: 300 + Math.random() * 200,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mousePosRef.current.x;
      const my = mousePosRef.current.y;

      // Mouse spotlight glow
      if (mx > 0 || my > 0) {
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, 350);
        gradient.addColorStop(0, 'rgba(0, 255, 136, 0.045)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 136, 0.015)');
        gradient.addColorStop(1, 'rgba(0, 255, 136, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Update & draw floating particles
      particlesRef.current.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        if (p.life > p.maxLife) {
          p.x = Math.random() * canvas.width;
          p.y = Math.random() * canvas.height;
          p.life = 0;
          p.opacity = Math.random() * 0.5 + 0.1;
        }

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Pulse opacity
        const t = p.life / p.maxLife;
        const alpha = p.opacity * Math.sin(t * Math.PI);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 255, 136, ${alpha})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = 'rgba(0, 255, 136, 0.5)';
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <>
      {/* CSS Animated Grid */}
      <div className="bg-grid" />

      {/* Primary ambient glow (top center) */}
      <div className="bg-radial-glow" />

      {/* Secondary ambient glow (bottom right) */}
      <div
        style={{
          position: 'fixed',
          bottom: '-20%',
          right: '10%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse at center, rgba(0,255,136,0.035) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          animation: 'glowPulse 10s ease-in-out infinite 4s',
        }}
      />

      {/* Noise texture overlay */}
      <div className="noise-overlay" />

      {/* Canvas for particles + mouse spotlight */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
    </>
  );
}
