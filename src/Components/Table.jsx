import React from "react";
import DataTable from "react-data-table-component";

export default function Table({ columns, rows, isExtended = true }) {
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
    <div className="w-auto pb-1 rounded-md mt-3 shadow-md overflow-x-auto ">
      <DataTable
        columns={columns}
        data={rows}
        pagination
        customStyles={customStyles}
        expandOnRowClicked
        expandableRows={isExtended}
        expandableRowsHideExpander
        expandableRowsComponent={(props) => (
          <div>
            {props?.data?.services.map((service, i) => (
              <div
                className="grid-flow-col w-100% bg-gray bg-opacity-5 grid-cols-5 grid"
                key={service._id + "-" + i}
              >
                <span className="text-sm text-gray ">- {service.name}</span>
                <span className="text-sm text-gray-dark">
                  Rs: {service.price}
                </span>
                <span className="text-sm text-gray-dark">
                  {" "}
                  {service.time} min
                </span>
              </div>
            ))}
          </div>
        )}
      />
    </div>
  );
}
