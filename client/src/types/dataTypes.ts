export type AppealState = {
  data: AppealType[];
  currentAppeal: AppealType | null;
  sorted: {
    date: boolean | null;
    type: boolean | null;
  };
};

export type AppealType = {
  id: number | undefined;
  authorName: string;
  description: string;
  date: Date;
  status: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
};

export type AddAppealType = {
  authorName: string;
  description: string;
  date: string;
  status: string;
  type: string;
};

// export type EditDataType = {
//   authorName: string;
//   description: string;
//   date: string;
//   status: string;
//   type: string;
// };
