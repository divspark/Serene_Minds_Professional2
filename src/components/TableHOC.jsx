/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// src/components/TableHOC.jsx

import { ScrollArea, Pagination, Flex } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";

const TableHOC = ({ columns, data, origin }) => {
  const navigate = useNavigate();
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: { pagination: { pageSize: 10 } },
  });
  const navigationMap = {
    clients: `/clients`,
    assessments: `/assessments`,
  };

  return (
    <>
      <ScrollArea h={450}>
        <table className="min-w-full border border-gray-200 rounded-lg shadow-md overflow-hidden">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="border-b border-gray-200 py-5 px-3 text-left text-black text-base bg-gray-100 font-semibold"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                onClick={() => navigate(`${navigationMap[origin]}/${row.id}`)}
                key={row.id}
                className="hover:bg-slate-400 hover:cursor-pointer"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="border-b border-gray-200 p-2 text-gray-600 "
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
      <Flex justify="center" mt={10}>
        <Pagination total={10} />
      </Flex>
    </>
  );
};

export default TableHOC;
