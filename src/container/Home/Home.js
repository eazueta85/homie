import React, { useState, useEffect } from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Propierties from "../Properties/Propierties";
import Layout from "../Layout";
import HomeWrapper, { MapWhapper } from "./Home.style";

//Redux
import { useDispatch, useSelector, connect } from "react-redux";
import { getProperties } from "../../store/actions/propertyAction";

const Home = () => {
  const dispatch = useDispatch();

  //Actions
  const loadProperties = () => dispatch(getProperties());

  useEffect(() => {
    loadProperties();
  }, []);

  //States
  const properties = useSelector((state) => state.properties.properties);

  return (
    <Layout>
      <HomeWrapper>
        <div className="container">
          <div className="row">
            <div className="column">
              <Toolbar />
              <Propierties properties={properties} />
            </div>
            <div className="column">
              <MapWhapper properties={properties} />
            </div>
          </div>
        </div>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
