// utils/axiosConfig.js

import axios from 'axios';

const api = axios.create({
  baseURL: 'http://rsudsamrat.site:9999', // Replace this with your API base URL
  timeout: 10000, // Set a default timeout for requests (in milliseconds)
  headers: {
    'Content-Type': 'application/json' // Set a default content type
    // Add any other default headers you want to include
  }
});

export default api;
