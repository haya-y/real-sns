import styled from 'styled-components';

export const StyledSidebarDiv = styled.div`
  flex: 2.5;
  height: 100vh;

  .sidebarWrapper {
    padding: 20px;

    &-list {
      padding: 0;
      margin: 0;
      list-style: none;

      &-item {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 4px 6px;
        cursor: pointer;
        box-shadow: 0px 0px 20px -10px #78bdf2;
        border-radius: 14px;

        &:hover {
          box-shadow: none;
          font-weight: bold;
        }

        &:active {
          transform: translateY(3px);
          transition: all 0.1s;
        }

        &-icon {
          font-size: 35px !important;
          margin-right: 10px;

          &-text {
            font-size: 20px;
            padding-top: 3px;
          }
        }
      }
    }
    &-line {
      margin: 20px 0;
    }

    &-friendList {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }
`;
