import styled from 'styled-components';

export const StyledRegisterDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;

  .registerWrapper {
    width: 70%;
    height: 70%;
    display: flex;

    &-left,
    &-right {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;

      /* registerWrapper-left */
      &-logo {
        font-size: 50px;
        font-weight: 800px;
        color: #41428b;
        margin-bottom: 10px;
      }

      &-desc {
        font-size: 24px;
      }

      /* registerWrapper-right */
      &-box {
        height: 450px;
        padding: 20px;
        background-color: white;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 20px -12px #4b4eff;
        border-radius: 14px;

        &-msg {
          text-align: center;
          font-weight: 550;
          font-size: 20px;
          margin-bottom: 10px;
        }

        &-registerInput {
          height: 50px;
          border-radius: 10px;
          border: 1px solid gray;
          font-size: 18px;
          padding-left: 20px;
          margin-bottom: 15px;

          &:focus {
            outline: none;
          }
        }

        &-signUpButton {
          height: 50px;
          border-radius: 10px;
          border: none;
          background-color: #41428b;
          color: white;
          font-size: 20px;
          font-weight: 500;
          cursor: pointer;
          margin-bottom: 30px;
        }

        &-loginButton {
          height: 50px;
          width: 60%;
          align-self: center;
          border-radius: 10px;
          border: none;
          background-color: #3c8b50;
          color: white;
          font-size: 20px;
          font-weight: 500;
          cursor: pointer;
        }
      }
    }
  }
`;
