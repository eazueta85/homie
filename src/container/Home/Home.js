import React from "react";
import Toolbar from "../../components/Toolbar/Toolbar";
import Propierties from "../Properties/Propierties";
import Layout from "../Layout";
import HomeWrapper, {MapWhapper} from "./Home.style"

import properties from './propertiesDemo' //Demo JSON Propiedades

const Home = () => {
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
