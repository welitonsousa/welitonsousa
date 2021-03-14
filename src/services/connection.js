import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://us-central1-cv-weliton.cloudfunctions.net/api',
  timeout: 30000,
});

export { Api };
