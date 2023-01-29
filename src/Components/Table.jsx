import React from "react";
import DataTable from "react-data-table-component";

export default function Table({ columns, rows }) {
  const customStyles = {
    rows: {
      style: {
        minHeight: "52px",
      },
    },
    headCells: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        minHeight: "56px",
      },
    },
    cells: {
      style: {
        color: "gray",
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="w-100% pb-1 rounded-md mt-3 shadow-md overflow-x-auto">
      <DataTable
        columns={columns}
        data={rows}
        pagination
        customStyles={customStyles}
      />
    </div>
  );
}
