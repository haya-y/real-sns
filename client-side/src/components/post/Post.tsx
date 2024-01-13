import { MoreVert as MUIMoreVert } from '@mui/icons-material';
import { useCallback, useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// timeago.jsは、.envで「GENERATE_SOURCEMAP=false」を書けばWarningが消える
import { format } from 'timeago.js';
import { fetchLikeStatus, fetchLikes } from '../../api/post/PostApi';
import { fetchUserById } from '../../api/user/UserApi';
import { PUBLIC_FOLDER } from '../../constants';
import { AuthContext } from '../../redux/AuthContext';
import { Post as PostType } from '../../types/Post.types';
import { User } from '../../types/User.types';
import { StyledPostDiv } from './Post.styles';

type Props = {
  post: PostType;
};

export const Post = ({ post: { _id: postId, likes, userId, desc, img, createdAt } }: Props) => {
  /** 投稿のいいね数 */
  const [likeNumber, setLikeNumber] = useState(likes.length);
  /** 既にいいねしたかどうか */
  const [pushLike, setPushLike] = useState(false);
  /** 投稿をしたユーザー */
  const [user, setUser] = useState<User | null>(null);
  /** 現在ログインをしているユーザー */
  const {
    state: { user: loginUser },
  } = useContext(AuthContext);

  useEffect(() => {
    /** 投稿したユーザー情報の取得 */
    const updatePostUser = async () => {
      const postUser = await fetchUserById(userId);
      setUser(postUser);
    };
    /** いいねが既に押下済みかを確認 */
    const updateLikeStatus = async () => {
      const likeStatus = await fetchLikeStatus(postId, loginUser?._id ?? '');
      setPushLike(likeStatus);
    };
    updatePostUser();
    updateLikeStatus();
    // eslint-disable-next-line
  }, []);

  /** いいねの操作 */
  const handleLike = useCallback(async () => {
    const { likeNumber, isPushed } = await fetchLikes(postId, loginUser?._id ?? '');
    setLikeNumber(likeNumber);
    setPushLike(isPushed);
  }, [postId, loginUser]);

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
            <img
              className='postWrapper-bottom-left-img'
              src={PUBLIC_FOLDER + '/heart.png'}
              alt='likeIcon'
              style={{ opacity: pushLike ? '0.5' : '1' }}
            />
            <span className='postWrapper-bottom-left-likeCounter'>{likeNumber}人がいいねを押しました。</span>
          </div>
          <div className='postWrapper-bottom-right'>
            <span className='postWrapper-bottom-right-comment'>{0}: コメント</span>
          </div>
        </div>
      </div>
    </StyledPostDiv>
  );
};
