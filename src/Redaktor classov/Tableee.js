import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';
import { CButton } from "../Components/CButton";

import '../App.css'


import {Outlet} from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


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
          {props.rows.map((row,rowindex) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center"><input style={{textAlign:'center',width:'300px'}} value={row.name}
              onChange={(e) => { props.setRows(
                old => {
                const newState = [...old];
                newState[rowindex].name=e.target.value;
                return newState;
                })}}></input></TableCell>
              <TableCell align="center" style={{fontSize:'16px'}}><input style={{textAlign:'center'}} value={row.login}
              onChange={(e) => { props.setRows(
                old => {
                const newState = [...old];
                newState[rowindex].login=e.target.value;
                return newState;
                })}}></input></TableCell>

              <TableCell align="center" style={{fontSize:'16px'}}><input style={{textAlign:'center'}} value={row.parol}
              onChange={(e) => { props.setRows(
                old => {
                const newState = [...old];
                newState[rowindex].parol=e.target.value;
                return newState;
                })}}></input></TableCell>
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

        
        <div style={{height:'100px'}}></div>
   <Outlet/>

   </>
    
   
}

export default Tableee;