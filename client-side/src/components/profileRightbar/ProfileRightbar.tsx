import { memo } from 'react';
import { PUBLIC_FOLDER } from '../../constants';
import { StyledProfileRightbarDiv } from './ProfileRightbar.styles';

export const ProfileRightbar = memo(() => {
  return (
    <StyledProfileRightbarDiv>
      <h4 className='rightbarUserTitle'>ユーザー情報</h4>
      <div className='rightbarInfo'>
        <div className='rightbarInfo-item'>
          {/* TODO ⇩はダミー */}
          <span className='rightbarInfo-item-key'>出身: </span>
          <span className='rightbarInfo-item-key'>福岡</span>
        </div>
        <h4 className='rightbarInfo-title'>あなたの友達</h4>
        <div className='rightbarInfo-followings'>
          {/* TODO ⇩はダミー */}
          <div className='rightbarInfo-followings-following'>
            <img src={PUBLIC_FOLDER + '/person/1.jpeg'} alt='' className='rightbarInfo-followings-following-img' />
            <span className='rightbarInfo-followings-following-name'>Ken</span>
          </div>
          <div className='rightbarInfo-followings-following'>
            <img src={PUBLIC_FOLDER + '/person/2.jpeg'} alt='' className='rightbarInfo-followings-following-img' />
            <span className='rightbarInfo-followings-following-name'>Yamaki</span>
          </div>
          <div className='rightbarInfo-followings-following'>
            <img src={PUBLIC_FOLDER + '/person/3.jpeg'} alt='' className='rightbarInfo-followings-following-img' />
            <span className='rightbarInfo-followings-following-name'>Koga</span>
          </div>
          <div className='rightbarInfo-followings-following'>
            <img src={PUBLIC_FOLDER + '/person/4.jpeg'} alt='' className='rightbarInfo-followings-following-img' />
            <span className='rightbarInfo-followings-following-name'>Matukubo</span>
          </div>
          <div className='rightbarInfo-followings-following'>
            <img src={PUBLIC_FOLDER + '/person/5.jpeg'} alt='' className='rightbarInfo-followings-following-img' />
            <span className='rightbarInfo-followings-following-name'>Kikukawa</span>
          </div>
        </div>
      </div>
    </StyledProfileRightbarDiv>
  );
});
