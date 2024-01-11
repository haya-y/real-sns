import * as MUI from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Users } from '../../dummyData';
import { SidebarFriend } from '../sidebarFriend/SidebarFriend';
import { StyledSidebarDiv } from './Sidebar.styles';

export const Sidebar = () => {
  return (
    <StyledSidebarDiv>
      <div className='sidebarWrapper'>
        <ul className='sidebarWrapper-list'>
          <Link className='sidebarWrapper-list-link' to={'/'} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Home className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>ホーム</span>
            </li>
          </Link>
          <Link className='sidebarWrapper-list-link' to={''} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Search className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>検索</span>
            </li>
          </Link>
          <Link className='sidebarWrapper-list-link' to={''} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Notifications className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>通知</span>
            </li>
          </Link>
          <Link className='sidebarWrapper-list-link' to={''} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.MessageRounded className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>メッセージ</span>
            </li>
          </Link>
          <Link className='sidebarWrapper-list-link' to={''} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Bookmark className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>ブックマーク</span>
            </li>
          </Link>
          {/* TODO ⇩のProfileページのリンクはダミー */}
          <Link className='sidebarWrapper-list-link' to={'/profile/hayate'} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Person className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>プロフィール</span>
            </li>
          </Link>
          <Link className='sidebarWrapper-list-link' to={''} style={{}}>
            <li className='sidebarWrapper-list-link-item'>
              <MUI.Settings className='sidebarWrapper-list-link-item-icon' />
              <span className='sidebarWrapper-list-link-item-text'>設定</span>
            </li>
          </Link>
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
};
