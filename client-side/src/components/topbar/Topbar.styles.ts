import styled from 'styled-components';

export const StyledTopbarDiv = styled.div`
  background-color: #2c517c;
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;

  .topbarLeft {
    flex: 3;

    &-link {
      text-decoration: none;

      &-log {
        font-size: 24px;
        color: white;
        font-weight: 700;
        margin-left: 20px;
      }
    }
  }

  .topbarCenter {
    flex: 5;

    &-searchbar {
      width: 100%;
      height: 30px;
      background-color: white;
      border-radius: 25px;
      display: flex;
      align-items: center;

      &-searchIcon {
        font-size: 20px !important;
        margin-left: 10px;
        margin-right: 5px;
      }

      &-searchInput {
        border: none;
        width: 80%;
        &:focus {
          outline: none;
        }
      }
    }
  }

  .topbarRight {
    flex: 4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: white;

    &-icons {
      display: flex;
      align-items: center;

      &-items {
        margin-right: 15px;
        cursor: pointer;
        position: relative;
        margin-top: 5px;

        &-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background-color: #db6ab9;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }

        &-profile {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          object-fit: cover;
        }
      }
    }
  }

  .topbarRightEnd {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    margin-right: 25px;

    &-logoutBtn {
      width: 90px;
      height: 30px;
      background-color: #d40202;
      color: #f5f5f5;
      border: none;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 600;
      cursor: pointer;

      &:hover {
        background-color: #ab0202;
      }

      &:active {
        background-color: #a10202;
      }
    }
  }
`;
