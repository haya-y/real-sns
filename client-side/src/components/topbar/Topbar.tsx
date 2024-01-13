import * as MUI from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { StyledTopbarDiv } from './Topbar.styles';
import { useContext } from 'react';
import { AuthContext } from '../../redux/AuthContext';
import { PUBLIC_FOLDER } from '../../constants';

export const Topbar = () => {
  const {
    state: { user },
  } = useContext(AuthContext);

  return (
    <StyledTopbarDiv>
      <div className='topbarLeft'>
        <Link className='topbarLeft-link' to={'/'} style={{}}>
          <span className='topbarLeft-link-log'>Real SNS</span>
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
          <div className='topbarRight-icons-items'>
            <Link to={`/profile/${user?.username}`}>
              <img
                src={
                  user?.profilePicture ? PUBLIC_FOLDER + user?.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'
                }
                alt='profile'
              />
            </Link>
          </div>
        </div>
      </div>
    </StyledTopbarDiv>
  );
};
