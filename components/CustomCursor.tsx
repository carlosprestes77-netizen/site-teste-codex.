'use client';

import { motion, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const dotX = useSpring(0, { damping: 45, stiffness: 900 });
  const dotY = useSpring(0, { damping: 45, stiffness: 900 });
  const ringX = useSpring(0, { damping: 30, stiffness: 250 });
  const ringY = useSpring(0, { damping: 30, stiffness: 250 });

  useEffect(() => {
    const media = window.matchMedia('(hover:hover) and (pointer:fine)');
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add('custom-cursor-active');
    const move = (event: MouseEvent) => {
      dotX.set(event.clientX - 3); dotY.set(event.clientY - 3);
      ringX.set(event.clientX - 18); ringY.set(event.clientY - 18);
    };
    const over = (event: MouseEvent) => setHover(Boolean((event.target as Element).closest('a,button,input,textarea,label')));
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => { document.body.classList.remove('custom-cursor-active'); window.removeEventListener('mousemove', move); window.removeEventListener('mouseover', over); };
  }, [enabled, dotX, dotY, ringX, ringY]);

  if (!enabled) return null;
  return <>
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[70] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference" style={{ x: dotX, y: dotY }} />
    <motion.div className="pointer-events-none fixed left-0 top-0 z-[70] rounded-full border border-white mix-blend-difference" animate={{ width: hover ? 56 : 36, height: hover ? 56 : 36 }} style={{ x: ringX, y: ringY }} />
  </>;
}
