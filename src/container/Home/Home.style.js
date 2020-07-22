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
`;

export const MapWhapper = styled(Map)`
  position: relative;
`;

export default HomeWrapper;
