import React from 'react';
import { StyledCloseFriendLi } from './CloseFriend.styles';

type Props = {
  user: any
}

export default function CloseFriend({ user }: Props) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <StyledCloseFriendLi>
      <img src={PUBLIC_FOLDER + user.profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFriendName'>{user.username}</span>
    </StyledCloseFriendLi>
  );
}
