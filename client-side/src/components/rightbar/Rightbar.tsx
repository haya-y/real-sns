import { HomeRightbar } from '../homeRightbar/HomeRightbar';
import { ProfileRightbar } from '../profileRightbar/ProfileRightbar';
import { StyledRightbarDiv } from './Rightbar.styles';

type Props = {
  user?: any;
};

export default function Rightbar({ user }: Props) {
  return (
    <StyledRightbarDiv className='rightbar'>
      {/* <div className='rightbarWrapper'>{user ? <ProfileRightbar /> : <HomeRightbar />}</div> */}
      <div className='rightbarWrapper'>{<HomeRightbar />}</div>
      {/* <div className='rightbarWrapper'>{<ProfileRightbar />}</div> */}
    </StyledRightbarDiv>
  );
}
