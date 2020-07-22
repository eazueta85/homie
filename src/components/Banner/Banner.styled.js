import styled from "styled-components";

const BannerWrapper = styled.div`
  position: relative;
  top: 20px;
  text-align: center;
  font-size: 16px;
  margin: 0 auto;

  strong {
    display: block;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 10px;
  }
  span {
    display: block;
    color: rgb(74, 74, 74);
    font-size: 14px;
    line-height: 17px;
  }
  button {
    width: 300px;
    height: 35px;
    background-color: rgb(255, 21, 85);
    box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    font-weight: bold;
    line-height: 19px;
    border-radius: 2px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    padding: 8px 0px;
    margin: 20px auto;
  }
`;

export default BannerWrapper;
