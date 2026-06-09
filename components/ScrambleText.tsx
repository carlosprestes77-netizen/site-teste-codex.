'use client';

import { useEffect, useState } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·×÷+=/—§∆';

type Props = { text: string; className?: string; delay?: number; duration?: number };

export default function ScrambleText({ text, className, delay = 0, duration = 1200 }: Props) {
  const [value, setValue] = useState(text.replace(/\S/g, '·'));

  useEffect(() => {
    let frame = 0;
    let raf = 0;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      if (now < start) { raf = requestAnimationFrame(tick); return; }
      const progress = Math.min((now - start) / duration, 1);
      const resolved = Math.floor(progress * text.length);
      const next = text.split('').map((char, index) => {
        if (char === ' ') return ' ';
        if (index <= resolved) return char;
        return GLYPHS[(frame + index * 7) % GLYPHS.length];
      }).join('');
      setValue(next);
      frame += 1;
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [text, delay, duration]);

  return <span aria-label={text} className={className}>{value}</span>;
}
