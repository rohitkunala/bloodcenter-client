import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import { useState } from "react";
import axios from "axios";
// import TableFilter from "./TableFilter";
// import BasicTable from "../basic-table/BasicTable"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontFamily:'Trebuchet MS'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export function CustomizedTables(props) {
  console.log(props.donors);
  const [show, setShow] = useState(false);
  const [hospitalDemand, setHospitalDemand] = useState([]);

  const onFetchHospitalDemandTable = () => {
    axios
      .get("http://localhost:5000/showHospitalDemand")
      .then((res) => {
        console.log(JSON.parse(res.data).hospitalDemand);
        setHospitalDemand(JSON.parse(res.data).hospitalDemand);
      })
      .catch((err) => console.log(err));
    setShow(true);
  };

  return (
    <>
      <Container  >
        <div style={{  paddingBottom: 10 }}>
          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#08ee869c",
              padding: "5px 9px",
              fontSize: "15px",
              fontWeight:"bold"
          }} 
            onClick={() => onFetchHospitalDemandTable()}
          >
            Show Demand
          </Button>{" "}
          <Button
            variant="contained"
            style={{
              borderRadius: 35,
              backgroundColor: "#fb05159d",
              padding: "5px 9px",
              fontSize: "15px",
              fontWeight:"bold"
          }} 
            onClick={() => setShow(!show)}
          >
            Hide
          </Button>
        </div>
        {show && (
          <TableContainer component={Paper}>
            {/* <TableFilter></TableFilter> */}
            {/* <BasicTable></BasicTable> */}

            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Hospital Name</StyledTableCell>
                  <StyledTableCell align="center">Age</StyledTableCell>
                  <StyledTableCell align="center">Blood Group</StyledTableCell>
                  <StyledTableCell align="center">Quantity in mL</StyledTableCell>  
                  {props.all && (
                    <StyledTableCell align="center">
                      facilityChoice
                    </StyledTableCell>
                  )}
                </TableRow>
              </TableHead>
              <TableBody>
                {hospitalDemand.map((val, id) => (
                  <StyledTableRow key={id}>
                    <StyledTableCell align="center">
                      {val.hospitalName}
                    </StyledTableCell>
                    <StyledTableCell align="center">{val.age}</StyledTableCell>
                    <StyledTableCell align="center">
                      {val.bloodgroup}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {val.quantity}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </>
  );
}
