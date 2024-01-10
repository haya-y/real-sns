import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.styles';
import { StyledTimeLineDiv } from './TimeLine.styles';
// import { Posts } from '../../dummyData';
import { Post as PostType } from '../../types/Post.types';

type Props = {
  userId?: string;
};

// userIdの初期値はダミー
export const TimeLine = ({ userId = '636b92b170ad98f78123f74b' }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  console.log({ posts });

  useEffect(() => {
    const fetchUserPosts = async () => {
      // const response = userId
      //   ? await axios.get(`/posts/profile/${userId}`)
      //   : await axios.get(`/posts/timeline/${userId}`);
      const response = await axios.get(`/posts/timeline/${userId}`);
      setPosts(response.data);
    };
    fetchUserPosts();
  }, [userId]);

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
