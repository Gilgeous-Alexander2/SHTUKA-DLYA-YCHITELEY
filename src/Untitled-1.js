import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{  
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form"  noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}





import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CButton2 } from './Components/CButton2';



export default function DialogAuthoriz(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const [login,setLogin] = React.useState("");
      const [password,setPassword] = React.useState("");

  return (
    <div>

      <CButton2 onClick={handleClickOpen}>Регистрация</CButton2>
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

                <input className='input' placeholder="Логин" value={login} onChange={(e) => {setLogin(e.target.value)}}></input>
                <input className='input' placeholder="Пароль" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <CButton2 onClick={() => { handleClose()
                  const answer = {
                    id: 1,
                    name: "ыыыыы",
                    token: "fcgvhbjnbmvcfbvmnbvgfhhjjnbhvgf"
                  }
                  props.setAuthState(answer);
                  localStorage.setItem("userData",JSON.stringify(answer))
                }}>Зарегистрироваться</CButton2>
              </div>
            </DialogContent>
      </Dialog>
    </div>
  );
}















import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CButton2 } from './Components/CButton2';



export default function DialogAuthoriz(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };

      const [login,setLogin] = React.useState("");
      const [password,setPassword] = React.useState("");

  return (
    <div>

      <CButton2 onClick={handleClickOpen}>Регистрация</CButton2>
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

                <input className='input' placeholder="Логин" value={login} onChange={(e) => {setLogin(e.target.value)}}></input>
                <input className='input' placeholder="Пароль" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <CButton2 onClick={() => { handleClose()
                  const answer = {
                    id: 1,
                    name: "ыыыыы",
                    token: "fcgvhbjnbmvcfbvmnbvgfhhjjnbhvgf"
                  }
                  props.setAuthState(answer);
                  localStorage.setItem("userData",JSON.stringify(answer))
                }}>Зарегистрироваться</CButton2>
              </div>
            </DialogContent>
      </Dialog>
    </div>
  );
}