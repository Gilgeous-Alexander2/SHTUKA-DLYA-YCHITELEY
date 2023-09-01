import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import TableViewIcon from '@mui/icons-material/TableView';
import BuildIcon from '@mui/icons-material/Build';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { BrowserRouter,NavLink, Routes, Route } from "react-router-dom";
import { red } from '@mui/material/colors';
const CButton = styled(Button)`
  color: #20b2aa;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  min-width: 45px;
  max-width: 45px;
  height:45px;
  background-color:#F5F5F5;
  color:black;
  fontFamily:Montserrat; 
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





function TemporaryDrawer() {
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
        <NavLink to="/items2" ><CButton onClick={ () => {setDrawer(false)
        }}><TableViewIcon /></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Расписание</div>
      </div>

      <div style={{display:'flex',gap:'20px'}}>
        <NavLink to="/items" ><CButton onClick={ () => {setDrawer(false)
        }}><BuildIcon /></CButton></NavLink>
        <div style={{alignItems:'center',display:'flex'}}> Редактор</div>
      </div>
    
    </div>
    
  </Drawer>
  </>

}

export default TemporaryDrawer