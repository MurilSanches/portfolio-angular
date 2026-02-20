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
    start: 'Dezembro de 2021',
    end: null,
    descriptionKey: 'experience.items.ciet.description',
    keyPointsKeys: [
      'experience.items.ciet.keyPoints.0',
      'experience.items.ciet.keyPoints.1',
      'experience.items.ciet.keyPoints.2',
    ],
    achievementsKeys: [
      'experience.items.ciet.achievements.0',
      'experience.items.ciet.achievements.1',
    ],
  },
  {
    position: 'Estagiário',
    company: 'Dextra',
    start: 'Janeiro de 2021',
    end: 'Dezembro de 2021',
    descriptionKey: 'experience.items.dextra.description',
  },
];
