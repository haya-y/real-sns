import React from 'react';
import Rightbar from '../../components/rightbar/Rightbar';
import Topbar from '../../components/topbar/Topbar';
import Sidebar from '../../components/sidebar/Sidebar';
import TimeLine from '../../components/timeline/TimeLine';
import { StyledHomeDiv } from './Home.styled';

export default function Home() {
  return (
    <StyledHomeDiv>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <TimeLine />
        <Rightbar />
      </div>
    </StyledHomeDiv>
  );
}
