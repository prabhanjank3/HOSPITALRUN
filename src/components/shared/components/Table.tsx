import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled , Toolbar, Typography, Box, Divider} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    // backgroundColor: theme.palette.common.black,
    // color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover
    paddingTop:'16px'
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0
  }
}));

function EnhancedTableToolbar(props: any) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        backgroundColor:"white",
        minHeight:'24px !important'
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontSize:'17px',fontWeight:'600', textDecorationLine:'underline' }}
          id="tableTitle"
          component="div"
        >
          {props.label}
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

export default function DenseTable({ rows=[], columns=[], label }:{rows:any[], columns:string[], label:string}) {
  return (
    <Box>
    {label && <EnhancedTableToolbar label={label} />}
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, paddingTop:'16px' }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {columns.map((name:string, index) => {
              if (index === 0) {
                return (
                  <StyledTableCell sx={{ fontWeight: "600" }}>
                    {name.toUpperCase()}
                  </StyledTableCell>
                );
              }
              return (
                <StyledTableCell align="right" sx={{ fontWeight: "600" }}>
                  {name.toUpperCase()}
                </StyledTableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody >
          {(rows.length)?rows.map((row, index) => (
            <StyledTableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((key, index) => {
                if (index === 0) {
                  return (
                    <StyledTableCell component="th" scope="row">
                      {row[key]}
                    </StyledTableCell>
                  );
                }
                return <TableCell align="right">{row[key]}</TableCell>;
              })}
            </StyledTableRow>
          )):<TableRow>
            <TableCell sx={{margin:'auto', paddingTop:3, paddingBottom:3, color:'gray'}} colSpan={6}>{'No data found for this record!'}</TableCell>
            </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
    </Box>
  );
}
