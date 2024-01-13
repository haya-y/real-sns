import styled from 'styled-components';

export const StyledHomeRightbarDiv = styled.div`
  .homeRightbarWrapper {
    padding: 20px 20px 0 0;

    &-eventContainer {
      display: flex;
      align-items: center;

      &-starImg {
        width: 40px;
        height: 40px;
        margin-right: 5px;
      }

      &-eventText {
        font-weight: 300;
        font-size: 15px;
      }
    }

    &-eventImg {
      width: 100%;
      border-radius: 10px;
      margin: 25px 0;
    }

    &-title {
      margin-bottom: 20px;
    }

    &-friendList {
      padding: 0;
      margin: 0;
      list-style: none;
    }

    &-promotionTitle {
      font-size: 18px;
      font-weight: 550;
      margin-bottom: -10px;
    }

    &-rightbarPromotionImg {
      width: 85%;
      border-radius: 10px;
      margin: 25px 0;
    }

    &-promotionName {
      font-size: small;
      color: rgb(79, 79, 79);
      margin-top: -20px;
    }
  }
`;
