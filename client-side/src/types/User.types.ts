export type User = {
  /** ユーザーのID */
  _id: string;
  /** ユーザー名 */
  username: string;
  /** ユーザーのメールアドレス */
  email: string;
  /** ユーザーのパスワード */
  password: string;
  /** ユーザーのプロフィール画像 */
  profilePicture: string;
  /** ユーザープロフィールのバックグラウンド画像 */
  coverPicture: string;
  /** ユーザーをフォローした人 */
  followers: string[];
  /** ユーザーがフォローした人 */
  followings: string[];
  /** 管理者か否か */
  isAdmin: boolean;
  /** ユーザーの登録日時 */
  createdAt: Date;
  /** ユーザーの更新日時 */
  updatedAt: Date;
  /**  */
  __v: number;
  /** ユーザープロフィールの説明書き */
  desc: string;
};
