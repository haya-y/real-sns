import React from 'react';
import { StyledOnlineDiv } from './Online.styles';

type Props = {
  user: any
}

export default function Online({ user }: Props) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <StyledOnlineDiv>
      <li className='rightbarFriend'>
        <div className='rightbarFriend-profileContainer'>
          <img src={PUBLIC_FOLDER + user.profilePicture} alt='' className='rightbarFriend-profileContainer-img' />
          <span className='rightbarFriend-profileContainer-online'></span>
        </div>
        <span className='rightbarFriend-username'>{user.username}</span>
      </li>
    </StyledOnlineDiv>
  );
}
