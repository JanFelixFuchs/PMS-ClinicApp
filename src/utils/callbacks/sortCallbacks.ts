import type { SortingOption } from '../types/utils/SortingOption';

export const sortByNameCallback =
  <T extends { name?: string }>(sortingOption: SortingOption) =>
  (firstEntity: T, secondEntity: T): number => {
    const nameFirstEntity = firstEntity.name ?? '';
    const nameSecondEntity = secondEntity.name ?? '';

    const nameComparision = nameFirstEntity.localeCompare(nameSecondEntity);

    return sortingOption === 'asc' ? nameComparision : -nameComparision;
  };
