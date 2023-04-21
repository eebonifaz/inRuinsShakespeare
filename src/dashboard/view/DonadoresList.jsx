import { Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import moment from "moment/moment";
import { startLoadingMarcas } from "../../store/marcas/thunks";

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin'];

const valueFormatter = (params) => {
  const fecha = params?.value;
  if( !fecha ) return '';
  return moment( fecha ).format("DD/MM/YYYY  "); 
}

const formatValue = ( params ) => {
  let lista = [];
  params?.value.forEach( val => {
    lista.push(val.nombreEstado)
  })
  return lista.join(', ');
}

export const DonadoresList = () => {
  
  // const { donors } = useSelector( state => state.donor );
  
  const { marcas } = useSelector( state => state.marca );
  const { status, token } = useSelector( state => state.auth );
  const dispatch = useDispatch();
   
  const columns = [
    { field: 'denominacionCompleta', headerName: 'Denominación Completa', width: 350 },
    { field: 'claseInternacionalId', headerName: 'Clase Inter', width: 150, valueFormatter: (params) => (params?.value?.classInt) ,  }, 
    { field: 'countryDelSignoId', headerName: 'País', width: 150, valueFormatter: (params) => (params?.value?.CodeISO) ,  },  
    { field: 'fechaSolicitud', headerName: 'Fecha de solicitud', width: 150, valueFormatter,  }, 
    { field: 'estadoMarcaId', headerName: 'Estado Marca', width: 200, valueFormatter: formatValue },
    { field: 'fechaCreacion', headerName: 'F. creación', width: 150, valueFormatter,  },
    { field: 'fechaResolucion', headerName: 'F. resolución', width: 150, valueFormatter,  }, 
    { field: 'fechaVencimientoResolucion', headerName: 'F Venc. Resolucion', width: 150, valueFormatter,  }, 
   
    { field: 'fechaTitulo', headerName: 'F. Titulo', width: 150, valueFormatter,  }, 
    { field: 'fechaVencimientoTitulo', headerName: 'F Venc. Titulo', width: 150, valueFormatter,  }, 

    { field: 'fechaVencimientoGaceta', headerName: 'F Venc. Gaceta', width: 150, valueFormatter,  },  
    // { field: 'countryDelRegistroId', headerName: 'countryDelRegistroId', width: 150, valueFormatter: (params) => (params?.value?.CodeISO) ,  },  
      
    { field: 'gacetaId', headerName: 'Núm de Gaceta', width: 150, valueFormatter: (params) => (params?.value?.NumberId) ,  },  
    
    
  ];
 
  useEffect( () => {
    dispatch( startLoadingMarcas( token ) ); 
      () => {
      }
    },[])
  
  return (
    <Paper sx={{ width: '100%' }}>
      <div style={{ height: 700, width: '100%' }}>
        <DataGrid 
          rows={marcas} 
          columns={columns} 
          slots={{ toolbar: GridToolbar }} 
          // disableColumnFilter 
          // componentsProps={{
          //   filterPanel: {
          //     disableAddFilterButton: false,
          //     disableRemoveAllButton: false,
          //   },
          // }}
        />
      </div>
     
    </Paper>
  )
}
