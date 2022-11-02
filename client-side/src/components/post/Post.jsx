import React from 'react';
import './Post.css';
import { MoreVert } from '@mui/icons-material';
import { Users } from '../../dummyData';

export default function Post({ post }) {
  return (
    <div className='post'>
      <div className='postWrapper'>
        <div className='postTop'>
          <div className='postTopLeft'>
            <img src={Users.find((user) => user.id === post.id).profilePicture} alt='' className='postProfileImg' />
            <span className='postUserName'>{Users.find((user) => user.id === post.id).username}</span>
            <span className='postDate'>{post.date}</span>
          </div>
          <div className='postTopRight'>
            <MoreVert />
          </div>
        </div>
        <div className='postCenter'>
          <span className='postText'>{post.desc}</span>
          <img src={post.photo} alt='' className='postImg' />
        </div>
        <div className='postBottom'>
          <div className='postBottomLeft'>
            <img src='./assets/heart.png' alt='likeIcon' />
            <span className='postLikeCounter'>{post.like}人がいいねを押しました。</span>
          </div>
          <div className='postBottomRight'>
            <span className='postCommentText'>{post.comment}: コメント</span>
          </div>
        </div>
      </div>
    </div>
  );
}
