import { MoreVert as MUIMoreVert } from '@mui/icons-material';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Post as PostType } from '../../type/Post.types';
import { StyledPostDiv } from './Post.styles';
// TODO Warningが発生する
// import { format } from 'timeago.js';

type Props = {
  post: PostType;
};

export default function Post(props: Props) {
  const {
    post: { likes, userId, desc, img, createdAt },
  } = props;

  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = './assets';

  const [like, setLike] = useState(likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users?userId=${userId}`);
      setUser(response.data);
    };
    fetchUsers();
  }, [userId]);

  const handleLike = useCallback(() => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }, [like, setLike, isLiked]);

  return (
    <StyledPostDiv>
      <div className='postWrapper'>
        <div className='postWrapper-top'>
          <div className='postWrapper-top-left'>
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'}
                alt=''
                className='postWrapper-top-left-profileImg'
              />
            </Link>
            <span className='postWrapper-top-left-userName'>{user.username}</span>
            {/* TODO FormatでWarningが発生する */}
            {/* <span className='postWrapper-top-left-date'>{format(post.createdAt)}</span> */}
            <span className='postWrapper-top-left-date'>{String(createdAt)}</span>
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
}
