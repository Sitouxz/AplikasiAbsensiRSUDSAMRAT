// utils/axiosConfig.js

import axios from "axios";
import Cookies from "js-cookie";
import store from "../authState/store";
import { logout } from "../authState/authSlice";

export const api = axios.create({
  baseURL: "http://rsudsamrat.site:9999",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const apiLogin = axios.create({
  baseURL: "http://localhost:3001",
});

export const apiCheckToken = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    Authorization: `Bearer ${Cookies.get("access_token")}`,
  },
});
