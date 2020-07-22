import styled, { keyframes } from "styled-components";
import { bounce } from "react-animations";
const bounceAnimation = keyframes`${bounce}`;

const CardWrapper = styled.div`
  position: relative;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 2px 4px 0px;
  border-radius: 2px;
  background: #fff;
  transition: all 0.2s ease-in-out 0s;
  margin-bottom: 20px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  &.active {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
    animation: 1s ${bounceAnimation};
  }

  .content {
    flex: 1 1 auto;
    position: relative;

    .active {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
      animation: 1s ${bounceAnimation};
    }

    .priceContent {
      position: absolute;
      display: block;
      top: 0px;
      left: 0px;
      width: 111px;
      height: 35px;
      background-color: rgb(255, 255, 255);
      z-index: 11;
      border-radius: 2px 0px 0px;
      padding: 8px 9px;
      line-height: 16px;

      span {
        color: rgb(255, 21, 85);
        font-size: 16px;
        font-weight: bold;
      }
      svg {
        font-size: 16px;
        path {
          fill: rgb(74, 74, 74);
        }
      }
      button {
        background: transparent;
        border: 0;
        float: right;
      }

      &.active {
        background-color: rgb(255, 21, 85);

        span {
          color: #fff;
        }
        svg {
          path {
            fill: rgb(255, 255, 255);
          }
        }
      }
    }

    .exclusiveContent {
      position: absolute;
      display: block;
      bottom: 3px;
      text-align: center;
      height: 22px;
      width: 100%;
      transform: rotate(360deg);
      background-color: rgba(255, 3, 100, 0.49);
      color: rgb(255, 255, 255);
      font-size: 14px;
      font-weight: bold;
      line-height: 17px;
      text-align: center;
    }
  }

  .footer {
    height: 70px;
    .addressContent {
      color: rgb(74, 74, 74);
      font-size: 14px;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      padding: 8px;
      overflow: hidden;
    }
    .features {
      list-style: none;
      margin: 0px;
      padding: 0px 0px 2px;

      li {
        display: inline-block;
        vertical-align: middle;
        color: rgb(74, 74, 74);
        font-size: 14px;
        width: 50px;
        height: 32px;
        text-align: center;
        border-right: 1px solid rgb(234, 234, 234);

        span {
          vertical-align: middle;
          display: inline-block;
        }
        img {
          margin-left: 5px;
          vertical-align: middle;
          display: inline-block !important;
          &.size-22 {
            width: 22%;
          }
          &.size-45 {
            width: 45%;
          }
        }
      }
    }
  }
`;

export default CardWrapper;
