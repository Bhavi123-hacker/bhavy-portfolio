import { useState, useEffect, useCallback } from 'react';

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handle = (e: MouseEvent) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handle);
    return () => window.removeEventListener('mousemove', handle);
  }, []);

  return position;
}

export function useMousePositionRef(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handle = useCallback((e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handle as EventListener);
    return () => el.removeEventListener('mousemove', handle as EventListener);
  }, [ref, handle]);

  return pos;
}
