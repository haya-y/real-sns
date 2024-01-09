import { HomeRightbar } from '../homeRightbar/HomeRightbar';
import { ProfileRightbar } from '../profileRightbar/ProfileRightbar';
import { StyledRightbarDiv } from './Rightbar.styles';

type Props = {
  user?: any;
  profile?: boolean;
};

export const Rightbar = ({ user, profile }: Props) => {
  return (
    <StyledRightbarDiv className='rightbar'>
      <div className='rightbarWrapper'>{profile ? <ProfileRightbar /> : <HomeRightbar />}</div>
    </StyledRightbarDiv>
  );
};
