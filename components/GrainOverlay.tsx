export default function GrainOverlay() {
  const svg = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/></filter><rect width="100%" height="100%" filter="url(#n)" opacity="0.55"/></svg>`);
  return <div aria-hidden className="grain-animated pointer-events-none fixed inset-0 z-[60] opacity-[0.08] mix-blend-multiply animate-grain-shift" style={{ backgroundImage: `url("data:image/svg+xml,${svg}")` }} />;
}
