import type pages from '../../pages/pages';

type FilterPages<T, Condition> = {
  [K in keyof T]: T[K] extends Condition ? K : never;
}[keyof T];

export type ProtectedPage = FilterPages<typeof pages, { isProtected: true }>;

export type UnprotectedPage = FilterPages<typeof pages, { isProtected: false }>;

export type OverviewPageUsingTemplate = FilterPages<
  typeof pages,
  { isOverviewPage: true; isUsingTemplate: true }
>;
export type DetailsPageUsingTemplate = FilterPages<
  typeof pages,
  { isOverviewPage: false; isUsingTemplate: true }
>;
