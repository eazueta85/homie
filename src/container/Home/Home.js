import React, { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";
import Layout from "../Layout";
import Toolbar from "../../components/Toolbar/Toolbar";
import Propierties from "../Properties/Propierties";
import scrollType from "../../library/utils/scroll";
import HomeWrapper, { MapWhapper } from "./Home.style";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { getProperties } from "../../store/actions/propertyAction";

const Home = () => {
  const [currentProperties, setCurrentProperties] = useState([]);

  //Actions
  const dispatch = useDispatch();
  const loadProperties = () => dispatch(getProperties());

  //States
  const propertiesState = useSelector((state) => state.properties);
  const paginate = useSelector((state) => state.paginateProperty);

  const { loading, properties } = propertiesState;

  useEffect(() => {
    loadProperties();
  }, []);

  useEffect(() => {
    const indexOfLastAll = paginate.currentPage * paginate.totalPerPage;
    const indexOfFirstAll = indexOfLastAll - paginate.totalPerPage;
    const currentTotal = () =>
      setCurrentProperties(properties.slice(indexOfFirstAll, indexOfLastAll));
    currentTotal();
    scroller.scrollTo("top", scrollType);
  }, [paginate, properties]);

  return (
    <Layout>
      <HomeWrapper>
        <div className="container">
          <div className="row">
            <div className="column">
              <Element name="top">
                {loading ?
                  <div className="loaderWrapper">
                    <div className="loader"></div>
                  </div>
                 : null}
                <Toolbar totalProperties={properties.length} />
                <Propierties properties={currentProperties} />
              </Element>
            </div>
            <div className="column">
              <MapWhapper properties={currentProperties} />
            </div>
          </div>
        </div>
      </HomeWrapper>
    </Layout>
  );
};

export default Home;
