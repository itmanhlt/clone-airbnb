import axios from "axios";
import { store } from "../redux/store";
import { setLoadingOff, setLoadingOn } from "../redux/reducers/spinnerSlice";
import { localService } from "./LocalService";

export const BASE_URL = "https://airbnbnew.cybersoft.edu.vn";

export const TokenCyberSoft =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0MSIsIkhldEhhblN0cmluZyI6IjEyLzA5LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY5NDQ3NjgwMDAwMCIsIm5iZiI6MTY2NTI0ODQwMCwiZXhwIjoxNjk0NjI0NDAwfQ.SUELcPShU58ZkNS3CbFDhM02KMzll9j00ndjVSaiJ8Q";

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
