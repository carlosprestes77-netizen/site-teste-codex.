import type { Metadata } from 'next';
import Script from 'next/script';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import './globals.css';
import { ARTIST, GA_ID, STUDIO_NAME } from '@/lib/data';
import GrainOverlay from '@/components/GrainOverlay';
import CustomCursor from '@/components/CustomCursor';

const cormorant = Cormorant_Garamond({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], style: ['normal', 'italic'], variable: '--font-cormorant' });
const manrope = Manrope({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-manrope' });
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const siteUrl = `https://example.com${basePath}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${STUDIO_NAME} — tatuagem autoral de alto impacto`, template: `%s · ${STUDIO_NAME}` },
  description: 'Portfólio estático de tatuagem autoral em São Paulo, com fine line, blackwork, ornamental, simulador virtual e agendamento por WhatsApp.',
  keywords: ['tatuagem autoral', 'tattoo artist', 'fine line', 'blackwork', 'ornamental', 'São Paulo', STUDIO_NAME],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${STUDIO_NAME} — tatuagem autoral de alto impacto`,
    description: 'Traços refinados, projetos exclusivos e experiência segura para marcar decisões na pele.',
    url: siteUrl,
    siteName: STUDIO_NAME,
    locale: 'pt_BR',
    type: 'website',
    images: [{ url: `${basePath}/portfolio/hero.jpg`, width: 1200, height: 630, alt: `Portfólio ${STUDIO_NAME}` }]
  },
  twitter: { card: 'summary_large_image', title: STUDIO_NAME, description: 'Tatuagem autoral em São Paulo.', images: [`${basePath}/portfolio/hero.jpg`] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'TattooParlor',
    name: STUDIO_NAME,
    image: `${siteUrl}/portfolio/hero.jpg`,
    address: { '@type': 'PostalAddress', addressLocality: ARTIST.city, addressCountry: 'BR' },
    telephone: `+${ARTIST.whatsapp}`,
    sameAs: [ARTIST.instagram]
  };

  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable}`}>
      <body className="bg-paper-200 text-ink font-sans antialiased">
        <Script id="ga4-src" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}</Script>
        <Script id="schema" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        {children}
        <GrainOverlay />
        <CustomCursor />
      </body>
    </html>
  );
}
