import axios from 'axios';
import { User } from '../../types/User.types';
import { baseURL } from '../../constants';

/**
 * userIdから特定のユーザーを取得
 * @param userId
 * @returns 取得したUser
 */
export const fetchUserById = async (userId: string): Promise<User> => {
  try {
    const response = await axios.get(`${baseURL}/users/?userId=${userId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * usernameから特定のユーザーを取得
 * @param username
 * @returns 取得したUser
 */
export const fetchUserByName = async (username: string): Promise<User> => {
  try {
    const response = await axios.get(`${baseURL}/users/?username=${username}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
