import { memo } from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_FOLDER } from '../../constants';
import { User } from '../../types/User.types';
import { StyledSidebarFriendLi } from './SidebarFriend.styles';

type Props = {
  user: User;
};

export const SidebarFriend = memo(({ user: { profilePicture, username } }: Props) => {
  return (
    <StyledSidebarFriendLi>
      <Link className='sidebarFriend-link' to={`/profile/${username}`}>
        <img src={IMAGE_FOLDER + profilePicture} alt='profile' className='sidebarFriend-link-img' />
        <span className='sidebarFriend-link-name'>{username}</span>
      </Link>
    </StyledSidebarFriendLi>
  );
});
