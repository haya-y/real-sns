import axios from 'axios';
import { User } from '../../types/User.types';
import { baseURL } from './../../constants/index';

export type LoginCredentials = { email: string; password: string };

export type RegisterCredentials = { username: string; email: string; password: string };

/**
 * ログイン認証
 * @param loginCredentials 登録済みのユーザーのメールアドレスとパスワード
 * @returns ログインしたユーザー情報
 */
export const authorizeLogin = async (loginCredentials: LoginCredentials): Promise<User> => {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, loginCredentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * ユーザー新規登録認証
 * @param registerCredentials 登録しているユーザーのメールアドレスとパスワード
 * @returns 新規登録したユーザー情報
 */
export const registerNewUser = async (registerCredentials: RegisterCredentials): Promise<User> => {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, registerCredentials);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
