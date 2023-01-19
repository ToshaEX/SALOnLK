import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataTable({ columns, rows, callback }) {
  return (
    <div className="w-100% h-[510px] mt-3 shadow-md overflow-x-auto">
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        sx={{
          pt: 1,
          px: 2,
          "& .super-app-theme--header": {},
          "& .data-column-cell": {
            color: "rgb(107 114 128)",
          },
          "& .edit-column-cell": {
            cursor: "pointer",
            pl: "25px",
            color: "rgb(39 52 68 / 1)",
          },
          "& .delete-column-cell": {
            color: "rgb(248 113 113)",
            cursor: "pointer",
            pl: "22px",
          },
        }}
        onCellClick={(params) => {
          if (params.value === "Edit") {
            callback("edit", params.row);
          } else if (params.value === "Delete") {
            callback("delete", params.row);
          }
        }}
      />
    </div>
  );
}
