import Pagination from "@mui/material/Pagination";
import "./index.css";
import { type TableNonPagApiProps } from "./TableNonPagApi";
import React from "react";

function MyPagination<TData>({ table }: TableNonPagApiProps<TData>) {
  const handleChange = (_: any, page: number): void => {
    console.log(page);
    table?.setPageIndex(page - 1);
  };

  return (
    <Pagination
      count={10}
      page={table.getState().pagination.pageIndex + 1}
      defaultPage={1}
      color="secondary"
      className="pag-btn-clr"
      onChange={handleChange}
    />
  );
}

export default React.memo(MyPagination) as typeof MyPagination;
