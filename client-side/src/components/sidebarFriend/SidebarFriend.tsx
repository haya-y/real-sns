import { PUBLIC_FOLDER } from '../../constants';
import { User } from '../../types/User.types';
import { StyledSidebarFriendLi } from './SidebarFriend.styles';

type Props = {
  user: User;
};

export const SidebarFriend = ({ user: { profilePicture, username } }: Props) => {
  return (
    <StyledSidebarFriendLi>
      <img src={PUBLIC_FOLDER + profilePicture} alt='' className='sidebarFriendImg' />
      <span className='sidebarFriendName'>{username}</span>
    </StyledSidebarFriendLi>
  );
};
