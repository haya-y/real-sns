import { Users } from '../../dummyData';
import { Online } from '../online/Online';
import { StyledHomeRightbarDiv } from './HomeRightbar.styles';

export const HomeRightbar = () => {
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = '/assets';

  return (
    <StyledHomeRightbarDiv>
      <div className='homeRightbarWrapper'>
        <div className='homeRightbarWrapper-eventContainer'>
          <img src={PUBLIC_FOLDER + '/star.png'} alt='' className='homeRightbarWrapper-eventContainer-starImg' />
          <span className='homeRightbarWrapper-eventContainer-eventText'>
            <b>フォロワー限定</b>イベント開催中！
          </span>
        </div>
        <img src='assets/event.jpeg' alt='' className='homeRightbarWrapper-eventImg' />
        <h4 className='homeRightbarWrapper-title'>オンラインの友達</h4>
        <ul className='homeRightbarWrapper-friendList'>
          {Users.map((user) => (
            <Online user={user} key={user._id} />
          ))}
        </ul>
        <p className='homeRightbarWrapper-promotionTitle'>プロモーション広告</p>
        <img
          src={PUBLIC_FOLDER + '/promotion/promotion1.jpeg'}
          alt=''
          className='homeRightbarWrapper-rightbarPromotionImg'
        />
        <p className='homeRightbarWrapper-promotionName'>ショッピング</p>
        <img
          src={PUBLIC_FOLDER + '/promotion/promotion2.jpeg'}
          alt=''
          className='homeRightbarWrapper-rightbarPromotionImg'
        />
        <p className='homeRightbarWrapper-promotionName'>カーショップ</p>
        <img
          src={PUBLIC_FOLDER + '/promotion/promotion3.jpeg'}
          alt=''
          className='homeRightbarWrapper-rightbarPromotionImg'
        />
        <p className='homeRightbarWrapper-promotionName'>ABCD株式会社</p>
      </div>
    </StyledHomeRightbarDiv>
  );
};
