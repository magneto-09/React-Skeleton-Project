"use client";

import {
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

// Global table component using tanstack table if Paginated APIs are provided.🚀🚀🚀🚀
// since API is paginated so we'll always send payload to API atleast for pageIndex and pageSize. ALWAYS✅✅

/*
 Payload Structure - keeping BasePayload as interface
 
{
  pageIndex: 0,
  pageSize: 10,

  //   optional fields🚀🚀
  searchFilter: "Piyush Admin 10",
  columnFilters: [
    { id: "role", value: "admin" },
    { id: "status", value: "active" },
  ],
  sorting: [
    { id: "name", desc: false },
    { id: "createdAt", desc: true },
  ],
};

*/

// BasePayload interface
export interface BasePayload {
  pageIndex: number;
  pageSize: number;
  [key: string]: any; // any fields can be added - OPTIONAL
}

// table props
interface TablePagApiProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  payload: BasePayload;
  setPayload?: React.Dispatch<React.SetStateAction<BasePayload>>; // passing for sortingFn()
  isSorting?: boolean;
  isFiltering?: boolean;
}

function TablePagApi<TData, TValue>({
  columns,
  data,
  payload,
  setPayload,
  isSorting = false,
  isFiltering = false,
}: TablePagApiProps<TData, TValue>) {
  //   creating tanstack-table using useReactTable Hook
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: payload?.pageIndex,
        pageSize: payload?.pageSize ?? 10, //fallback value
      },
      globalFilter: payload?.searchFilter, // for search box - type:any (keep it string)
      columnFilters: payload?.columnFilters, // [{id:accessorKey, value:dropdownValue}, ....]
      sorting: payload?.sorting, // [{id:accessorKey, desc:boolean}, .........]
    },
    manualPagination: true,
    manualFiltering: isFiltering,
    manualSorting: isSorting, // done by BE logic
    enableMultiSort: isSorting, // multiple sorting is allowed based on if API will do sorting or not.
    isMultiSortEvent: () => isSorting, // event needed for working of multiSort
    onSortingChange: (newSorting) => {
      if (!setPayload) return;
      setPayload((prev) => ({
        ...prev,
        sorting: newSorting,
      }));
    },
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                  {/* TODO:
                NoDataUI -- add it 
                */}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default React.memo(TablePagApi) as typeof TablePagApi;

// make sure to memoize using useMemo -> data, column, payload,
// make sure to memoize using useCallback() -> setPayload
