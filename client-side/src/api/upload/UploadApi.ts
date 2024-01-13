import axios from 'axios';
import { CreatedPost } from '../post/PostApi';

/**
 * 画像をアップロード
 * @param
 * @returns
 */
export const uploadImage = async (file: File, newPost: CreatedPost): Promise<string> => {
  const data = new FormData();
  const fileName = Date.now() + file.name;
  data.append('name', fileName);
  data.append('file', file);
  newPost.img = fileName;
  try {
    const response = await axios.post('/upload', data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
