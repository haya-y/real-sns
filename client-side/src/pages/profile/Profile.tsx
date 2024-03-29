import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchUserByName } from '../../api/user/UserApi';
import { Rightbar } from '../../components/rightbar/Rightbar';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { TimeLine } from '../../components/timeline/TimeLine';
import { Topbar } from '../../components/topbar/Topbar';
import { PUBLIC_FOLDER } from '../../constants';
import { User } from '../../types/User.types';
import { StyledProfileDiv } from './Profile.styles';

export const Profile = () => {
  const [user, setUser] = useState<User>();
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const fetchedUser = await fetchUserByName(username ?? '');
      setUser(fetchedUser);
    };
    window.scrollTo(0, 0);
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
              <img
                src={user?.coverPicture ? PUBLIC_FOLDER + user?.coverPicture : PUBLIC_FOLDER + '/event.jpeg'}
                alt='background'
                className='profile-right-top-cover-coverImg'
              />
              <img
                src={
                  user?.profilePicture ? PUBLIC_FOLDER + user?.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'
                }
                alt='profile'
                className='profile-right-top-cover-userImg'
              />
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
