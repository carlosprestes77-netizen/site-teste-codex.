'use client';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useLayoutEffect, useMemo, useRef, useState } from 'react';
import { portfolioItems, tattooStyles } from '@/lib/data';

type Filter = 'Todos' | (typeof tattooStyles)[number];
export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>('Todos'); const [overflow, setOverflow] = useState(0);
  const sectionRef = useRef<HTMLElement>(null); const trackRef = useRef<HTMLDivElement>(null);
  const items = useMemo(() => filter === 'Todos' ? portfolioItems : portfolioItems.filter(i => i.style === filter), [filter]);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start','end end'] });
  const rawX = useTransform(scrollYProgress, [0,1], [0, -overflow]); const x = useSpring(rawX, { stiffness: 120, damping: 28 });
  useLayoutEffect(() => { const measure=()=>setOverflow(Math.max(0,(trackRef.current?.scrollWidth ?? 0)-window.innerWidth+80)); measure(); window.addEventListener('resize',measure); return()=>window.removeEventListener('resize',measure); }, [items]);
  return <section id="portfolio" ref={sectionRef} className="py-24 lg:py-0" style={{ height: typeof window === 'undefined' ? undefined : `calc(100vh + ${overflow}px)` }}>
    <div className="mx-auto max-w-7xl px-5 lg:hidden"><Header filter={filter} setFilter={setFilter}/><div className="mt-10 flex snap-x gap-5 overflow-x-auto pb-8">{items.map(item=><Card key={item.id} item={item}/>)}</div></div>
    <div className="sticky top-0 hidden h-screen overflow-hidden px-8 lg:block"><div className="mx-auto max-w-7xl pt-24"><Header filter={filter} setFilter={setFilter}/></div><motion.div ref={trackRef} className="mt-12 flex w-max gap-7" style={{ x }}>{items.map(item=><Card key={item.id} item={item}/>)}</motion.div></div>
  </section>;
}
function Header({filter,setFilter}:{filter:Filter;setFilter:(f:Filter)=>void}) { return <div><p className="label-section">01 — Portfólio</p><div className="mt-6 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><h2 className="max-w-3xl font-serif text-5xl font-light lg:text-7xl">Obras que respiram com o corpo.</h2><div className="flex flex-wrap gap-3">{(['Todos',...tattooStyles] as Filter[]).map(f=><button className={`border px-4 py-2 text-[10px] uppercase tracking-[0.3em] ${filter===f?'border-ink bg-ink text-paper-100':'border-ink/25'}`} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div></div></div>; }
function Card({item}:{item:(typeof portfolioItems)[number]}) { return <article className={`group relative shrink-0 snap-center overflow-hidden border border-ink/15 bg-paper-100 ${item.size==='large'?'h-[66vh] w-[72vw] lg:w-[520px]':'h-[58vh] w-[72vw] lg:w-[390px]'}`}><img src={item.src} alt={item.alt} className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent p-6 text-paper-100"><p className="font-serif text-2xl">{item.label}</p><p className="text-[10px] uppercase tracking-[0.3em] text-paper-300">{item.style} · {item.placement}</p></div></article>; }
