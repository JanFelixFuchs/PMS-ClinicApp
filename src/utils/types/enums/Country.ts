export const Country = {
  De: 'De',
  Fi: 'Fi',
};

export type Country = (typeof Country)[keyof typeof Country];
