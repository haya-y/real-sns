import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Topbar } from '../../components/topbar/Topbar';
import { useParams } from 'react-router-dom';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { User } from '../../type/User.types';
import { Users } from '../../dummyData';
import { StyledProfileDiv } from './Profile.styles';

export const Profile = () => {
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = './assets';

  const [user, setUser] = useState<User>(Users[0]);
  const username = useParams().username;
  console.log({ username });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      console.log({ response });
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  return (
    <StyledProfileDiv>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profile-right'>
          <div className='profile-right-top'>
            <div className='profile-right-top-cover'>
              <img src={user.coverPicture || PUBLIC_FOLDER + '/post/3.jpeg'} alt='' className='profile-right-top-cover-coverImg' />
              <img
                src={user.profilePicture || PUBLIC_FOLDER + '/person/noAvatar.png'}
                alt=''
                className='profile-right-top-cover-userImg'
              />
            </div>
            <div className='profile-right-top-info'>
              <h4 className='profile-right-top-info-name'>{user.username}</h4>
              <span className='profile-right-top-info-desc'>{user.desc}</span>
            </div>
          </div>
          <div className='profile-right-bottom'>
            <TimeLine username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </StyledProfileDiv>
  );
};
