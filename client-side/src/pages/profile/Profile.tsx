import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Topbar } from '../../components/topbar/Topbar';
// import { Users } from '../../dummyData';
import { User } from '../../types/User.types';
import { StyledProfileDiv } from './Profile.styles';

export const Profile = () => {
  const [user, setUser] = useState<User>();
  // const [user, setUser] = useState<User | null>(Users[0]); // ダミー用
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users/?username=${username}`);
      // console.log('ProfileのURLのusernameから取得したユーザー情報:');
      // console.log(response.data);
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
              <img src={user ? user.coverPicture : ''} alt='background' className='profile-right-top-cover-coverImg' />
              <img src={user ? user.profilePicture : ''} alt='profile' className='profile-right-top-cover-userImg' />
            </div>
            <div className='profile-right-top-info'>
              <h4 className='profile-right-top-info-name'>{user && user.username}</h4>
              <span className='profile-right-top-info-desc'>{user && user.desc}</span>
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
