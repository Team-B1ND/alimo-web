import axios, { AxiosInstance } from "axios";
import CONFIG from "src/config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${CONFIG.serverUrl}`, // 기본 서버 주소 입력
  headers: {
    Authorization: `#`,
  },
});
