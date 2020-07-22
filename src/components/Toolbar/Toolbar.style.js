import styled from "styled-components";

const ToolbarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 10px auto;
`;

export const ToolbarInfo = styled.div`
  width: 70%;
  height: 50px;
  padding: 5px 10px;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  border-radius: 2px;
  

  .labelCity {
    font-weight: bold;
    color: rgb(141, 122, 255);
    font-size: 16px;
    line-height: 1;
    margin-left: 10px;
    /*padding: 7px 0px 0px;*/
  }

  .labelResut {
    color: rgb(74, 74, 74);
    font-size: 14px;
    line-height: 17px;
    margin: 4px 0px 0px 11px;
  }
`;

export const ButtonFilter = styled.a`
  width: 25%;
  background: #8d7efc;
  padding: 5px 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px 0px;
  border-radius: 2px;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
 
  span {
    margin-left: 10px;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
  }
`;

export default ToolbarWrapper;
