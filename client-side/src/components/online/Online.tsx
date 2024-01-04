import React from 'react';
import { StyledOnlineDiv } from './Online.styles';
import { User } from '../../type/User.types';

type Props = {
  user: User;
};

export default function Online({ user: { profilePicture, username } }: Props) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

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
}
