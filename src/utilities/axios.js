import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  timeout: 15000,
  headers: { "Content-Type": "application/json"},
});

export default instance