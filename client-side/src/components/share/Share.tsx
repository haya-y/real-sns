import React, { useCallback, useState } from 'react';
import './Share.css';
import { Analytics, Face, Gif, Image } from '@mui/icons-material';
import axios from 'axios';

type Props = {
  username?: any
}

export default function Share({ username }: Props) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

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
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img src={PUBLIC_FOLDER + '/person/noAvatar.png'} alt='' className='shareProfileImg' />
          <input
            type='text'
            name=''
            id=''
            className='shareInput'
            placeholder='今何してるの？'
            onChange={(e) => onChangePostText(e)}
          />
        </div>
        <hr className='shareHr' />
        <div className='shareButtons'>
          <div className='shareOption'>
            <Image className='shareIcon' htmlColor='blue' />
            <span className='shareOptionText'>写真</span>
          </div>
          <div className='shareOption'>
            <Gif className='shareIcon' htmlColor='hotpink' />
            <span className='shareOptionText'>GIF</span>
          </div>
          <div className='shareOption'>
            <Face className='shareIcon' htmlColor='green' />
            <span className='shareOptionText'>気持ち</span>
          </div>
          <div className='shareOption'>
            <Analytics className='shareIcon' htmlColor='red' />
            <span className='shareOptionText'>投票</span>
          </div>
          <button className='shareButton' onClick={onClickPostBtn}>
            投稿
          </button>
        </div>
      </div>
    </div>
  );
}
