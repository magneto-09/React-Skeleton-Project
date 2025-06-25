// tanstack-table -> 0-Based
// MUI - Pagination -> 1-Based

import Pagination from "@mui/material/Pagination";
import { type Table as TanstackTable } from "@tanstack/react-table";
import "./index.css";
import PageSize from "./PageSize";

interface PaginationProps<TData> {
  table: TanstackTable<TData>;
  isPageSize?: string;
}

function MyPagination<TData>({
  table,
  isPageSize = "false",
}: PaginationProps<TData>) {
  const handleChange = (_: any, page: number): void => {
    table?.setPageIndex(page - 1);
  };

  const totalRecordCnt = table?.getCoreRowModel()?.rows?.length;
  const pageSize = table?.getState()?.pagination?.pageSize;

  const totalPageCnt = Math?.ceil(totalRecordCnt / pageSize);

  return (
    <>
      {!isPageSize ? (
        <Pagination
          count={totalPageCnt}
          page={table?.getState()?.pagination?.pageIndex + 1}
          defaultPage={1}
          color="secondary"
          className="pag-btn-clr"
          onChange={handleChange}
        />
      ) : (
        <div className="flex items-center gap-8">
          <PageSize table={table} />
          <Pagination
            count={totalPageCnt}
            page={table?.getState()?.pagination?.pageIndex + 1}
            defaultPage={1}
            color="secondary"
            className="pag-btn-clr"
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
}

export default MyPagination;
