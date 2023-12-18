import DataTable from "react-data-table-component";

export function DataTables({ data = ["apa", "iya", "heeh", "iyaaa"] }) {
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

  const columns = [
    {
      name: <div>No</div>,
      selector: (_row, i) => i + 1,
      width: "55px",
    },
    {
      name: <div>Code</div>,
      selector: (data) => data,
      cell: (data) => <div>{data}</div>,
      width: "auto",
    },
    {
      name: <div>Code</div>,
      selector: (data) => data,
      cell: (data) => <div>{data}</div>,
      width: "auto",
    },
    {
      name: <div>Code</div>,
      selector: (data) => data,
      cell: (data) => <div>{data}</div>,
      width: "auto",
    },
  ];

  return (
    <>
      {/* <div className="d-flex align-items-center justify-content-between mb-2">
        <div className="d-flex align-items-center">
          <input
            id="search"
            type="text"
            placeholder="Pencarian..."
            // value={filterText}
            // onChange={onFilter}
            className="rounded"
          />
          <i style={{ padding: "7px 6px" }} className="fa fa-search" />
        </div>
        <div>
          <button
            className="w-auto"
            // onClick={onClick}
          >
            <i className="fa fa-plus"></i>
          </button>
        </div>
      </div> */}
      <DataTable
        columns={columns}
        customStyles={CustomStylesTable}
        data={data}
        defaultSortAsc={false}
        // defaultSortFieldId={defaultSortFieldId}
      />
    </>
  );
}
