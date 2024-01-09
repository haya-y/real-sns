import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Topbar } from '../../components/topbar/Topbar';
import { Users } from '../../dummyData';
import { User } from '../../type/User.types';
import { StyledProfileDiv } from './Profile.styles';

export const Profile = () => {
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = '/assets'; // TODO 「'assets'ではなく、'/assets'でパス指定しないと画像が表示されない」

  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(Users[0]); // ダミー用
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?username=${username}`);
      console.log({ response });
      setUser(response.data);
    };
    fetchUser();
  }, [username]);

  console.log({ username });

  return (
    <StyledProfileDiv>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profile-right'>
          <div className='profile-right-top'>
            <div className='profile-right-top-cover'>
              <img
                src={user !== null ? PUBLIC_FOLDER + user.coverPicture : PUBLIC_FOLDER + '/post/3.jpeg'}
                alt='background'
                className='profile-right-top-cover-coverImg'
              />
              <img
                src={user !== null ? PUBLIC_FOLDER + user.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'}
                alt='profile'
                className='profile-right-top-cover-userImg'
              />
            </div>
            <div className='profile-right-top-info'>
              <h4 className='profile-right-top-info-name'>{user !== null && user.username}</h4>
              <span className='profile-right-top-info-desc'>{user !== null && user.desc}</span>
            </div>
          </div>
          <div className='profile-right-bottom'>
            <TimeLine username={username} />
            <Rightbar user={user} profile />
          </div>
        </div>
      </div>
    </StyledProfileDiv>
  );
};
