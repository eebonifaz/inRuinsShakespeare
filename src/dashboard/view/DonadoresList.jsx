import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import { useState } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from "moment/moment";

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

export const DonadoresList = () => {
  
  const { donors } = useSelector( state => state.donor );
  
  const rows = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
  ];
  
  const columns = [
    { field: 'firstname', headerName: 'Firstname', width: 150 },
    { field: 'lastname', headerName: 'Lastname', width: 150 },
    { field: 'companyname', headerName: 'companyname', },
    { field: 'typeperson', headerName: 'typeperson', },
    { field: 'street', headerName: 'street', },
    { field: 'city', headerName: 'city', },
    { field: 'province', headerName: 'province', },
    { field: 'postalcode', headerName: 'postalcode', },
    { field: 'amount', headerName: 'amount', },
    { field: 'monthly', headerName: 'monthly', },
    { field: 'createdate', headerName: 'createdate', },
    { field: 'eblast', headerName: 'eblast', },
    { field: 'attendance', headerName: 'attendance', },
    { field: 'date', 
      headerName: 'date', 
      valueFormatter: params => 
        moment(params?.value).format("DD/MM/YYYY  "), 
      width: 150 
    },

  ];
 
 
  return (
    <Paper sx={{ width: '100%' }}>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid rows={donors} columns={columns} slots={{ toolbar: GridToolbar }} />
      </div>
     
    </Paper>
  )
}
