const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const STUDIO_NAME = 'DW Tattooer';
export const TAGLINE = ['Whip shading', 'Traço sombrio', 'Pele em ritual'];
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? 'G-XXXXXXXXXX';
export const PHONE_RAW = '5544991373995';

export const ARTIST = {
  name: 'DW Tattooer',
  handle: '@dw.tattooer',
  instagram: 'https://www.instagram.com/dw.tattooer',
  whatsapp: PHONE_RAW,
  location: 'Maringá — Paraná',
  city: 'Maringá, PR',
  portrait: `${basePath}/artist/portrait.jpg`,
  hours: [
    { day: 'Terça a sexta', time: '11h às 19h' },
    { day: 'Sábado', time: '10h às 17h' },
    { day: 'Domingo e segunda', time: 'Fechado' }
  ]
};

export const stats = [
  { value: '54+', label: 'trampos publicados' },
  { value: '1.8k', label: 'seguidores no Instagram' },
  { value: '100%', label: 'projetos sob consulta' },
  { value: '24h', label: 'guia pós-sessão' }
];

export const processSteps = [
  { n: '01', title: 'Conversa', desc: 'Escuto sua história, referências e limites para encontrar a intenção real do desenho.' },
  { n: '02', title: 'Projeto', desc: 'Crio uma composição autoral pensando em fluxo corporal, respiro e envelhecimento.' },
  { n: '03', title: 'Sessão', desc: 'Execução precisa, ambiente calmo, materiais certificados e pausas sempre que necessário.' },
  { n: '04', title: 'Cuidado', desc: 'Você sai com instruções claras, acompanhamento e revisão quando o tempo pedir.' }
];

export const testimonials = [
  { name: 'Kaua', work: 'Whip shading na clavícula', quote: 'O trampo ficou pesado do jeito certo, com sombra limpa e presença absurda.' },
  { name: 'William', work: 'Fechamento de braço', quote: 'Fechamento com leitura de corpo, contraste forte e muita confiança durante a sessão.' },
  { name: 'Rafa', work: 'Anime em blackwork', quote: 'Atendimento firme, desenho bem posicionado e resultado muito acima da referência.' }
];

export const faqs = [
  { q: 'Como faço um orçamento?', a: 'Envie a ideia, local do corpo, tamanho aproximado e referências pelo formulário. Respondo com caminhos, valores e datas disponíveis.' },
  { q: 'Você copia desenhos de outros artistas?', a: 'Não. Uso referências para entender linguagem e atmosfera, mas cada projeto é criado de forma autoral para a sua pele.' },
  { q: 'Qual é o valor mínimo?', a: 'O valor mínimo cobre estudo, preparo do material, esterilização e sessão. O orçamento final depende de tamanho, detalhe e local do corpo.' },
  { q: 'Dói muito?', a: 'Dor é pessoal, mas trabalhamos com pausas, respiração e ritmo. Antes da sessão explico o que esperar para cada região.' },
  { q: 'Posso levar acompanhante?', a: 'Sim, uma pessoa maior de idade, desde que o estúdio esteja em uma fase da agenda que permita circulação segura.' },
  { q: 'Como funciona o sinal?', a: 'A data é reservada mediante sinal, abatido do valor final. Reagendamentos seguem uma política clara enviada antes da confirmação.' },
  { q: 'Você cobre tatuagens antigas?', a: 'Avalio caso a caso. Algumas coberturas pedem sessões de laser prévias ou um projeto maior para garantir resultado sólido.' },
  { q: 'Quais cuidados devo ter depois?', a: 'Você recebe um guia escrito com limpeza, hidratação, restrições de sol, piscina e treino, além de canal para dúvidas.' }
];

const styles = ['Whip shading', 'Blackwork', 'Fine line'] as const;
export const tattooStyles = styles;

const portfolioLabels = [
  'Clavícula em sombra',
  'Fechamento de braço',
  'Primeiras linhas',
  'Rotina de estúdio',
  'Mew',
  'Satoru Gojo',
  'Contraste no braço',
  'Peça autoral',
  'Detalhe em preto',
  'Composição vertical'
];

export const portfolioItems = Array.from({ length: 10 }, (_, index) => {
  const n = String(index + 1).padStart(2, '0');
  const style = styles[index % styles.length];
  return {
    id: `obra-${n}`,
    src: `${basePath}/portfolio/work-${n}.jpg`,
    alt: `Tatuagem ${style} por DW Tattooer em Maringá`,
    style,
    placement: ['clavícula', 'braço', 'ombro', 'antebraço', 'perna'][index % 5],
    size: index % 3 === 0 ? 'large' as const : 'medium' as const,
    label: portfolioLabels[index]
  };
});

export const flashItems = Array.from({ length: 8 }, (_, index) => {
  const n = String(index + 1).padStart(2, '0');
  const style = styles[index % styles.length];
  const names = ['Lâmina lunar', 'Ramo secreto', 'Portal', 'Serpente calma', 'Constelação', 'Relicário', 'Chama mínima', 'Olho vegetal'];
  const emojis = ['🌙', '🌿', '◇', '〰️', '✦', '✺', '♢', '◉'];
  return {
    id: `flash-${n}`,
    name: names[index],
    style,
    description: 'Desenho disponível uma única vez, adaptável ao fluxo do corpo.',
    src: `${basePath}/flashes/flash-${n}.png`,
    simSrc: `${basePath}/flashes/sim/flash-${n}.png`,
    placeholder: emojis[index]
  };
});
