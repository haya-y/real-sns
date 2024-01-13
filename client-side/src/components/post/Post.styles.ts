import styled from 'styled-components';

export const StyledPostDiv = styled.div`
  width: 100%;
  box-shadow: 0px 0px 20px -10px #78bdf2;
  border-radius: 14px;
  margin: 30px 0;

  .postWrapper {
    padding: 10px;

    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-left {
        display: flex;
        align-items: center;

        &-profileImg {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }

        &-userName {
          font-size: 15px;
          font-weight: 550;
          margin: 0 10px;
        }
        &-date {
          font-size: 12px;
        }
      }

      &-right {
      }
    }

    &-center {
      margin: 20px 0;

      &-text {
      }

      &-img {
        margin-top: 20px;
        width: 100%;
        max-height: 500px;
        object-fit: contain;
      }
    }

    &-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-left {
        display: flex;
        align-items: center;

        &-img {
          width: 24px;
          height: 24px;
          margin-right: 5px;
          cursor: pointer;
        }

        &-likeCounter {
          font-size: 15px;
        }
      }

      &-right {
        &-comment {
          cursor: pointer;
          border-bottom: 1px solid gray;
          font-size: 15px;
          margin-right: 3px;
        }
      }
    }
  }
`;
