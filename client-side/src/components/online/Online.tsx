import React from 'react';

type Props = {
  user: any
}

export default function Online({ user }: Props) {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  
  return (
    <div>
      <li className='rightbarFriend'>
        <div className='rightbarProfileImgContainer'>
          <img src={PUBLIC_FOLDER + user.profilePicture} alt='' className='rightbarProfileImg' />
          <span className='rightbarOnline'></span>
        </div>
        <span className='rightbarUsername'>{user.username}</span>
      </li>
    </div>
  );
}
