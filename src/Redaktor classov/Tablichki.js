import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BrowserRouter,NavLink, Routes, Route , Outlet} from "react-router-dom";
import { CButton } from '../Components/CButton';


function setColor(num){
  var btns = document.getElementsByName("knopkaaa")
  var bt = document.getElementById(`knopkaaa${num}`)

  for(var i=0;i<btns.length;i++){
    btns[i].style.backgroundColor = "#F5F5F5"
  }
  bt.style.backgroundColor = "#ff0000"

  return bt
  
}

function Tablichki(props){
  React.useEffect(() => {
    const Sostnum = JSON.parse(localStorage.getItem("SostNomer"));
    setNomerklassa(Sostnum);
  },[])
  const [nomerklassa,setNomerklassa] = React.useState([[],[],[],[],[],[],[],]);
  const [iii,setIii] = React.useState([])
    return <>
    
    <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'40px'}}>Список классов</div>
    <div style={{display:'flex',marginTop:'40px'}}></div>
    <div style={{display:'flex',gap:'50px',paddingLeft:'150px',paddingRight:'100px',flexWrap:'wrap',height:'55px'}}>


      {/*НАЗВАНИЕ КЛАССА И КНОПКА МУСОРКА */}
        {props.knop.map( item => <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <NavLink to={`/items${props.tab}/${item.id}`}><CButton style={{minWidth:'60px',height:'60px'}} name = "knopkaaa" id={`knopkaaa${item.dl}`} key={item.id} onClick={()=>{props.setCount(item.dl);setColor(item.dl)}}>
            {props.tab==1 && props.userData.name === "admin" ? <input style={{width:'20px'}} value={nomerklassa[item.dl]} onChange={(e) => { setNomerklassa(
              old => {
              const newState = [...old];
              newState[item.dl] = e.target.value
              JSON.stringify(localStorage.setItem("SostNomer",JSON.stringify(newState)))
              return newState;
            })}}></input> : nomerklassa[item.dl]}</CButton></NavLink>
        {props.userData.name == "admin" ? <CButton  onClick={() => {props.setKnop(old => old.filter(el => el.id !== item.id));}}><DeleteForeverIcon fontSize='large'/></CButton> : null}</div>)}

      {/*КНОПКА ДОБАВИТЬ КЛASS */}
        { props.userData.name === "admin" && props.tab==1? <>
         <div style={{display:'flex',flexGrow:1,justifyContent:'center',alignItems:'center'}}>{props.knop.length===0? <div>Создайте класс во вкладке "Добавить класс"</div> : null}</div>
        { props.knop.length<=6 && <CButton  onClick={() => {props.setKnop(old => [...old, {id: uuidv4(), name: `${nomerklassa[props.knop.length]}`,dl: props.knop.length}]);
        localStorage.setItem("Sostknop",JSON.stringify(props.knop));}
        
        }><AddIcon fontSize='large'/></CButton> }</> : null }

    </div> 
    
    {props.tab ===1? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Редактор класса</div> :
    props.tab ===2? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Выложить ДЗ</div> :
    props.tab ===3? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Редактор расписания</div> : null}
    <Outlet/>
    </>

    
}
        
export default Tablichki;
