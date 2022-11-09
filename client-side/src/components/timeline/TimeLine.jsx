import React, { useEffect, useState } from 'react';
import Post from '../post/Post';
import Share from '../share/Share';
import './TimeLine.css';
import { Posts } from '../../dummyData';
import axios from 'axios';

export default function TimeLine() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('/posts/timeline/6304d19040d4092261cbeea3');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className='timeline'>
      <div className='timelineWrapper'>
        <Share />
        {posts.map((post) => (
          <Post post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}
