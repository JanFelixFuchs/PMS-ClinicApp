export type CreateClinicianInputModel = {
  firstName: string;
  lastName: string;
  clinicianCategoryIds: string[];
};

export type UpdateClinicianInputModel = {
  lastName: string;
  clinicianCategoryIds: string[];
};
