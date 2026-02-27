export type Experience = {
  position: string;
  company: string;
  start: string;
  end: string | null;
  descriptionKey: string;
  keyPointsKeys?: string[];
  achievementsKeys?: string[];
};

export const EXPERIENCES: Experience[] = [
  {
    position: 'Analista de Software Pleno',
    company: 'CI&T',
    start: 'Fevereiro de 2025',
    end: null,
    descriptionKey: 'experience.items.ciet.description',
    keyPointsKeys: [
      'experience.items.ciet.keyPoints.0',
      'experience.items.ciet.keyPoints.1',
      'experience.items.ciet.keyPoints.2',
    ],
    achievementsKeys: [
      'experience.items.ciet.achievements.0',
    ],
  },
  {
    position: 'Analista de Software Pleno',
    company: 'CI&T',
    start: 'Dezembro de 2023',
    end: 'Janeiro de 2025',
    descriptionKey: 'experience.items.ciet1.description',
    achievementsKeys: [
      'experience.items.ciet1.achievements.0',
      'experience.items.ciet1.achievements.1',
    ],
  },
  {
    position: 'Analista de Software Júnior',
    company: 'CI&T',
    start: 'Dezembro de 2021',
    end: 'Dezembro de 2023',
    descriptionKey: 'experience.items.ciet2.description',
    keyPointsKeys: [
      'experience.items.ciet2.keyPoints.0',
      'experience.items.ciet2.keyPoints.1',
    ],
  },
  {
    position: 'Estagiário de Desenvolvimento Frontend',
    company: 'Dextra',
    start: 'Janeiro de 2021',
    end: 'Dezembro de 2021',
    descriptionKey: 'experience.items.dextra.description',
  },
];
