import React from "react";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import Paginate from "../../components/Paginate/Paginate";
import Banner from "../../components/Banner/Banner";

const PropertiesWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;

const Propierties = ({ properties }) => {
  return (
    <PropertiesWrapper>
      {properties.map((property) => {
        return <Card key={property.id} />;
      })}
      <Paginate />
      <Banner />
    </PropertiesWrapper>
  );
};

export default Propierties;
