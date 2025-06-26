("use client");

import { getAllUsers } from "@/api-services/home.services";
import { Button } from "@/components/ui/button";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useQuery } from "@tanstack/react-query";
import { type ColumnDef } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { SkeletonLoader } from "../SkeletonLoader";
import Text from "../text/Text";
import MyPagination from "./table-non-paginated-apis/non-paginatedAPI-pagination/MyPagination";
import TableNonPagApi from "./table-non-paginated-apis/TableNonPagApi";
import { useGlobalTable } from "./table-non-paginated-apis/useGlobalTable";

// ************************************** Dummy Setup 🚀🚀**************************************

// dummy <T> - for the rows
type AllUsers = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  userRoles: any;
};

export default function DummyComponent() {
  const { data: getAllUserData, isFetching } = useQuery({
    queryKey: ["User", "GetAllUsers"],
    queryFn: () => getAllUsers(),
    placeholderData: [],
  });

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AllUsers | null>(null);

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
        accessorKey: "userRoles",
        header: () => (
          <div className="flex flex-1 justify-center">
            <Text size="lg" strong={true}>
              User Roles
            </Text>
          </div>
        ),
        cell: (row: any) => (
          <div className="flex flex-1 justify-center gap-2">
            {row?.getValue()?.length ? (
              row?.getValue()?.map((elem: any, idx: number) => (
                <Text size="lg" key={`${elem}--col-val--${idx}`}>
                  {elem?.roleName}
                </Text>
              ))
            ) : (
              <Text size="lg">{"-"}</Text>
            )}
          </div>
        ),
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
        cell: ({ row }) => (
          <div className="flex items-center justify-end gap-4">
            <Button
              className="hover:cursor-pointer font-semibold"
              onClick={() => {
                setIsOpen(true);
                // console.log(row);
                setSelectedItem(row?.original);
              }}
            >
              Edit
            </Button>
            <Button className="hover:cursor-pointer font-semibold">
              Delete
            </Button>
          </div>
        ),
      },
    ],
    []
  );

  // Table Data - structuring it according to row type
  const tableData: AllUsers[] = useMemo(() => {
    return getAllUserData.map((elem: any) => ({
      id: elem?.objId,
      firstName: elem?.firstName,
      lastName: elem?.lastName,
      email: elem?.email,
      userRoles: elem?.userRoles,
    }));
  }, [getAllUserData]);

  // creating table instance using custom Hook.
  const table = useGlobalTable({ columns, data: tableData, pageSize: 2 });

  // memoize it
  const memoTable = useMemo(() => table, [getAllUserData]);

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="py-8 px-12">
      <div className="container mx-auto flex flex-col gap-8 justify-center border-2 border-blue-500 rounded-lg">
        {isFetching ? (
          <SkeletonLoader />
        ) : (
          <>
            <div className="p-4">
              <TableNonPagApi table={memoTable} />
            </div>
            <div className="p-4 flex mx-auto">
              <MyPagination table={memoTable} isPageSize="true" />
            </div>
          </>
        )}
      </div>

      {isOpen ? (
        <Modal
          open={isOpen}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "50vw",
              height: "500px",
              bgcolor: "background.paper",
              borderRadius: "12px",
              boxShadow: 24,
            }}
          >
            <div className="border-b-3 border-blue-500 p-6">
              <Text size="4xl" strong={true}>
                User Details
              </Text>
            </div>
            <div className="flex flex-col my-auto gap-4 pt-4 p-6">
              {selectedItem &&
                Object?.entries(selectedItem)?.map((pair, idx) => (
                  <>
                    {typeof pair?.[1] === "string" ||
                    typeof pair?.[1] === "number" ? (
                      <Text size="lg" key={`${pair}--modal-val--${idx}`}>
                        {pair?.[1]}
                      </Text>
                    ) : (
                      <div className="flex items-center gap-2">
                        {pair?.[1]?.map((elem: any, idx: number) => (
                          <Button variant={"secondary"}>
                            <Text
                              size="lg"
                              key={`${elem}--user-roles-val--${idx}`}
                            >
                              {elem?.roleName}
                            </Text>
                          </Button>
                        ))}
                      </div>
                    )}
                  </>
                ))}
            </div>
          </Box>
        </Modal>
      ) : (
        <></>
      )}
    </div>
  );
}
