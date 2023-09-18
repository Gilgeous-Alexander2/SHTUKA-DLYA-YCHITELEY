import { v4 as uuidv4 } from 'uuid';
import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BrowserRouter,NavLink, Routes, Route , Outlet} from "react-router-dom";
import { CButton } from '../Components/CButton';

function Tablichki(props){
  const [sost,setSost] = React.useState([]);
    return <>
    <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'40px'}}>Список классов</div>
    <div style={{display:'flex',marginTop:'40px'}}></div>
    <div style={{display:'flex',gap:'50px',paddingLeft:'150px',paddingRight:'100px',flexWrap:'wrap',height:'55px'}}>

        {props.knop.map( item => <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <NavLink to={`/items${props.tab}/${item.id}`}><CButton style={{minWidth:'60px',height:'60px'}} key={item.id} >
            {props.tab==1? <input style={{width:'20px'}} value={sost} onChange={(e) => { setSost(e.target.value)}}></input> : sost}</CButton></NavLink>
        <CButton  onClick={() => {props.setKnop(old => old.filter(el => el.id !== item.id))}}><DeleteForeverIcon fontSize='large'/></CButton></div>)}


         <div style={{display:'flex',flexGrow:1,justifyContent:'center',alignItems:'center'}}>{props.knop.length==0? <div>Создайте класс в редакторе классов</div> : null}</div>
        {props.tab == 1? props.knop.length<=10 && <CButton  onClick={() => {props.setKnop(old => [...old, {id: uuidv4(), name: `${sost}`}])}
        }><AddIcon fontSize='large'/></CButton> : null}
    </div> 
    {props.tab ==1? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Редактор класса</div> :
    props.tab ==2? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Расписание</div> :
    props.tab ==3? <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Редактор расписания</div> : null}
    <Outlet/>
    </>
}
        
export default Tablichki;
