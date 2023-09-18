import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, NavLink, Routes, Route, Outlet } from "react-router-dom";
import Tableee2 from './Raspisaniye/Tableee2';
import Tableee from './Redaktor classov/Tableee';
import Tablichki from './Redaktor classov/Tablichki';
import Tableee3 from './Redaktor Raspisaniya/Tableee3';
import Tableee4 from './Spisok classov/Tableee4';

import Header from './Header'
import { CButton } from './Components/CButton';




function createData(name, login, parol, id) {
  return { name, login, parol, id };
}

function App() {
  const [tab,setTab] = React.useState();
  const [knop, setKnop] = React.useState([]);
  const [rows2, setRows2] = React.useState([
    createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История'], ['контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы'], ['контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История'], ['контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы'], ['контроша','контроша','контроша'], uuidv4()),
  ]);
  const [rows, setRows] = React.useState([
    createData('Четверг', 'Login', 1234567, uuidv4()),
  ]);

 


  return (

    <BrowserRouter>
      <Header CButton={CButton} setTab={setTab} tab={tab}></Header>
      <Routes>
        <Route path="/items2" element={<Tablichki tab={tab} knop={knop} setKnop={setKnop} ></Tablichki>}>
          <Route path="/items2/:item" element={<Tableee2 rows2={rows2} setRows2={setRows2}></Tableee2>} />
        </Route>

        <Route path="/items4" element={<Tablichki tab={tab} knop={knop} setKnop={setKnop}></Tablichki>}>
          <Route path="/items4/:item" element={<Tableee4 rows={rows} setRows={setRows}></Tableee4>} />
        </Route>

        <Route path="/items3" element={<Tablichki tab={tab} knop={knop} setKnop={setKnop}></Tablichki>}>
          <Route path="/items3/:item" element={<Tableee3 rows2={rows2} setRows2={setRows2}></Tableee3>} />
        </Route>

        <Route path="/items1" element={<Tablichki tab={tab} knop={knop} setKnop={setKnop} ></Tablichki>}>
          <Route path="/items1/:item" element={<Tableee rows={rows} setRows={setRows}></Tableee>} />
        </Route>
      </Routes>
    </BrowserRouter>




  );
}

export default App;
