import * as MUI from '@mui/icons-material';
import React, { useCallback, useContext, useRef } from 'react';
import { CreatedPost, createPost } from '../../api/post/PostApi';
import { PUBLIC_FOLDER } from '../../constants';
import { AuthContext } from '../../redux/AuthContext';
import { StyledShareDiv } from './Share.styles';

export const Share = () => {
  const postText = useRef<HTMLInputElement>(null);
  const {
    state: { user },
  } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newPost: CreatedPost = {
        userId: user?._id ?? '',
        desc: postText.current?.value ?? '',
        // img: 'sample.png',
      };
      await createPost(newPost);
      if (postText.current) {
        postText.current.value = '';
      }
      window.location.reload();
    },
    [user?._id],
  );

  return (
    <StyledShareDiv>
      <div className='shareWrapper'>
        <div className='shareWrapper-top'>
          <img
            src={(user && user.profilePicture) || PUBLIC_FOLDER + '/person/noAvatar.png'}
            alt='profile'
            className='shareWrapper-top-profileImg'
          />
          <input type='text' className='shareWrapper-top-input' placeholder='今何してるの？' ref={postText} />
        </div>
        <hr className='shareWrapper-hr' />
        <form className='shareWrapper-buttons' onSubmit={(e) => handleSubmit(e)}>
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
          <button className='shareWrapper-buttons-postBtn' type='submit'>
            投稿
          </button>
        </form>
      </div>
    </StyledShareDiv>
  );
};
