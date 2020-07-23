import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import ToolbarWrapper, { ToolbarInfo, ButtonFilter } from "./Toolbar.style.js";

const Toolbar = ({totalProperties}) => {
   
  return (
    <ToolbarWrapper>
      <ToolbarInfo>
        <div className="labelCity">Ciudad de México</div>
        <div className="labelResut">{totalProperties} Inmuebles</div>
      </ToolbarInfo>
      <ButtonFilter>
        <FontAwesomeIcon icon={faFilter} />
        <span>Filtros</span>
      </ButtonFilter>
    </ToolbarWrapper>
  );
};

export default Toolbar;
