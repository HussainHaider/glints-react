import React from 'react';
import { useFormik } from 'formik';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import {LoginBlock} from './styles';
import {LoginForm} from './styles';

import { useNavigate } from "react-router-dom";

import * as yup from 'yup';
import * as api from './api';


const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    // .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: 'hassanhaider490@gmail.com',
      password: '12345',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      api.signIn(values).then((response) => {
        let resp = response.data;
        window.localStorage.setItem('user', JSON.stringify({id: resp.data.id, token: resp.token}));
        navigate("/", { replace: true });
      }).catch((err) => {
        console.log(err);
      });
    },
  });

  return (
    <LoginBlock variant="outlined" square >
      <Typography variant="h2">Login To Start!</Typography>
      <LoginForm onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </LoginForm>
    </LoginBlock>
  );
};


export default Login;