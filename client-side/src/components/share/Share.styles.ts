import styled from 'styled-components';

export const StyledShareDiv = styled.div`
  width: 100%;
  height: 170px;
  box-shadow: 0px 0px 20px -12px #4b4eff;
  border-radius: 14px;

  .shareWrapper {
    padding: 10px;

    &-top {
      display: flex;
      align-items: center;

      &-profileImg {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }

      &-input {
        border: none;
        width: 100%;
        /* margin-top: 10px; */

        &:focus {
          outline: none;
        }
      }
    }

    &-hr {
      margin: 20px;
    }

    &-buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;

      &-options {
        display: flex;
        margin-left: 20px;

        &-option {
          display: flex;
          align-items: center;
          margin-right: 15px;
          cursor: pointer;

          &-icon {
            margin-right: 3px;
          }

          &-text {
            font-size: 14px;
            font-weight: 550;
          }
        }
      }

      &-postBtn {
        border: none;
        padding: 6px 17px;
        background-color: #2c517c;
        border-radius: 5px;
        color: white;
        cursor: pointer;
        margin-right: 20px;
      }
    }
  }
`;
