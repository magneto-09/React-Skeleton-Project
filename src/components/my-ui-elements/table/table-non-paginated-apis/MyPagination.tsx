// tanstack-table -> 0-Based
// MUI - Pagination -> 1-Based

import Pagination from "@mui/material/Pagination";
import "./index.css";
import { type TableNonPagApiProps } from "./TableNonPagApi";

function MyPagination<TData>({ table }: TableNonPagApiProps<TData>) {
  const handleChange = (_: any, page: number): void => {
    table?.setPageIndex(page - 1);
  };

  const totalCnt = table?.getCoreRowModel()?.rows?.length;
  const pageSize = table?.getState()?.pagination?.pageSize;

  const pageCnt = Math?.ceil(totalCnt / pageSize);

  return (
    <Pagination
      count={pageCnt}
      page={table?.getState()?.pagination?.pageIndex + 1}
      defaultPage={1}
      color="secondary"
      className="pag-btn-clr"
      onChange={handleChange}
    />
  );
}

export default MyPagination;
