import Navbar from '@/components/Navbar';
import ScrollProgress from '@/components/ScrollProgress';
import Hero from '@/components/Hero';
import AgendaBanner from '@/components/AgendaBanner';
import Stats from '@/components/Stats';
import Portfolio from '@/components/Portfolio';
import Manifesto from '@/components/Manifesto';
import FlashGallery from '@/components/FlashGallery';
import SimuladorKonva from '@/components/SimuladorKonva';
import Process from '@/components/Process';
import Studio from '@/components/Studio';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <AgendaBanner />
      <Stats />
      <Portfolio />
      <Manifesto />
      <FlashGallery />
      <SimuladorKonva />
      <Process />
      <Studio />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
