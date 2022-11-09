import React, { useCallback, useEffect, useState } from 'react';
import './Post.css';
import { MoreVert } from '@mui/icons-material';
import axios from 'axios';
import { format, render, cancel, register } from 'timeago.js';

export default function Post({ post }) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [users, setUsers] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      console.log({ response });
      setUsers(response.data);
    };
    fetchUsers();
  }, []);

  const handleLike = useCallback(() => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  }, [like, setLike, isLiked]);

  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img
              src={users.profilePicture || PUBLIC_FOLDER + "/person/noAvatar.png"}
              alt=''
              className='postProfileImg'
            />
            <span className='postUserName'>{users.username}</span>
            <span className='postDate'>{format(post.createdAt)}</span>
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
