import axios, { AxiosRequestConfig } from "axios";
import CONFIG from "src/config/config.json";
import { ACCESS_TOKEN_KEY, REQUEST_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "../token/token";
import ResponseHandler from "./ResponseHandler";
import requestHandler from "./requestHandler"; // 소문자로 시작하는 것이 일반적인 컨벤션입니다.

const createAxiosInstance = (config?: AxiosRequestConfig) => {
  const baseConfig: AxiosRequestConfig = {
    headers: { "Content-Type": "application/json" },
  };
  return axios.create({
    ...baseConfig,
    ...config,
  });
};

export const Alimov1Axios = createAxiosInstance({
  baseURL: CONFIG.serverUrl,
  headers: {
    [REQUEST_TOKEN_KEY]: `Bearer ${token.getToken(ACCESS_TOKEN_KEY)}`,
  },
});

export const Alimov1AxiosSetAccessToken = (newToken: string) => {
  Alimov1Axios.defaults.headers.common[REQUEST_TOKEN_KEY] = `Bearer ${newToken}`;
};

Alimov1Axios.interceptors.request.use(requestHandler as any, (response) => response);
Alimov1Axios.interceptors.response.use((response) => response, ResponseHandler);
