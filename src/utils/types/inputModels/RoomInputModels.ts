export type CreateRoomInputModel = {
  name: string;
  abbreviation: string;
  roomCategoryIds: string[];
  roomNumber: string | null;
  floor: string | null;
  building: string | null;
};

export type UpdateRoomInputModel = {
  name: string;
  abbreviation: string;
  roomCategoryIds: string[];
  roomNumber: string | null;
  floor: string | null;
  building: string | null;
};
