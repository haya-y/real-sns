import axios from 'axios';
import { User } from '../../types/User.types';

/**
 * 特定のユーザーを取得
 * @param userId
 */
export const fetchPostUser = async (userId: string): Promise<User> => {
  try {
    const response = await axios.get(`/users/?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
