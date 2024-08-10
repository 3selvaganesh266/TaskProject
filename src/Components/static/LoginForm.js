import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import logg2 from '../../Assets/Images/l1.png';
import axios from 'axios';

const LoginForm = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  if(credentials.email==='admin@gmail.com' && credentials.password==='admin@123')
    {
      navigate('/main');
      return;
    }
    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', {
        email: credentials.email,
        password: credentials.password,
      });

      if (response.status === 200) {
        login(response.data.user.username);
        navigate('/');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Invalid credentials');
    }
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
          alt='logo'
          style={{
            height: "70%",
            borderRadius: "10px",
            margin: "10px",
            width: "850px"
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
            backgroundColor: '#f0f0', 
            boxShadow: 3 
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>Welcome Back</Typography>

          <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={credentials.email}
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
            {error && (
              <Typography variant="body2" color="error" sx={{ mt: 1 }}>
                {error}
              </Typography>
            )}
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}>
              Login
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Don't have an account?{' '}
              <Link 
                component={RouterLink} 
                to="/signup"
                color="primary"
                sx={{ textDecoration: 'none' }} 
              >
                Sign up here
              </Link>
            </Typography>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default LoginForm;
