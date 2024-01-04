import axios from 'axios';
import { useEffect, useState } from 'react';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.styles';
import { StyledTimeLineDiv } from './TimeLine.styles';
import { Posts } from '../../dummyData';

type Props = {
  username?: any;
};

export const TimeLine = ({ username }: Props) => {
  const [posts, setPosts] = useState<any[]>([]);
  console.log(posts);

  useEffect(() => {
    const fetchUserPosts = async () => {
      const response = username
        ? await axios.get(`/posts/profile/${username}`)
        : await axios.get('/posts/timeline/6304d19040d4092261cbeea3');
      setPosts(response.data);
    };
    fetchUserPosts();
  }, [username]);

  return (
    <StyledTimeLineDiv>
      <div className='timelineWrapper'>
        <Share />
        {/* {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))} */}
        {/* ダミーデータ */}
        {Posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </StyledTimeLineDiv>
  );
}
