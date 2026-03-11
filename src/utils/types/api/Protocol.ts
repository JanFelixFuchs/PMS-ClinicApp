export const Protocol = {
  HTTPS: 'https',
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];
