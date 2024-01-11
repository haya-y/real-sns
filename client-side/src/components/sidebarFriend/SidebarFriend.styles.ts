import styled from 'styled-components';

export const StyledSidebarFriendLi = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    font-weight: bold;
    box-shadow: 0px 0px 20px -10px #78bdf2;
    .sidebarFriend-link-img {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(3px);
    transition: all 0.1s;
  }

  .sidebarFriend-link {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;

    &-img {
      width: 32px;
      height: 32px;
      object-fit: cover;
      border-radius: 50%;
      margin-right: 15px;
    }

    &-name {
    }
  }
`;
