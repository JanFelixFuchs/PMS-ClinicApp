export const MedicalField = {
  GeneralMedicine: 'GeneralMedicine',
  InternalMedicine: 'InternalMedicine',
  Surgery: 'Surgery',
  Orthopedics: 'Orthopedics',
  Ophthalmology: 'Ophthalmology',
  Otorhinolaryngology: 'Otorhinolaryngology',
  Dermatology: 'Dermatology',
  Urology: 'Urology',
  Cardiology: 'Cardiology',
  Gynecology: 'Gynecology',
  Pediatrics: 'Pediatrics',
  Psychiatry: 'Psychiatry',
  Psychology: 'Psychology',
  Neurology: 'Neurology',
  Anesthesiology: 'Anesthesiology',
  Oncology: 'Oncology',
  SportsMedicine: 'SportsMedicine',
  EmergencyMedicine: 'EmergencyMedicine',
};

export type MedicalField = (typeof MedicalField)[keyof typeof MedicalField];
