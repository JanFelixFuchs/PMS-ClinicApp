export const Protocol = {
  HTTPS: 0,
} as const;

export type Protocol = (typeof Protocol)[keyof typeof Protocol];
