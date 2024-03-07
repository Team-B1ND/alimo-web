import axios, { AxiosInstance } from "axios";
import CONFIG from "src/config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${CONFIG.serverUrl}`, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MDk3MTE3MzksImV4cCI6MTcwOTcxMzUzOX0.oyiEgvyKdER3-2PmvHwILbLGhFr5uB7DbClHD12FN_tvL2CMvkgKebkLrBPKwo9KHw8mAeeoUAMl_ySxA1LbwA`,
  },
});
