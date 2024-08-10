import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import logg2 from '../../Assets/Images/l1.png'; 

const Login = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const navigate = useNavigate();    

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);
    login(credentials.username); 
    navigate('/main'); 
  };

  return (
    <div
      style={{
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <img
          src={logg2}
          alt='Admin logo'
          style={{
            height: "70%",
            borderRadius: "10px",
            margin: "10px",
            width:"850px"
          }}
        />
      </div>

      <div style={{
        width: '40%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Box 
          sx={{ 
            width: '100%', 
            maxWidth: '400px', 
            p: 3, 
            border: '2px solid #D3D3D3',
            borderRadius: '10px', 
            backgroundColor: 'white', 
            boxShadow: 3 
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>Admin Login</Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={credentials.username}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={credentials.password}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}>
              Login
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              <Link 
                component={RouterLink} 
                to="/signup" 
                color="primary"
                sx={{ textDecoration: 'none',marginLeft:'150px'}}  
                >
                Forgot Password ?{' '}
               {/* for */}
              </Link>
            </Typography>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default Login;
