export type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  profilePicture: string;
  coverPicture: string;
  followers: string[];
  followings: string[];
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  desc: string;
};
