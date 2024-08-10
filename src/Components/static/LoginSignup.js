// src/components/LoginSignup.js
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Link, Box } from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import logg2 from '../../Assets/Images/l1.png';
import axios from 'axios';

const LoginSignup = () => {
  const { login } = useAuth();
  const [credentials, setCredentials] = useState({ username: '', email: '', password: '', Confirm_Password: '', phone: '' });
  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Credentials:', credentials);

    const validateEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const validatePhone = (phone) => /^\d{10}$/.test(phone); // Assuming a 10-digit phone number for validation

    if (!validateEmail(credentials.email)) {
      setEmailError('Invalid email format');
      return;
    } else {
      setEmailError('');
    }

    if (credentials.password !== credentials.Confirm_Password) {
      setPasswordError("Passwords don't match");
      return;
    } else {
      setPasswordError('');
    }

    if (!validatePhone(credentials.phone)) {
      setPhoneError('Invalid phone number');
      return;
    } else {
      setPhoneError('');
    }

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', {
        email: credentials.email,
        password: credentials.password,
        phone: credentials.phone,
        username: credentials.username,
      });

      if (response.status === 201) {
        login(credentials.username);
        navigate('/');
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup error (e.g., show error message)
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
            height: "50%",
            borderRadius: "10px",
            margin: "10px",
            width: "800px",
          }}
        />
      </div>
      <div style={{
        width: '50%',
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
          <Typography component="h1" variant="h5" sx={{ mb: 2 }}>Sign Up</Typography>

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
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              error={!!emailError}
              helperText={emailError}
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
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="Confirm_Password"
              label="Confirm Password"
              name="Confirm_Password"
              type="password"
              value={credentials.Confirm_Password}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="phone"
              label="Phone Number"
              name="phone"
              type="tel"
              error={!!phoneError}
              helperText={phoneError}
              autoComplete="tel"
              value={credentials.phone}
              onChange={handleChange}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: 'black' }}>
              Sign Up
            </Button>
            <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
              Already have an account?{' '}
              <Link
                component={RouterLink}
                to="/login"
                color="primary"
                sx={{ textDecoration: 'none' }}
              >
                Login here
              </Link>
            </Typography>
          </form>
        </Box>
      </div>
    </div>
  );
};

export default LoginSignup;
