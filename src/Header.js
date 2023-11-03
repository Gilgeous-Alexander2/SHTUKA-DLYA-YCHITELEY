import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import TemporaryDrawer from './Drawer';
import DialogAuthoriz from './DialogAuthoriz';
import { CButton } from './Components/CButton';
import { SearchIconWrapper,Search,StyledInputBase } from './Components/SearchDialog';
import { deepOrange } from '@mui/material/colors';



function Header(props){


    return <>
      <div className='header'>
        <div style={{display:'flex',gap:'50px'}}>
          <TemporaryDrawer setTab={props.setTab} tab={props.tab}/>
            <div style={{display:'flex',gap:'20px'}}>
              <CButton><SearchIcon fontSize='large'/></CButton>
              <div style={{display:'flex',alignItems:'center',fontSize:'25px',fontWeight:'600',color:'white'}}>Bbook</div>
            </div>
        </div>
  
        <div style={{display:'flex',flexGrow:'1'}}></div>
        <div style={{display:'flex',gap:'30px',alignItems:'center'}}>
          <Search sx={{backgroundColor:'white',borderRadius:'45px',"&:hover":{bgcolor: 'white'}}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {props.AuthState? <><DialogAuthoriz setAuthState={props.setAuthState}></DialogAuthoriz>
          <div className='Bukvi' style={{fontSize:'17px'}}>{props.userData.name}</div></> :
            <DialogAuthoriz setAuthState={props.setAuthState}></DialogAuthoriz>}
        </div>
      </div>
      </>
  }

  export default Header;