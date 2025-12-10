// import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert';
import { useState } from 'react';

const BoxStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // height: '100vh',
    // backgroundColor: '#f5f5f5',
}

const Login = () => {
    const [loading, setLoading] = useState(false);
    return (
        <Container maxWidth="xs">
            <Box sx={BoxStyles}>
                <Typography variant="h4" gutterBottom>
                    Login
                </Typography>

                <Box sx={{ mt: 2 }}>
                    <TextField
                        name="email"
                        label="email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin='normal' />
                    <TextField
                        label="Contraseña"
                        name="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin='normal' />

                    <Button variant="contained" color="primary" type='submit' fullWidth>
                        {loading ? 'Cargando...' : 'Iniciar Sesión'}
                    </Button>
                </Box>


                <Alert severity="error">This is an error alert — check it out!</Alert>
            </Box>
        </Container>
    );
};

export default Login;
