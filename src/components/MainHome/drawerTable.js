import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Styles/mainpage.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
}));

export default function CustomizedTables(props) {
  console.log("props :",props)
  const details=props.details
  let cols=[]
  for(let i=0;i<details.length;i++){
    cols.push(details[i][details.length])
  }
  console.log("cols",cols)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ manWidth: 50 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Locations</StyledTableCell>
            {cols.map((col) => ( <StyledTableCell key={col} align="center">{col}</StyledTableCell>))}
          </TableRow>
        </TableHead>
        <TableBody>
          {details.map((row) => (
            <StyledTableRow key={row[0]}>
              <StyledTableCell component="th" scope="row">
                {row[row.length-1]}
              </StyledTableCell>
              {row.slice(0,row.length-1).map((detail) => (
              <StyledTableCell align="center">{detail}</StyledTableCell>)) }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}