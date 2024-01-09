import * as MUI from '@mui/icons-material';
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { StyledShareDiv } from './Share.styles';

type Props = {
  username?: any;
};

export const Share = ({ username }: Props) => {
  // const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const PUBLIC_FOLDER = '/assets';

  const [postText, setPostText] = useState('');

  const onClickPostBtn = useCallback(async () => {
    axios
      .post('/posts', {
        userId: '6304d19040d4092261cbeea3',
        desc: postText,
        img: 'sample.png',
      })
      .then(() => setPostText(''));
  }, [postText]);

  const onChangePostText = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPostText(e.target.value);
      console.log(postText);
    },
    [postText],
  );

  return (
    <StyledShareDiv>
      <div className='shareWrapper'>
        <div className='shareWrapper-top'>
          <img src={PUBLIC_FOLDER + '/person/noAvatar.png'} alt='' className='shareWrapper-top-profileImg' />
          <input
            type='text'
            className='shareWrapper-top-input'
            placeholder='今何してるの？'
            onChange={(e) => onChangePostText(e)}
          />
        </div>
        <hr className='shareWrapper-hr' />
        <div className='shareWrapper-buttons'>
          <div className='shareWrapper-buttons-options'>
            <div className='shareWrapper-buttons-options-option'>
              <MUI.Image className='shareWrapper-buttons-options-option-icon' htmlColor='blue' />
              <span className='shareWrapper-buttons-options-option-text'>写真</span>
            </div>
            <div className='shareWrapper-buttons-options-option'>
              <MUI.Gif className='shareWrapper-buttons-options-option-icon' htmlColor='hotpink' />
              <span className='shareWrapper-buttons-options-option-text'>GIF</span>
            </div>
            <div className='shareWrapper-buttons-options-option'>
              <MUI.Face className='shareWrapper-buttons-options-option-icon' htmlColor='green' />
              <span className='shareWrapper-buttons-options-option-text'>気持ち</span>
            </div>
            <div className='shareWrapper-buttons-options-option'>
              <MUI.Analytics className='shareWrapper-buttons-options-option-icon' htmlColor='red' />
              <span className='shareWrapper-buttons-options-option-text'>投票</span>
            </div>
          </div>
          <button className='shareWrapper-buttons-postBtn' onClick={onClickPostBtn}>
            投稿
          </button>
        </div>
      </div>
    </StyledShareDiv>
  );
};
