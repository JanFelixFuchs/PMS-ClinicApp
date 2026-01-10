export const filterByNameCallback =
  <T extends { name?: string }>(filterText: string | null) =>
  (entity: T): boolean => {
    return !filterText || !entity.name
      ? true
      : entity.name.includes(filterText);
  };
