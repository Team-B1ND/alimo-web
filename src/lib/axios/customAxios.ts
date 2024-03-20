import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "../token/token";
import ResponseHandler from "./ResponseHandler";
import requestHandler from "./requestHandler"; 
import Token from "src/lib/token/token";

const createAxiosInstance = (config?: AxiosRequestConfig) => {
const ACCESS_TOKEN=Token.getToken(ACCESS_TOKEN_KEY);
  const baseConfig: AxiosRequestConfig = {
    headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`
      }
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const alimoV1Axios = createAxiosInstance({
  baseURL: CONFIG.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const alimoV1AxiosSetAccessToken = (newToken: string) => {
  alimoV1Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

alimoV1Axios.interceptors.request.use(requestHandler as any, (response) => response);
alimoV1Axios.interceptors.response.use((response) => response, ResponseHandler);
