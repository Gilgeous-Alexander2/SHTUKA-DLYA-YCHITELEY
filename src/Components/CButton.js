import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const CButton = styled(Button)`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  min-width: 45px;
  max-width: 45px;
  height:45px;
  background-color:#F5F5F5;
  color:black;
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