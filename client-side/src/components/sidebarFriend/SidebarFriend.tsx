import React from 'react';
import { User } from '../../type/User.types';
import { StyledSidebarFriendLi } from './SidebarFriend.styles';

type Props = {
  user: User;
};

export const SidebarFriend = ({ user: { profilePicture, username } }: Props) => {
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = '/assets';

  return (
    <StyledSidebarFriendLi>
      <img src={PUBLIC_FOLDER + profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFriendName'>{username}</span>
    </StyledSidebarFriendLi>
  );
};
