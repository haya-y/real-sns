import { Chat as MUIChat, Notifications as MUINotifications, Search as MUISearch } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledTopbarDiv } from './Topbar.styles';

export const Topbar = () => {
  return (
    <StyledTopbarDiv>
      <div className='topbarLeft'>
        <Link className='topbarLeft-link' to={'/'} style={{}}>
          <span className='topbarLeft-link-log'>Real SNS</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='topbarCenter-searchbar'>
          <MUISearch className='topbarCenter-searchbar-searchIcon'></MUISearch>
          <input type='text' className='topbarCenter-searchbar-searchInput' placeholder='探し物は何ですか？' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarRight-icons'>
          <div className='topbarRight-icons-items'>
            <MUIChat />
            <span className='topbarRight-icons-items-badge'>10</span>
          </div>
          <div className='topbarRight-icons-items'>
            <MUINotifications />
            <span className='topbarRight-icons-items-badge'>20</span>
          </div>
          <img src='/assets/person/1.jpeg' alt='' />
        </div>
      </div>
    </StyledTopbarDiv>
  );
};
