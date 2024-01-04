import { HomeRightbar } from '../homeRightbar/HomeRightbar';
import { StyledRightbarDiv } from './Rightbar.styles';

type Props = {
  user?: any;
};

export const Rightbar = ({ user }: Props) => {
  return (
    <StyledRightbarDiv className='rightbar'>
      {/* <div className='rightbarWrapper'>{user ? <ProfileRightbar /> : <HomeRightbar />}</div> */}
      <div className='rightbarWrapper'>{<HomeRightbar />}</div>
      {/* <div className='rightbarWrapper'>{<ProfileRightbar />}</div> */}
    </StyledRightbarDiv>
  );
}
