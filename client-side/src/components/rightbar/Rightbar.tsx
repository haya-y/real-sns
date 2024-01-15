import { memo } from 'react';
import { User } from '../../types/User.types';
import { HomeRightbar } from '../homeRightbar/HomeRightbar';
import { ProfileRightbar } from '../profileRightbar/ProfileRightbar';
import { StyledRightbarDiv } from './Rightbar.styles';

type Props = {
  user?: User;
};

export const Rightbar = memo(({ user }: Props) => {
  return (
    <StyledRightbarDiv className='rightbar'>
      <div className='rightbarWrapper'>{user ? <ProfileRightbar /> : <HomeRightbar />}</div>
    </StyledRightbarDiv>
  );
});
