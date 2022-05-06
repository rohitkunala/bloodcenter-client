import React, { useMemo, useState } from "react";
import { useTable, useFilters, useGlobalFilter } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import "./table.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

export const FilteringTable = (props) => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => props.donors, [props]);

  const defaultColumn = React.useMemo(
    () => ({
      Filter: ColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      defaultColumn,
    },
    useFilters,
    useGlobalFilter
  );

  const { globalFilter } = state;

  return (
    <>
      <Container sx={{ marginTop: 10, marginRight: 25 }}>
        <div style={{ float: "right", paddingBottom: 10 }}>
          <Button
            variant="contained"
            color="success"
            onClick={() => props.onFetchDonors()}
          >
            Show Donors
          </Button>{" "}
          <Button
            variant="contained"
            color="error"
            onClick={() => props.handleShow(!props.show)}
          >
            Hide
          </Button>
        </div>
        {/* {show && <CustomizedTables donors={donors} all={true}></CustomizedTables>} */}
        {props.show && (
          <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>
                        {column.render("Header")}
                        <div>
                          {column.canFilter ? column.render("Filter") : null}
                        </div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                {footerGroups.map((footerGroup) => (
                  <tr {...footerGroup.getFooterGroupProps()}>
                    {footerGroup.headers.map((column) => (
                      <td {...column.getFooterProps()}>
                        {column.render("Footer")}
                      </td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </>
        )}
      </Container>
    </>
  );
};
