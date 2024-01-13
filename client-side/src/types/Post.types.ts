export type Post = {
  /** 投稿のID */
  _id: string;
  /** 投稿をしたユーザーのID */
  userId: string;
  /** 投稿内容 */
  desc: string;
  /** 投稿画像 */
  img: string;
  /** いいね数(ユーザーIDの配列) */
  likes: string[];
  /** 投稿の作成日時 */
  createdAt: Date;
  /** 投稿の更新日時 */
  updatedAt: Date;
  /**  */
  __v: number;
};
