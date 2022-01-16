import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Tablee(props) {
    let rows=props.data
    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Countries</TableCell>
              <TableCell align="right">New</TableCell>
              <TableCell align="right">Active</TableCell>
              <TableCell align="right">Critical</TableCell>
              <TableCell align="right">Recovered</TableCell>
              {/* <TableCell align="right">Cases/1M&nbsp;(g)</TableCell> */}
              <TableCell align="right">New Deaths</TableCell>
              <TableCell align="right">Total Deaths</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.country}
                </TableCell>
                <TableCell align="right">{row.cases.new}</TableCell>
                <TableCell align="right">{row.cases.active}</TableCell>
                <TableCell align="right">{row.cases.critical}</TableCell>
                <TableCell align="right">{row.cases.recovered}</TableCell>
                {/* <TableCell align="right">{row.cases.(1M_pop)}</TableCell> */}
                <TableCell align="right">{row.deaths.new}</TableCell>
                <TableCell align="right">{row.deaths.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
}

export default Tablee
