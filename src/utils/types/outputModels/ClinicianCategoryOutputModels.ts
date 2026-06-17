import type { ClinicianOverviewOutputModel } from './ClinicianOutputModels';

export type ClinicianCategoryOverviewOutputModel = {
  id: string;
  name: string;
  abbreviation: string;
  color: string;
};

export type ClinicianCategoryDetailedOutputModel =
  ClinicianCategoryOverviewOutputModel & {
    clinicians: ClinicianOverviewOutputModel[];
  };
