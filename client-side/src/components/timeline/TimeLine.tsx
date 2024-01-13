import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.styles';
import { StyledTimeLineDiv } from './TimeLine.styles';
import { Post as PostType } from '../../types/Post.types';
import { AuthContext } from '../../redux/AuthContext';

type Props = {
  username?: string;
};

export const TimeLine = ({ username }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const {
    state: { user },
  } = useContext(AuthContext);

  // TODO user?._id以外のuserのプロパティが変更された場合でも、↓が実行されるかを確認する
  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`) // プロフィールの場合
        : await axios.get(`/posts/timeline/${user?._id}`); // ホームの場合
      setPosts(response.data);
    };
    fetchUserPosts();
  }, [username, user?._id]);

  return (
    <StyledTimeLineDiv>
      <div className='timelineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </StyledTimeLineDiv>
  );
};
