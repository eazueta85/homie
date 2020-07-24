import styled from "styled-components";
import Map from "../../components/Map/Map";

const HomeWrapper = styled.div`
  width: 100%;
  background-color: rgb(249, 249, 249);
  color: rgb(51, 51, 51);
  padding: 20px 0;

  .container {
    max-width: 1024px;
    height: auto !important;
    margin: 0 auto;
  }

  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }

  .column {
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
    position: relative;
  }
  .loaderWrapper {
    height: calc(62vh + 60px);
    display: flex;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    .loader {
      transform: translateZ(0px);
      width: 30px;
      height: 30px;
      margin: 0px auto;
      border-width: 1px;
      border-style: solid;
      border-color: rgb(141, 122, 255) rgb(141, 122, 255) rgb(141, 122, 255)
        transparent;
      border-image: initial;
      border-left: 1px solid transparent;
      background: transparent;
      border-radius: 50%;
      -webkit-animation: load3 1.4s infinite linear;
      animation: load3 1.4s infinite linear;
      -webkit-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
    }
    @-webkit-keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
    @keyframes load3 {
      0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
      }
      100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
      }
    }
  }
`;

export const MapWhapper = styled(Map)`
  position: relative;
`;

export default HomeWrapper;
