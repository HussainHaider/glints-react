
import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  timeout: 15000,
  headers: { "Content-Type": "application/json"},
});

export const setHeaders = () => {
  const user = localStorage.getItem('user');
  let value = JSON.parse(user);
  if (value) {
    instance.defaults.headers.common['authorization'] = value.token;
  } else {
    instance.defaults.headers.common['authorization'] = null;
  }
};

(function() {
  setHeaders();
})();

export default instance