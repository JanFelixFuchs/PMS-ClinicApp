export const Language = {
  en: 'en',
  de: 'de',
} as const;

export type Language = (typeof Language)[keyof typeof Language];
