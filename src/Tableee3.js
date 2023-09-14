import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import './App.css'
import { Box } from "@mui/material";

import {Outlet} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Height } from "@mui/icons-material";


const CButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  min-width: 45px;
  max-width: 45px;
  height:45px;
  background-color:#F5F5F5;
  color:black;
  border-radius: 6.2px;
  transition: 0.5s;
  box-sizing: border-box;
  overflow: hidden;

  :hover {
    background-color: #F5F5F5;
    transform: scale(1.15);
  }
  :active{
    transition: 0.1s;
    transform: scale(1);
   }
`;
function createData(name, calories,id) {
  return { name, calories,id};
}

  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

function Tableee3(props){

    

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
              key={row.name}
              sx={{ borderBottom:'1px solid rgba(224, 224, 224, 1)'}}>
                
              <TableCell component="th" scope="row" align="center">{<input></input>}</TableCell>

              <TableCell sx={{borderRight:'1px solid rgba(224, 224, 224, 1)',borderLeft:'1px solid rgba(224, 224, 224, 1)',padding:0}}>
                {row.login.map(() => (
                  <div style={{padding: '16px 0 16px 0',width:'100%',textAlign:'center'}} >{<input></input>}</div>
                ))}
              </TableCell>

              <TableCell sx={{padding:0}}>
                  {row.parol.map(() => (
                      <div style={{paddingLeft:0,paddingRight:0,width:'100%',textAlign:'center',padding: '16px 0 16px 0'}} >{<input></input>}</div>
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

export default Tableee3;