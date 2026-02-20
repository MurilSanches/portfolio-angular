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
      '/portfolio/next-page-1.svg',
      '/portfolio/next-page-2.svg',
      '/portfolio/next-page-3.svg',
    ],
    tags: ['Next.js', 'SSR', 'API'],
  },
  {
    name: 'Poizoni',
    descriptionKey: 'projects.items.poizoni.description',
    repoUrl: 'https://github.com/ivanknobel/poizoni',
    images: ['/portfolio/poizoni-page-2.svg', '/portfolio/poizoni-page-3.svg'],
    tags: ['Flutter', 'Mobile', 'Geolocalização'],
  },
];
