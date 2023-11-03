import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { CButton2 } from './Components/CButton2';

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



export default function DialogAuthoriz(props) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [login, setLogin] = React.useState("");
  const [password, setPassword] = React.useState("");



  return (
    <div>

      <CButton2 onClick={handleClickOpen}>Регистрация</CButton2>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"

      >
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
              Регистрация
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Логин"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={(e) => { setLogin(e.target.value) }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Пароль"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => { setPassword(e.target.value) }}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: 'red' }}
                onClick={() => {
                  handleClose()
                  const answer = {
                    id: 1,
                    name: login,
                    token: "fcgvhbjnbmvcfbvmnbvgfhhjjnbhvgf"
                  }
                  props.setAuthState(answer);
                  localStorage.setItem("userData", JSON.stringify(answer))
                }}
              >
                Зарегистрироваться
              </Button>
              <div style={{ height: '50px' }}></div>
            </Box>
          </Box>
        </Container>
      </Dialog>
    </div>
  );
}