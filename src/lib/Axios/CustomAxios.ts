import axios, { AxiosInstance } from "axios";
import CONFIG from "src/config/config.json";

export const customAxios: AxiosInstance = axios.create({
  baseURL: `${CONFIG.serverUrl}`, // 기본 서버 주소 입력
  headers: {
    Authorization: `Bearer eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6Ik1FTUJFUiIsImlhdCI6MTcwODcwMDg1NCwiZXhwIjoxNzA4NzAyNjU0fQ.cuV7n8KLWEoGZnEbymHE1kD-sr_YgItC3k-DhnBvCK3pRO3YPF6fLs1Ro73QuVjRvtwMXnUnxxQIuRWkNxhXoQ`,
  },
});
