import { memo, useContext, useEffect, useState } from 'react';
import { fetchHomeTimeLine, fetchProfileTimeLine } from '../../api/post/PostApi';
import { AuthContext } from '../../redux/AuthContext';
import { Post as PostType } from '../../types/Post.types';
import { Post } from '../post/Post';
import { Share } from '../share/Share';
import './TimeLine.styles';
import { StyledTimeLineDiv } from './TimeLine.styles';

type Props = {
  username?: string;
};

export const TimeLine = memo(({ username }: Props) => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const {
    state: { user },
  } = useContext(AuthContext);

  // TODO user?._id以外のuserのプロパティが変更された場合でも、↓が実行されるかを確認する
  useEffect(() => {
    const fetchUserPosts = async () => {
      const fetchedPosts = username ? await fetchProfileTimeLine(username) : await fetchHomeTimeLine(user?._id ?? '');
      setPosts(
        fetchedPosts.sort((post1, post2) => new Date(post2.createdAt).getTime() - new Date(post1.createdAt).getTime()),
      );
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
});
