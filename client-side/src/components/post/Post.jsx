import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// TODO Warningが発生する
// import { format } from 'timeago.js';
import './Post.css';

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);
      setUser(response.data);
    };
    fetchUsers();
  }, [post.userId]);

  const handleLike = useCallback(() => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }, [like, setLike, isLiked]);

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <Link to={`/profile/${user.username}`}>
              <img
                src={user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'}
                alt=''
                className='postProfileImg'
              />
            </Link>
            <span className='postUserName'>{user.username}</span>
            {/* TODO Warningが発生する */}
            {/* <span className='postDate'>{format(post.createdAt)}</span> */}
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={PUBLIC_FOLDER + post.img} alt='' className='postImg' />
        </div>
        <div className='postBottom' onClick={() => handleLike()}>
          <div className='postBottomLeft'>
            <img src={PUBLIC_FOLDER + '/heart.png'} alt='likeIcon' />
            <span className='postLikeCounter'>{like}人がいいねを押しました。</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment}: コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
