import styled from 'styled-components';

export const StyledOnlineDiv = styled.div`
  .rightbarFriend {
    display: flex;
    align-items: center;
    margin-bottom: 15px;

    &-profileContainer {
      margin-right: 10px;
      position: relative;

      &-img {
        width: 40px;
        height: 40px;
        border-radius: 50px;
        object-fit: cover;
      }

      &-online {
        background-color: purple;
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        top: -2px;
        left: 0;
        border: 2px solid white;
      }
    }

    &-username {
      font-weight: 550;
    }
  }
`;
