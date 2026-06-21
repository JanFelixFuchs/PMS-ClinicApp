export const InsuranceStatus = {
  Statutory: 'Statutory',
  Private: 'Private',
};

export type InsuranceStatus =
  (typeof InsuranceStatus)[keyof typeof InsuranceStatus];
