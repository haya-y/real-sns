import axios from 'axios';
import { Post } from '../../types/Post.types';
import { baseURL } from '../../constants';

/** いいね更新後の返却値の型 */
type UpdatedLikes = {
  /** 更新後のいいね数 */
  likeNumber: number;
  /** いいね押下済みか */
  isPushed: boolean;
};

/** 投稿ボックスから入力される値の型 */
export type CreatedPost = Pick<Post, 'userId' | 'desc' | 'img'>;

/**
 * いいねの更新状態を取得
 * @param postId
 * @param loginUserId
 */
export const fetchLikeStatus = async (postId: string, loginUserId: string): Promise<boolean> => {
  try {
    const response = await axios.get(`${baseURL}/posts/${postId}/like/?userId=${loginUserId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * いいねの更新処理
 * @param postId
 * @param loginUserId
 */
export const fetchLikes = async (postId: string, loginUserId: string): Promise<UpdatedLikes> => {
  try {
    const response = await axios.put(`${baseURL}/posts/${postId}/like`, { userId: loginUserId });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * タイムラインの新しい投稿を作成
 * @param newPost 新しい投稿内容
 * @returns 作成された投稿のデータ
 */
export const createPost = async (newPost: CreatedPost): Promise<Post> => {
  try {
    const response = await axios.post(`${baseURL}/posts`, newPost);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * プロフィールのタイムラインを取得
 * @param username プロフィールのユーザーの名前
 * @returns
 */
export const fetchProfileTimeLine = async (username: string): Promise<Post[]> => {
  try {
    const response = await axios.get(`${baseURL}/posts/profile/${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * ホームのタイムラインを取得
 * @param userId ログインしているユーザーのID
 * @returns
 */
export const fetchHomeTimeLine = async (userId: string): Promise<Post[]> => {
  try {
    const response = await axios.get(`${baseURL}/posts/timeline/${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
