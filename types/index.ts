export type Blog = {
  id: number;
  blogTitle: string;
  blogBody: string;
  authorName: string;
  createdAt: Date;
};

export type apiResponse = {
  data: Blog[] | string;
  success: boolean;
};
