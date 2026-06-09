'use client';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { STUDIO_NAME } from '@/lib/data';

const links = [['Portfólio','#portfolio'],['Manifesto','#manifesto'],['Flash','#flash'],['Simulador','#simulador'],['Processo','#processo'],['Estúdio','#estudio'],['FAQ','#faq']];
export default function Navbar() {
  const [open, setOpen] = useState(false); const [scrolled, setScrolled] = useState(false); const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));
  return <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'glass-paper border-b border-ink/10' : 'bg-transparent'}`}>
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
      <a href="#inicio" className="font-serif text-2xl tracking-tight">{STUDIO_NAME}</a>
      <div className="hidden items-center gap-7 lg:flex">{links.map(([l,h]) => <a className="text-[10px] uppercase tracking-[0.35em] text-ink-muted hover:text-ink" href={h} key={h}>{l}</a>)}<a className="btn-primary py-3" href="#orcamento">Agendar</a></div>
      <button className="lg:hidden" aria-label="Abrir menu" onClick={() => setOpen(true)}><Menu /></button>
    </nav>
    <AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-paper-100 p-6 lg:hidden">
      <button className="ml-auto block" aria-label="Fechar menu" onClick={() => setOpen(false)}><X /></button>
      <div className="mt-16 grid gap-6">{links.map(([l,h]) => <a onClick={() => setOpen(false)} className="font-serif text-4xl" href={h} key={h}>{l}</a>)}<a onClick={() => setOpen(false)} className="btn-primary mt-6" href="#orcamento">Agendar</a></div>
    </motion.div>}</AnimatePresence>
  </header>;
}
