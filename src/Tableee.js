import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

import './App.css'


import {Outlet} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
function createData(name, login, parol,id) {
  return { name, login, parol,id};
}

  
//   const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
//   ];

function Tableee(props){

return<>
<div className="table">

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{width:'40%'}}> ФИО</TableCell>
            <TableCell align="center" style={{width:'30%'}}>Логин</TableCell>
            <TableCell align="center" style={{width:'30%'}}>Пароль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" ><input className="border"></input></TableCell>
              <TableCell align="center" style={{fontSize:'16px'}}>{row.login}</TableCell>
              <TableCell align="center" style={{fontSize:'16px'}}>{row.parol}</TableCell>
              <TableCell align="center">{<CButton style={{minWidth: '35px', maxWidth: '35px',  height:'35px'}} 
              onClick={() => {props.setRows(old => old.filter(el => el.id !== row.id))}}>
                <DeleteForeverIcon fontSize='large'/></CButton>}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer>
    </div>
    

        <div style={{display:'flex',flexGrow:1,}}></div>
        <div style={{paddingLeft:'125px',marginTop:'20px'}}>
          {props.rows.length<=20 && <CButton  onClick={() => {props.setRows(old => 
        [...old, createData('Маркевич Александр Викторович', 'Login', 1234567,{id: uuidv4()})])}
        }><AddIcon fontSize='large'/></CButton>}
        </div>
        
   <Outlet/>

   </>
    
   
}

export default Tableee;