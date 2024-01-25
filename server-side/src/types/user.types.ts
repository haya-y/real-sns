export interface UserSchema {
  username: string;
  email: string;
  password: string;
  profilePicture?: string;
  coverPicture?: string;
  followers?: string[];
  followings?: string[];
  isAdmin?: boolean;
  desc?: string;
  city?: string;
  createdAt: Date;
  updatedAt: Date;
}
