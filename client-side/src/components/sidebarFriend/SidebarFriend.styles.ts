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
    .sidebarFriendImg {
      transform: scale(1.1);
    }
  }

  &:active {
    transform: translateY(3px);
    transition: all 0.1s;
  }

  .sidebarFriendImg {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
    margin-right: 15px;
  }

  .sidebarFriendName {
  }
`;
