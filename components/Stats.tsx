'use client';
import { motion } from 'framer-motion';
import { stats } from '@/lib/data';
export default function Stats() { return <section className="px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl grid-cols-2 border-y border-ink/15 lg:grid-cols-4">{stats.map((s,i)=><motion.div key={s.label} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-80px'}} transition={{delay:i*.08}} className="border-ink/15 p-8 even:border-l lg:border-l"><div className="font-serif text-5xl lg:text-7xl">{s.value}</div><p className="mt-3 text-xs uppercase tracking-[0.3em] text-ink-muted">{s.label}</p></motion.div>)}</div></section>; }
