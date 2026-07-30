import { useEffect, useRef, RefObject } from 'react';

export function useMagneticButton(strength = 0.4): RefObject<HTMLElement | null> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onLeave = () => {
      el.style.transform = 'translate(0,0)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1)';
    };

    const onEnter = () => {
      el.style.transition = 'transform 0.15s ease';
    };

    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    el.addEventListener('mouseenter', onEnter);

    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
      el.removeEventListener('mouseenter', onEnter);
    };
  }, [strength]);

  return ref;
}
