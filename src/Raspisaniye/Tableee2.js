import React from 'react';
import '../App.css'

import {Outlet} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

function Tableee2(props){

    

   return<>
   
<div className="table">

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{width:'40%'}}> День недели</TableCell>
            <TableCell align="center" style={{width:'30%'}}>Предметы</TableCell>
            <TableCell align="center" style={{width:'30%'}}>События</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows2.map((row) => (
            <TableRow
              key={row.id}
              sx={{ borderBottom:'1px solid rgba(224, 224, 224, 1)'}}>
                
              <TableCell component="th" scope="row" align="center">{row.name}</TableCell>

              <TableCell sx={{borderRight:'1px solid rgba(224, 224, 224, 1)',borderLeft:'1px solid rgba(224, 224, 224, 1)',padding:0}}>
                {row.login.map(login => (
                  <div style={{padding: '16px 0 16px 0',width:'100%',textAlign:'center'}} >{login}</div>
                ))}
              </TableCell>

              <TableCell sx={{padding:0}}>
                  {row.parol.map(parol => (
                      <div style={{paddingLeft:0,paddingRight:0,width:'100%',textAlign:'center',padding: '16px 0 16px 0'}} >{parol}</div>
                  ))}
              </TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
    

        <div style={{display:'flex',flexGrow:1,}}></div>
        <div style={{height:'100px'}}></div>
        
   <Outlet/>

   </>
    
   
}

export default Tableee2;