import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter, NavLink, Routes, Route, Outlet } from "react-router-dom";
import Tableee from './Redaktor classov/Tableee';
import Tablichki from './Redaktor classov/Tablichki';
import Tableee3 from './Redaktor Raspisaniya/Tableee3';
import AddDZ from './Components/AddDZ';
import Header from './Header'
import { CButton } from './Components/CButton';




function createData(name, login, parol, id) {
  return { name, login, parol, id };
}

function App() {
  

  const [AuthState,setAuthState] = React.useState(null);

  React.useEffect(() => {

    
    const userData = JSON.parse(localStorage.getItem("userData"));
    setAuthState(userData);
  

    const SostTab = JSON.parse(localStorage.getItem("SostTab"));
    setTab(SostTab)    

    const Sostknop = JSON.parse(localStorage.getItem("Sostknop"));
    if (Sostknop) setKnop(Sostknop)
    else setKnop([]);

    const Sostrows = JSON.parse(localStorage.getItem("SostRows"));
    if (Sostrows) setRows(Sostrows)
    else setRows([[],[],[],[],[],[],[]]);

    const Sostrows2 = JSON.parse(localStorage.getItem("SostRows2"));
    if (Sostrows2) setRows2(Sostrows2)
    else setRows2([[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),],[createData('Понедельник', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Вторник', ['Русский','Обществознание','История','Физика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Среда', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Четверг', ['Математика','Русский','Физическая культура','Окр. мир'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Пятница', ['Русский','Обществознание','История','Математика'], ['контроша','контроша','контроша','контроша'], uuidv4()),
    createData('Суббота', ['ЫЫЫыыыыыы','ыыыыы','ЫЫЫыыыыыыы','ЫЫЫЫЫ'], ['контроша','контроша','контроша','контроша'], uuidv4()),]]);
  },[])


  const [rows, setRows] = React.useState([[],[],[],[],[],[],[]]);



  const [count,setCount] = React.useState(0)
  const userData = JSON.parse(localStorage.getItem("userData"));



  const [knop, setKnop] = React.useState([]);
  
  const [dlina,setDlina] = React.useState(knop.length)

  const [tab,setTab] = React.useState();
  const [rows2, setRows2] = React.useState([[],[],[],[],[],[],[]]);

  

  
 


  return (

    <BrowserRouter>
      <Header CButton={CButton} setTab={setTab} tab={tab} AuthState={AuthState} setAuthState={setAuthState} userData={userData}></Header>
      <Routes>

        <Route path="/items3" element={<Tablichki dlina={dlina} setDlina={setDlina} tab={tab} knop={knop} setKnop={setKnop} userData={userData} 
        AuthState={AuthState} setTab={setTab} count={count} setCount={setCount} rows={rows}></Tablichki>}>
          <Route path="/items3/:item" element={<Tableee3 rows2={rows2} setRows2={setRows2} userData={userData} count={count}></Tableee3>} />
        </Route>

        <Route path="/items1" element={<Tablichki dlina={dlina} setDlina={setDlina} tab={tab} knop={knop} setKnop={setKnop} userData={userData} 
        AuthState={AuthState} setTab={setTab} count={count} setCount={setCount} rows={rows}></Tablichki>}>
          <Route path="/items1/:item" element={<Tableee rows={rows} setRows={setRows} userData={userData} count={count}></Tableee>} />
        </Route>

        <Route path="/items2" element={<Tablichki dlina={dlina} setDlina={setDlina} tab={tab} knop={knop} setKnop={setKnop} userData={userData} 
        AuthState={AuthState} setTab={setTab} count={count} setCount={setCount} rows={rows}></Tablichki>}>
          <Route path="/items2/:item" element={<AddDZ></AddDZ>} />
        </Route>
        
      </Routes>
    </BrowserRouter>




  );
}

export default App;
