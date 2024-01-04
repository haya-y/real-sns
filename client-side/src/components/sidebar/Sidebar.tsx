import * as MUI from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Users } from '../../dummyData';
import SidebarFriend from '../sidebarFriend/SidebarFriend';
import { StyledSidebarDiv } from './Sidebar.styles';

export default function Sidebar() {
  return (
    <StyledSidebarDiv>
      <div className='sidebarWrapper'>
        <ul className='sidebarWrapper-list'>
          <li className='sidebarWrapper-list-item'>
            <MUI.Home className='sidebarWrapper-list-item-icon' />
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <span className='sidebarWrapper-list-item-icon-text'>ホーム</span>
            </Link>
          </li>
          <li className='sidebarWrapper-list-item'>
            <MUI.Search className='sidebarWrapper-list-item-icon' />
            <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}>
              <span className='sidebarWrapper-list-item-icon-text'>検索</span>
            </Link>
          </li>
          <li className='sidebarWrapper-list-item'>
            <MUI.Notifications className='sidebarWrapper-list-item-icon' />
            <span className='sidebarWrapper-list-item-icon-text'>通知</span>
          </li>
          <li className='sidebarWrapper-list-item'>
            <MUI.MessageRounded className='sidebarWrapper-list-item-icon' />
            <span className='sidebarWrapper-list-item-icon-text'>メッセージ</span>
          </li>
          <li className='sidebarWrapper-list-item'>
            <MUI.Bookmark className='sidebarWrapper-list-item-icon' />
            <span className='sidebarWrapper-list-item-icon-text'>ブックマーク</span>
          </li>
          <Link to={'/profile/hayate'} style={{ textDecoration: 'none', color: 'black' }}>
            <li className='sidebarWrapper-list-item'>
              <MUI.Person className='sidebarWrapper-list-item-icon' />
              <span className='sidebarWrapper-list-item-icon-text'>プロフィール</span>
            </li>
          </Link>
          <li className='sidebarWrapper-list-item'>
            <MUI.Settings className='sidebarWrapper-list-item-icon' />
            <span className='sidebarWrapper-list-item-icon-text'>設定</span>
          </li>
        </ul>
        <hr className='sidebarWrapper-line' />
        <ul className='sidebarWrapper-friendList'>
          {Users.map((user) => (
            <SidebarFriend user={user} key={user._id} />
          ))}
        </ul>
      </div>
    </StyledSidebarDiv>
  );
}
