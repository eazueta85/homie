import styled from "styled-components";

const PaginateWrapper = styled.div`
  display: block;
  width: 100%;
  text-align: center;
`;

export const PrevPage = styled.div`
  content: "";
  display: inline-block;
  height: 33px;
  width: 57px;
  background-color: rgb(255, 255, 255);
  line-height: 33px;
  margin-bottom: -10px;
  cursor: pointer;
  visibility: visible;
  pointer-events: auto;
  margin-right: 10px;
  background: url("/assets/images/grey-left-arrow.svg") center center no-repeat;
`;

export const NextPage = styled.div`
  content: "";
  display: inline-block;
  height: 33px;
  width: 57px;
  background-color: rgb(255, 255, 255);
  line-height: 33px;
  margin-bottom: -10px;
  cursor: pointer;
  visibility: visible;
  pointer-events: auto;
  margin-left: 10px;
  background: url("/assets/images/grey-right-arrow.svg") center center no-repeat;
`;

export const NumberPage = styled.div`
  color: rgb(74, 74, 74);
  font-size: 16px;
  letter-spacing: -0.25px;
  line-height: 10px;
  user-select: none;
  display: inline-block;
  width: 125px;
`;

export default PaginateWrapper;
