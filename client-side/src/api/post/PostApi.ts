import axios from 'axios';

type UpdatedLikes = {
  /** 更新後のいいね数 */
  likeNumber: number;
  /** いいね押下済みか */
  isPushed: boolean;
};

/**
 * いいねの更新状態を取得
 * @param postId
 * @param loginUserId
 */
export const fetchLikeStatus = async (postId: string, loginUserId: string): Promise<boolean> => {
  try {
    const response = await axios.get(`/posts/${postId}/like/?userId=${loginUserId}`);
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
    const response = await axios.put(`/posts/${postId}/like`, { userId: loginUserId });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
