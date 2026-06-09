'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import ScrambleText from './ScrambleText';
import { ARTIST, TAGLINE } from '@/lib/data';
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
export default function Hero() {
  const { scrollY } = useScroll(); const y = useTransform(scrollY, [0, 900], [0, 220]);
  return <section id="inicio" className="relative flex min-h-screen items-end overflow-hidden bg-ink text-paper-100">
    <motion.div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ y, backgroundImage: `url(${basePath}/portfolio/hero.jpg)` }} />
    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" /><div className="absolute inset-y-0 right-6 hidden items-center font-serif text-[18vw] tracking-widest opacity-[0.04] [writing-mode:vertical-rl] lg:flex">VINCIT</div>
    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 lg:px-8 lg:pb-32">
      <p className="label-section text-paper-300">Tatuagem autoral em {ARTIST.city}</p>
      <h1 className="mt-8 max-w-5xl font-serif text-6xl font-light uppercase leading-[0.9] md:text-8xl lg:text-[8.5rem]">{TAGLINE.map((line,i)=><span className="block" key={line}><ScrambleText text={line} delay={500+i*250} duration={1200} /></span>)}</h1>
      <p className="mt-8 max-w-2xl font-serif text-2xl italic text-paper-200">Projetos que respeitam pele, tempo e silêncio — por {ARTIST.name}.</p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row"><a className="btn-primary bg-paper-100 text-ink hover:bg-gold-pale" href="#orcamento">Pedir orçamento</a><a className="btn-outline border-paper-100 text-paper-100 hover:bg-paper-100 hover:text-ink" href="#portfolio">Ver portfólio</a></div>
    </div>
  </section>;
}
