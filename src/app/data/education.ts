export type EducationItem = {
  institution: string;
  courseKey: string;
  start: string;
  end?: string;
};

export const EDUCATION: EducationItem[] = [
  {
    institution: 'PUC - Pontifícia Universidade Católica',
    courseKey: 'education.items.puc.course',
    start: 'Ago/2023'
  },
  {
    institution: 'COTUCA - Colégio Técnico da Unicamp - Campinas',
    courseKey: 'education.items.cotuca.course',
    start: 'Fev/2018',
    end: 'Dez/2020'
  }
];
