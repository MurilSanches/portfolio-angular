export type Project = {
  name: string;
  descriptionKey: string;
  repoUrl: string;
  images: string[];
  tags: string[];
};

export const PROJECTS: Project[] = [
  {
    name: 'Treinando Next.js',
    descriptionKey: 'projects.items.next.description',
    repoUrl: 'https://github.com/MurilSanches/treinando-nextjs',
    images: [
      'portfolio/next-page-1.svg',
      'portfolio/next-page-2.svg',
      'portfolio/next-page-3.svg',
    ],
    tags: ['Next.js', 'SSR', 'API'],
  },
  {
    name: 'Poizoni',
    descriptionKey: 'projects.items.poizoni.description',
    repoUrl: 'https://github.com/ivanknobel/poizoni',
    images: ['portfolio/poizoni-page-2.svg', 'portfolio/poizoni-page-3.svg'],
    tags: ['Flutter', 'Mobile', 'Geolocalização'],
  },
  {
    name: 'Ecommerce Car Parts',
    descriptionKey: 'projects.items.ecommerceCar.description',
    repoUrl: 'https://github.com/MurilSanches/ecommerce-car-parts-front',
    images: [],
    tags: ['TypeScript', 'E-commerce', 'React'],
  },
  {
    name: 'News Gamification',
    descriptionKey: 'projects.items.newsGamification.description',
    repoUrl: 'https://github.com/MurilSanches/news-gamification-frontend',
    images: [],
    tags: ['TypeScript', 'Gamification', 'React'],
  },
  {
    name: 'Portfolio Svelte',
    descriptionKey: 'projects.items.portfolioSvelte.description',
    repoUrl: 'https://github.com/MurilSanches/portfolio-svelte',
    images: [],
    tags: ['Svelte', 'Portfolio', 'CSS'],
  },
  {
    name: 'Sistema Solar Interativo',
    descriptionKey: 'projects.items.solarSystem.description',
    repoUrl: 'https://github.com/MurilSanches/SistemaSolarInterativo',
    images: [],
    tags: ['JavaScript', 'Canvas', '3D'],
  },
  {
    name: 'React Web 3.0 Blockchain',
    descriptionKey: 'projects.items.blockchain.description',
    repoUrl: 'https://github.com/MurilSanches/react-web.3.0-blockchain',
    images: [],
    tags: ['React', 'Web3', 'Blockchain'],
  },
  {
    name: 'Music Player + Spotify',
    descriptionKey: 'projects.items.musicPlayer.description',
    repoUrl: 'https://github.com/MurilSanches/music-player-with-spotify',
    images: [],
    tags: ['JavaScript', 'Spotify API', 'Music'],
  },
];
