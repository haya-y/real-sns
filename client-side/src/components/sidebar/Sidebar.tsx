import * as MUI from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Users } from '../../dummyData';
import { SidebarFriend } from '../sidebarFriend/SidebarFriend';
import { StyledSidebarDiv } from './Sidebar.styles';

const muiClassName = 'sidebarWrapper-list-link-item-icon';

const sidebarItems = [
  { id: 1, to: '/', icon: <MUI.Home className={muiClassName} />, text: 'ホーム' },
  { id: 2, to: '', icon: <MUI.Search className={muiClassName} />, text: '検索' },
  { id: 3, to: '', icon: <MUI.Notifications className={muiClassName} />, text: '通知' },
  { id: 4, to: '', icon: <MUI.MessageRounded className={muiClassName} />, text: 'メッセージ' },
  { id: 5, to: '', icon: <MUI.Bookmark className={muiClassName} />, text: 'ブックマーク' },
  // TODO: ↓のURLはダミー
  { id: 6, to: '/profile/hayate', icon: <MUI.Person className={muiClassName} />, text: 'プロフィール' },
  { id: 7, to: '', icon: <MUI.Settings className={muiClassName} />, text: '設定' },
];

export const Sidebar = () => {
  return (
    <StyledSidebarDiv>
      <div className='sidebarWrapper'>
        <ul className='sidebarWrapper-list'>
          {sidebarItems.map(({ id, to, icon, text }) => (
            <Link className='sidebarWrapper-list-link' to={to} key={id}>
              <li className='sidebarWrapper-list-link-item'>
                {icon}
                <span className='sidebarWrapper-list-link-item-text'>{text}</span>
              </li>
            </Link>
          ))}
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
