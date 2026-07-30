import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMousePosition } from '@/hooks/useMousePosition';

export default function CustomCursor() {
  const { x, y } = useMousePosition();
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const rafRef = useRef<number>(0);
  const [ringPos, setRingPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleEnter = () => setIsVisible(true);
    const handleLeave = () => setIsVisible(false);
    document.addEventListener('mouseenter', handleEnter);
    document.addEventListener('mouseleave', handleLeave);

    const checkHover = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const isLink = el?.closest('a, button, [data-hover]') != null;
      setIsHovering(isLink);
    };
    document.addEventListener('mouseover', checkHover);

    return () => {
      document.removeEventListener('mouseenter', handleEnter);
      document.removeEventListener('mouseleave', handleLeave);
      document.removeEventListener('mouseover', checkHover);
    };
  }, []);

  // Smooth ring follow
  useEffect(() => {
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;
    const animate = () => {
      ringX.current = lerp(ringX.current, x, 0.12);
      ringY.current = lerp(ringY.current, y, 0.12);
      setRingPos({ x: ringX.current, y: ringY.current });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [x, y]);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Dot - follows exact cursor */}
          <motion.div
            className={`cursor-dot ${isHovering ? 'hover' : ''}`}
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.15 }}
          />
          {/* Ring - smooth lag follow */}
          <motion.div
            className={`cursor-ring ${isHovering ? 'hover' : ''}`}
            style={{ left: ringPos.x, top: ringPos.y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.2 }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
