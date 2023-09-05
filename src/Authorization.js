import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

const CButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  height: 35px;
  background-color:#F5F5F5;
  padding: 0px 15px ;
  color:black;
  border-radius: 45px;
  transition: 0.5s;
  box-sizing: border-box;
  overflow: hidden;

  :hover {
    background-color: #f35454;
    transform: scale(1.05);
  }
  :active{
    transition: 0.1s;
    transform: scale(1);
   }
`;

function Authorization(){

    return<>
    <div className='back'>

      <div className="Author">
          <div className="podAuthor"></div>
          <div style={{display:'flex',flexDirection:'column',flexGrow:1,alignItems:'center',justifyContent:'center',gap:'25px'}}>
              <div className='Bukvi'>Регистрация</div>
              <input className='input' placeholder="Логин"></input>
              <input className='input' placeholder="Пароль"></input>
              <CButton>Зарегистрироваться</CButton>
              
          </div>
      </div>
    </div>
      
    </>
}


export default Authorization;