import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CButton2 = styled(Button)`
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