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

  // Columns
  const columns: ColumnDef<AllUsers>[] = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
      },
      {
        accessorKey: "firstName",
        header: "First Name",
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },
      {
        accessorKey: "email",
        header: "Email",
        enableSorting: true,
        enableGlobalFilter: true,
        enableColumnFilter: true,
      },

      {
        id: "action",
        header: "Action",
        cell: () => (
          <div className="flex items-center gap-4">
            <Text size="sm" type="success" className=" hover:cursor-pointer">
              Edit
            </Text>
            <Text size="sm" type="success" className=" hover:cursor-pointer">
              Update
            </Text>
          </div>
        ),
      },
    ],
    []
  );

  // Data
  const tableData: AllUsers[] = useMemo(() => {
    return getAllUserData.map((elem: any) => ({
      id: elem?.objId,
      firstName: elem?.firstName,
      lastName: elem?.lastName,
      email: elem?.email,
    }));
  }, [getAllUserData]);

  // ✅ Hook call directly — NO MEMO
  const table = useGlobalTable({ columns, data: tableData });

  console.log("row count:", table.getRowModel().rows.length);
  console.log("data", tableData);

  return (
    <div className="container mx-auto flex flex-col gap-24 justify-center border-2 border-blue-500 rounded-lg">
      <div className="p-4">
        <TableNonPagApi table={table} />
      </div>
      <div className="p-4 flex mx-auto">
        <MyPagination table={table} />
      </div>
    </div>
  );
}
