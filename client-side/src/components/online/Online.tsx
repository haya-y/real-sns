import { memo } from 'react';
import { PUBLIC_FOLDER } from '../../constants/index';
import { User } from '../../types/User.types';
import { StyledOnlineDiv } from './Online.styles';

type Props = {
  user: User;
};

export const Online = memo(({ user: { profilePicture, username } }: Props) => {
  return (
    <StyledOnlineDiv>
      <li className='rightbarFriend'>
        <div className='rightbarFriend-profileContainer'>
          <img src={PUBLIC_FOLDER + profilePicture} alt='' className='rightbarFriend-profileContainer-img' />
          <span className='rightbarFriend-profileContainer-online'></span>
        </div>
        <span className='rightbarFriend-username'>{username}</span>
      </li>
    </StyledOnlineDiv>
  );
});
