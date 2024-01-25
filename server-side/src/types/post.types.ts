export interface PostSchema {
  userId: string;
  desc?: string;
  img?: string;
  likes?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface PostPathParams {
  postId: string;
}

export interface PostQueryParams {
  userId: string;
}

export type CreateOrUpdatePostRequestBody = Required<Pick<PostSchema, 'userId' | 'desc' | 'img'>>;

export type DeletePostRequestBody = Required<Pick<PostSchema, 'userId'>>;
