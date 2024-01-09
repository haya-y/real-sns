import styled from 'styled-components';

export const StyledProfileDiv = styled.div`
  .profile {
    display: flex;

    &-right {
      flex: 10.5;

      &-top {
        &-cover {
          height: 320px;
          position: relative;

          &-coverImg {
            width: 100%;
            height: 250px;
            object-fit: cover;
          }

          &-userImg {
            position: absolute;
            object-fit: cover;
            right: 0;
            left: 0;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            margin: auto;
            top: 150px;
          }
        }

        &-info {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &-name {
            font-size: 24px;
          }

          &-desc {
          }
        }
      }

      &-bottom {
        display: flex;
      }
    }
  }
`;
