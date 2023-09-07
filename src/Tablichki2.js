import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { BrowserRouter,NavLink, Routes, Route , Outlet} from "react-router-dom";

function Tablichki2(props){
    return <>
    <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'40px'}}>Список классов</div>
    <div style={{display:'flex',marginTop:'40px'}}></div>
    <div style={{display:'flex',gap:'50px',paddingLeft:'150px',paddingRight:'100px',flexWrap:'wrap',height:'55px'}}>

        {props.knop.map( item => <div style={{display:'flex',gap:'20px',alignItems:'center'}}>
          <NavLink to={`/items2/${item.id}`}><props.CButton style={{minWidth:'60px',height:'60px'}} key={item.id} >{item.name}</props.CButton></NavLink>
        <props.CButton  onClick={() => {props.setKnop(old => old.filter(el => el.id !== item.id))}}><DeleteForeverIcon fontSize='large'/></props.CButton></div>
        )}

        <div style={{display:'flex',flexGrow:1,}}></div>
        
    </div>
    <div className="Bukvi" style={{paddingLeft:'150px',marginTop:'75px'}}>Расписание</div>
    <Outlet/>
    </>
}
        

export default Tablichki2;