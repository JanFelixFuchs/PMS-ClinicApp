export const ClaimValue = {
  None: 'None',
  Read: 'Read',
  Create: 'Create',
  Update: 'Update',
  Archive: 'Archive',
  Delete: 'Delete',
};

export type ClaimValue = (typeof ClaimValue)[keyof typeof ClaimValue];
