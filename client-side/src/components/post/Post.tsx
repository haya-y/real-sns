import { MoreVert as MUIMoreVert } from '@mui/icons-material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js'; // .envで「GENERATE_SOURCEMAP=false」を書けばWarningが消える
import { PUBLIC_FOLDER } from '../../constants';
import { Post as PostType } from '../../types/Post.types';
import { StyledPostDiv } from './Post.styles';
// import { Users } from '../../dummyData';
import { User } from '../../types/User.types';

type Props = {
  post: PostType;
};

export const Post = ({ post: { likes, userId, desc, img, createdAt } }: Props) => {
  const [like, setLike] = useState(likes.length);
  const [pushLike, setPushLike] = useState(false);
  // const [user, setUser] = useState<User | undefined>(Users.find((user) => user._id === userId)); // ダミー用
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users/?userId=${userId}`);
      setUser(response.data);
    };
    fetchUsers();
    // eslint-disable-next-line
  }, []);

  const handleLike = useCallback(() => {
    setLike((prev) => (!pushLike ? prev + 1 : prev - 1));
    setPushLike((prev) => !prev);
  }, [pushLike]);

  return (
    <StyledPostDiv>
      <div className='postWrapper'>
        <div className='postWrapper-top'>
          <div className='postWrapper-top-left'>
            <Link to={`/profile/${user && user.username}`}>
              <img
                src={(user && user.profilePicture) || PUBLIC_FOLDER + '/person/noAvatar.png'}
                alt='post'
                className='postWrapper-top-left-profileImg'
              />
            </Link>
            <span className='postWrapper-top-left-userName'>{user && user.username}</span>
            <span className='postWrapper-top-left-date'>{format(createdAt)}</span>
          </div>
          <div className='postWrapper-top-right'>
            <MUIMoreVert />
          </div>
        </div>
        <div className='postWrapper-center'>
          <span className='postWrapper-center-text'>{desc}</span>
          <img src={PUBLIC_FOLDER + img} alt='' className='postWrapper-center-img' />
        </div>
        <div className='postWrapper-bottom' onClick={() => handleLike()}>
          <div className='postWrapper-bottom-left'>
            <img className='postWrapper-bottom-left-img' src={PUBLIC_FOLDER + '/heart.png'} alt='likeIcon' />
            <span className='postWrapper-bottom-left-likeCounter'>{like}人がいいねを押しました。</span>
          </div>
          <div className='postWrapper-bottom-right'>
            <span className='postWrapper-bottom-right-comment'>{10}: コメント</span>
          </div>
        </div>
      </div>
    </StyledPostDiv>
  );
};
