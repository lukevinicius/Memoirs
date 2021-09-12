import axios from 'axios';

const api = axios.create({
  baseURL: 'https://memoirs-api.herokuapp.com/',
});

export { api };
