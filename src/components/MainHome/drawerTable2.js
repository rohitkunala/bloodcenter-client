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
import { fontSize } from '@mui/system';

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



export default function CustomizedTables2(props) {
  const details=props.details
  console.log("details",details)
  return (
    <>
     
    <h5>Optimal Location for fixed facility center :  <span style={{color:'#21b6ae',fontSize:26}}>
    {details[0][0] && details[0][0]}
    </span></h5>
    
    <TableContainer component={Paper}>
      <Table sx={{ manWidth: 50 }} aria-label="customized table">
        <TableBody>
          {details.map((row) => (
            <StyledTableRow key={row[0]}>
              {row.map((detail) => (
              // <StyledTableCell component="th" scope="row">
              //   {row.name}
              // </StyledTableCell>
              <StyledTableCell align="center">{detail}</StyledTableCell>))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}