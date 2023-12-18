import DataTable from "react-data-table-component";

export function DataTables({ data, columns }) {
  const CustomStylesTable = {
    table: {
      style: {
        width: "auto", // set the width of the table wrapper
        backgroundColor: "transparent",
        borderRadius: "10px",
      },
    },
    cells: {
      style: {
        paddingLeft: "20px", // override the cell padding for data cells
        justifyContent: "center",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        backgroundColor: "#D5D5D540",
        marginTop: "10px",
        borderRadius: "10px",
        border: "0px",
        minHeight: "72px", // override the row height
        "&:not(:last-of-type)": {
          border: "0px",
        },
      },
    },
    denseStyle: {
      minHeight: "300px",
    },
    headRow: {
      style: {
        backgroundColor: "#8F0D1E",
        minHeight: "52px",
        borderRadius: "10px",
      },
      denseStyle: {
        minHeight: "32px",
      },
    },
    headCells: {
      style: {
        paddingLeft: "20px", // override the cell padding for head cells
        paddingRight: "10px",
        justifyContent: "center",
        color: "rgb(243 241 241)",
      },
    },
  };

  return (
    <>
      <DataTable
        columns={columns}
        customStyles={CustomStylesTable}
        data={data}
        // defaultSortAsc={false}
        // defaultSortFieldId={defaultSortFieldId}
      />
    </>
  );
}
