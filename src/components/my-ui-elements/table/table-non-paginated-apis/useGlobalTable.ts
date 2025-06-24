// custom hook to keep the track of tanstack table's initial state and when changes.
// hook that can be used in <TableNonPagApi />, <Pagination />, <Filter />
// Only for the Non-Paginated API.🚀🚀🚀
// cuz needed table's internal APIs for table's state change across multiple component
// table's internal state should be converted into controlled state.

import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type ColumnFiltersState,
  type PaginationState,
  type SortingState,
} from "@tanstack/react-table";
import { useState } from "react";

interface TableNonPagApiProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export const useGlobalTable = <TData, TValue>({
  columns,
  data,
}: TableNonPagApiProps<TData, TValue>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: 3,
  });

  const [sorting, setSorting] = useState<SortingState>([]);

  // filters -> global(search bar) + column(dropdowns)
  const [columnsFilter, setColumnsFilter] = useState<ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState<string>("");

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: pagination,
      sorting: sorting,
      columnFilters: columnsFilter,
      globalFilter: globalFilter,
    },
    // engines
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    // for multi-sort
    // enableMultiSort: true,
    // isMultiSortEvent: () => true,

    // onXChange
    onPaginationChange: setPagination,
    onSortingChange: (newSortingObj: any) => setSorting(newSortingObj),
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: (newFilterObj: any) =>
      setColumnsFilter(newFilterObj),
  });

  return table;
};
