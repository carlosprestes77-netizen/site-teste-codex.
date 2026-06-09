'use client';
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { ARTIST } from '@/lib/data';
import { trackWhatsAppClick } from '@/lib/analytics';
export default function FloatingWhatsApp(){ const [show,setShow]=useState(false); const {scrollY}=useScroll(); useMotionValueEvent(scrollY,'change',v=>setShow(v>600)); return <AnimatePresence>{show&&<motion.a initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:20}} onClick={()=>trackWhatsAppClick({source:'floating_button'})} href={`https://wa.me/${ARTIST.whatsapp}`} className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white"><span className="absolute inset-0 animate-ping bg-green-500 opacity-25"/><MessageCircle className="relative"/><span className="relative hidden sm:inline">Agendar</span></motion.a>}</AnimatePresence> }
