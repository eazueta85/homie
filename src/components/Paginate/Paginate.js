import React from "react";
import PaginateWrapper, {
  PrevPage,
  NumberPage,
  NextPage,
} from "./Paginate.style";
import { useDispatch, useSelector } from "react-redux";
import { currentPage } from "../../store/actions/paginatePropertyAction";

const Paginate = () => {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties.properties);
  const paginate = useSelector((state) => state.paginateProperty);
  const setCurrentPage = (next) => dispatch(currentPage(next));
  const indexOfLastAll = paginate.totalPerPage * paginate.currentPage;
  const totalPageNumber = Math.ceil(properties.length / paginate.totalPerPage);

  return (
    <PaginateWrapper>
      {paginate.currentPage > 1 ? (
        <PrevPage onClick={() => setCurrentPage(paginate.currentPage - 1)} />
      ) : null}

      <NumberPage>{`${
        indexOfLastAll + 1 - paginate.totalPerPage
      } a ${indexOfLastAll} de ${properties.length}`}</NumberPage>
      {totalPageNumber > paginate.currentPage ? (
        <NextPage onClick={() => setCurrentPage(paginate.currentPage + 1)} />
      ) : null}
    </PaginateWrapper>
  );
};

export default Paginate;
