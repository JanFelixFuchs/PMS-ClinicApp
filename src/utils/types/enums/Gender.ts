export const Gender = {
  Male: 'Male',
  Female: 'Female',
  Diverse: 'Diverse',
};

export type Gender = (typeof Gender)[keyof typeof Gender];
