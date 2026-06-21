export type CreateUserInputModel = {
  username: string;
  password: string;
  roleId: string;
  clinicianId: string;
};

export type UpdateUserInputModel = {
  roleId: string;
};
