import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.styles';
import { StyledTimeLineDiv } from './TimeLine.styles';
import { Post as PostType } from '../../types/Post.types';
// import { Posts } from '../../dummyData';

type Props = {
  userId?: string;
  username?: string;
};

// TODO userIdの初期値はダミー
export const TimeLine = ({ userId = '6304d19040d4092261cbeea3', username }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get(`/posts/timeline/${userId}`);
      setPosts(response.data);
    };
    fetchUserPosts();
    // eslint-disable-next-line
  }, []);

  return (
    <StyledTimeLineDiv>
      <div className='timelineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
        {/* ダミーデータ */}
        {/* {Posts.map((post) => (
          <Post post={post} key={post._id} />
        ))} */}
      </div>
    </StyledTimeLineDiv>
  );
};
