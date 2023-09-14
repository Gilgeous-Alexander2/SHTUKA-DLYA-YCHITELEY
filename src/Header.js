import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import TemporaryDrawer from './Drawer';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import DialogAuthoriz from './DialogAuthoriz';
import AlertDialogiii from './AUTHORIZ2';

const CButton2 = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  height: 35px;
  background-color:#F5F5F5;
  color:black;
  padding: 0px 15px ;
  border-radius: 45px;
  transition: 0.5s;
  box-sizing: border-box;
  overflow: hidden;

  :hover {
    background-color:#F5F5F5;
    transform: scale(1.05);
  }
  :active{
    transition: 0.1s;
    transform: scale(1);
   }
`;



function Header(props){

  const [AuthState,setAuthState] = React.useState(null);

  React.useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setAuthState(userData);
  },[])

    return <>
      <div className='header'>
        <div style={{display:'flex',gap:'50px'}}>
          <TemporaryDrawer/>
            <div style={{display:'flex',gap:'20px'}}>
              <props.CButton><SearchIcon fontSize='large'/></props.CButton>
              <div style={{display:'flex',alignItems:'center',fontSize:'25px',fontWeight:'600',color:'white'}}>Bbook</div>
            </div>
        </div>
  
        <div style={{display:'flex',flexGrow:'1'}}></div>
        <div style={{display:'flex',gap:'10px',alignItems:'center'}}>
          <input style={{borderRadius:'25px',height:'25px',width:'200px',border: 'none'}}></input>
          <SearchIcon/>
          <DialogAuthoriz CButton2={CButton2} setAuthState={setAuthState}></DialogAuthoriz>
          <div>{AuthState? <div className='Bukvi' style={{fontSize:'17px'}}>Вы вошли!</div> : null}</div>

        </div>
        
      </div>
      </>
  }

  export default Header;