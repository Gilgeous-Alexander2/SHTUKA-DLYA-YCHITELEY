import './App.css';
import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BrowserRouter,NavLink, Routes, Route , Outlet} from "react-router-dom";
import { Table } from '@mui/material';
import Tableee from './Tableee';
import Tableee2 from './Tableee2';
import Tablichki from './Tablichki';
import Tablichki2 from './Tablichki2';
import Header from './Header'
import AlertDialogiii from './AUTHORIZ2';


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



function createData(name, login, parol, id) {
  return { name, login, parol, id};
}

function App() {
  const  [knop,setKnop] = React.useState([]);
  const [rows2,setRows2] = React.useState([
    createData('Маркевич Александр Викторович', ['Контрольная работа по биологии \n','hhhhhhh \n','ffffff'], 6.0, uuidv4()),
    ]);
  const [rows,setRows] = React.useState([
      createData('Маркевич Александр Викторович', 'Login', 1234567, uuidv4()),
      ]);

  return (
    
    <BrowserRouter>
    <Header CButton={CButton}></Header>
    <Routes>
      <Route path="/items2" element={<Tablichki2 knop={knop} setKnop={setKnop} CButton={CButton}></Tablichki2>}>
        <Route path="/items2/:item" element={<Tableee2 rows2={rows2} setRows2={setRows2}></Tableee2>}/>
      </Route>

      <Route path="/items" element={<Tablichki knop={knop} setKnop={setKnop} CButton={CButton}></Tablichki>}> 
        <Route path="/items/:item" element={<Tableee rows={rows} setRows={setRows}></Tableee>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    

    

  );
}

export default App;
