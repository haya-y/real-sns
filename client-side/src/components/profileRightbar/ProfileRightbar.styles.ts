import styled from 'styled-components';

export const StyledProfileRightbarDiv = styled.div`
  .rightbarUserTitle {
    margin-bottom: 20px;
  }

  .rightbarInfo {
    margin-bottom: 30px;

    &-item {
      margin-bottom: 10px;

      &-key {
        font-weight: 500;
        margin-right: 5px;
        color: #555;
      }
    }

    &-title {
      font-size: 18px;
      font-weight: 550;
      margin-bottom: 10px;
    }

    &-followings {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      &-following {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        cursor: pointer;

        &-img {
          width: 100px;
          height: 100px;
          border-radius: 5px;
          object-fit: cover;
        }

        &-name {
          margin: auto;
        }

        &:hover {
          font-weight: bold;
          transform: scale(1.05);
        }

        &:active {
          transform: scale(1);
        }
      }
    }
  }
`;
