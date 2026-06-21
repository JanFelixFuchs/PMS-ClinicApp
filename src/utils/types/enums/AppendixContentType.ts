export const AppendixContentType = {
  Pdf: 'Pdf',
  Jpeg: 'Jpeg',
  Png: 'Png',
};

export type AppendixContentType =
  (typeof AppendixContentType)[keyof typeof AppendixContentType];
