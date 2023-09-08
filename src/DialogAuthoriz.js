import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



export default function DialogAuthoriz(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

  return (
    <div>

      <props.CButton2 onClick={handleClickOpen}>Регистрация</props.CButton2>
      <Dialog 
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ sx: { borderRadius: "45px" } }}
        
      >
        <DialogTitle id="alert-dialog-title" className='podAuthor'></DialogTitle>
            <DialogContent className='Author'id="alert-dialog-description" >
                <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:'25px'}}>
              <div className='Bukvi' style={{marginTop:'60px',marginBottom:'30px'}}>Регистрация</div>
              <div style={{height:'2px',width:'420px',backgroundColor:'grey',marginBottom:'30px'}}></div>
              <input className='input' placeholder="Логин" ></input>
              <input className='input' placeholder="Пароль" style={{marginBottom:'10px'}}></input>
              <props.CButton2>Зарегистрироваться</props.CButton2>
              
              </div>
            </DialogContent>
      </Dialog>
    </div>
  );
}