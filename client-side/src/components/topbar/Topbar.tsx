import * as MUI from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledTopbarDiv } from './Topbar.styles';

export const Topbar = () => {
  return (
    <StyledTopbarDiv>
      <div className='topbarLeft'>
        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <span className='topbarLeft-log'>Real SNS</span>
        </Link>
      </div>
      <div className='topbarCenter'>
        <div className='topbarCenter-searchbar'>
          <MUI.Search className='topbarCenter-searchbar-searchIcon'></MUI.Search>
          <input type='text' className='topbarCenter-searchbar-searchInput' placeholder='探し物は何ですか？' />
        </div>
      </div>
      <div className='topbarRight'>
        <div className='topbarRight-icons'>
          <div className='topbarRight-icons-items'>
            <MUI.Chat />
            <span className='topbarRight-icons-items-badge'>10</span>
          </div>
          <div className='topbarRight-icons-items'>
            <MUI.Notifications />
            <span className='topbarRight-icons-items-badge'>20</span>
          </div>
          <img src='/assets/person/1.jpeg' alt='' />
        </div>
      </div>
    </StyledTopbarDiv>
  );
};
