import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import TableViewIcon from '@mui/icons-material/TableView';
import BuildIcon from '@mui/icons-material/Build';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { CButton } from './Components/CButton';
import { NavLink } from "react-router-dom";
import AddIcon from '@mui/icons-material/Add';
import GridOnIcon from '@mui/icons-material/GridOn';


function TemporaryDrawer(props) {
  const  [drawer,setDrawer] = React.useState(false)
  

  return<>
  <CButton style ={{  background: 'linear-gradient(#ff0000, #ff9c9c)'}}onClick={() => {
      setDrawer(true)
    }}><MenuIcon fontSize='large'/></CButton>
    <Drawer
      anchor={'left'}
      open={drawer}
      onClose={ () => {
        setDrawer(false)
      }}
    >
    <div style={{display:'flex',flexDirection:'column',marginTop:'60px',gap:'40px',paddingLeft:'40px',paddingRight:'60px'}}>

      <div style={{display:'flex',gap:'20px'}}>
        <NavLink to="/items2" ><CButton onClick={ () => {setDrawer(false); props.setTab(2)
        }}><TableViewIcon /></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Расписание</div>
      </div>

      <div style={{display:'flex',gap:'20px'}}>
        <NavLink to="/items4" ><CButton onClick={ () => {setDrawer(false); props.setTab(4)
        }}><GridOnIcon/></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Список классов</div>
      </div>

      <div style={{display:'flex',gap:'20px'}}>
        <NavLink to="/items3" ><CButton onClick={ () => {setDrawer(false); props.setTab(3)
        }}><BorderColorIcon/></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Редактор расписания</div>
      </div>

      <div style={{display:'flex',gap:'20px'}}>
        <NavLink to="/items1" ><CButton onClick={ () => {setDrawer(false); props.setTab(1)
                }}><AddIcon fontSize="large" /></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Добавить класс</div>
      </div>
   
    </div>
    
  </Drawer>
  </>

}

export default TemporaryDrawer