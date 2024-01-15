import * as MUI from '@mui/icons-material';
import { memo, useCallback, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PUBLIC_FOLDER } from '../../constants';
import { AuthContext } from '../../redux/AuthContext';
import { StyledTopbarDiv } from './Topbar.styles';
import { LOGOUT } from '../../redux/types/AuthTypes';

export const Topbar = memo(() => {
  const {
    state: { user },
    dispatch,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.clear();
    dispatch({ type: LOGOUT });
    navigate('/login');
    // eslint-disable-next-line
  }, []);

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
                className='topbarRight-icons-items-profile'
                src={
                  user?.profilePicture ? PUBLIC_FOLDER + user?.profilePicture : PUBLIC_FOLDER + '/person/noAvatar.png'
                }
                alt='profile'
              />
            </Link>
          </div>
        </div>
      </div>
      <div className='topbarRightEnd'>
        <button className='topbarRightEnd-logoutBtn' onClick={handleLogout}>
          ログアウト
        </button>
      </div>
    </StyledTopbarDiv>
  );
});
