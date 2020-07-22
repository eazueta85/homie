import React from "react";
import PaginateWrapper, {PrevPage, NumberPage, NextPage} from './Paginate.style'

const Paginate = () => {
  return (
    <PaginateWrapper>
      <PrevPage />
      <NumberPage>1 a 12 de 385</NumberPage>
      <NextPage />
    </PaginateWrapper>
  );
};

export default Paginate;
