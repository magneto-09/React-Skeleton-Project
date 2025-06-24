("use client");

import { getAllUsers } from "@/api-services/home.services";
import { useQuery } from "@tanstack/react-query";
import { type ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";
import Text from "../text/Text";
import MyPagination from "./table-non-paginated-apis/MyPagination";
import TableNonPagApi from "./table-non-paginated-apis/TableNonPagApi";
import { useGlobalTable } from "./table-non-paginated-apis/useGlobalTable";

// ************************************** Dummy Setup 🚀🚀**************************************

// dummy <T>
export type AllUsers = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
};

export default function DummyComponent() {
  const { data: getAllUserData } = useQuery({
    queryKey: ["User", "GetAllUsers"],
    queryFn: () => getAllUsers(),
    placeholderData: [],
  });

  // Table Columns
  const columns: ColumnDef<AllUsers>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: () => (
          <div className="flex flex-1 justify-center">
            <Text size="lg" strong={true}>
              ID
            </Text>
          </div>
        ),
        cell: (row: any) => (
          <div className="flex flex-1 justify-center">
            <Text size="lg">{row?.getValue()}</Text>
          </div>
        ),
      },
      {
        accessorKey: "firstName",
        header: () => (
          <div className="flex flex-1 justify-center">
            <Text size="lg" strong={true}>
              First Name
            </Text>
          </div>
        ),
        cell: (row: any) => (
          <div className="flex flex-1 justify-center">
            <Text size="lg">{row?.getValue()}</Text>
          </div>
        ),
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "lastName",
        header: () => (
          <div className="flex flex-1 justify-center">
            <Text size="lg" strong={true}>
              Last Name
            </Text>
          </div>
        ),
        cell: (row: any) => (
          <div className="flex flex-1 justify-center">
            <Text size="lg">{row?.getValue()}</Text>
          </div>
        ),
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "email",
        header: () => (
          <div className="flex flex-1 justify-center">
            <Text size="lg" strong={true}>
              Email
            </Text>
          </div>
        ),
        cell: (row: any) => (
          <div className="flex flex-1 justify-center">
            <Text size="lg">{row?.getValue()}</Text>
          </div>
        ),
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },

      {
        id: "action",
        header: () => (
          <div className="flex justify-end">
            <Text size="lg" strong={true}>
              Action
            </Text>
          </div>
        ),
        cell: () => (
          <div className="flex items-center justify-end gap-4">
            <Text type="success" className=" hover:cursor-pointer">
              Edit
            </Text>
            <Text type="success" className=" hover:cursor-pointer">
              Update
            </Text>
          </div>
        ),
      },
    ],
    []
  );

  // Table Data
  const tableData: AllUsers[] = useMemo(() => {
    return getAllUserData.map((elem: any) => ({
      id: elem?.objId,
      firstName: elem?.firstName,
      lastName: elem?.lastName,
      email: elem?.email,
    }));
  }, [getAllUserData]);

  const table = useGlobalTable({ columns, data: tableData });

  // console.log(table.getState());

  // memoize it
  const memoTable = useMemo(() => table, [getAllUserData]);
  return (
    <div className="container mx-auto flex flex-col gap-24 justify-center border-2 border-blue-500 rounded-lg">
      <div
        className="p-4"
        style={{
          maxHeight: "calc(100vh - 530px)",
        }}
      >
        <TableNonPagApi table={memoTable} />
      </div>
      <div className="p-4 flex mx-auto">
        <MyPagination table={memoTable} />
      </div>
    </div>
  );
}
