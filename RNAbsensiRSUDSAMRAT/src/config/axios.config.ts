import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rsudsamrat.site:9999/api/v1/dev/',
  timeout: 10000,
});

export default api;