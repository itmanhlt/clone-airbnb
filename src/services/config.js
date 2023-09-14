import axios from "axios";
import { store } from "../redux/store";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";
import { localService } from "./LocalService";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";

export const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCBTw6FuZyAwOSIsIkhldEhhblN0cmluZyI6IjE4LzA1LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxNTk5MDQwMDAwMCIsIm5iZiI6MTY5MjI5MTYwMCwiZXhwIjoxNzE2MTM4MDAwfQ.qCglC_oyHM79HVc5mRXJfocVkww4VUpWO7ug7MWtJoY";

export const configHeaders = () => {
  return {
    TokenCyberSoft,
    ["token"]: localService.get()?.token,
  };
};

export const https = axios.create({
  baseURL: BASE_URL,
  headers: configHeaders(),
});

// Add a request interceptor
https.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    store.dispatch(setLoadingOn());
    return config;
  },
  function (error) {
    // Do something with request error
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);

// Add a response interceptor
https.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch(setLoadingOff());
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    store.dispatch(setLoadingOff());
    return Promise.reject(error);
  }
);
