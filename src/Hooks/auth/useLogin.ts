import React, { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { SHA512 } from "crypto-js";
import token from "src/lib/token/token";
import { LoginResponse } from "src/types/login/login.type";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";

const Uselogin = () => {
  const navigate = useNavigate();
  const [Loginloading, SetLoginloading] = useState<boolean>(false);
  const [clickName, setClickName] = useState<string>("");
  const [idValue, setIdValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isShowPswd, setIsShowPswd] = useState<boolean>(false);
  const hash = SHA512(passwordValue).toString();

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (clickName === "Id") {
      const idRegex = /^[A-Za-z0-9@.]+$/;

      if (idRegex.test(e.target.value) || e.target.value === "") {
        setIdValue(e.target.value);
      }
    } else {
      const passwordRegex = /^\s*[\w!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+$/;

      if (passwordRegex.test(e.target.value) || e.target.value === "") {
        setPasswordValue(e.target.value);
      }
    }
  };

  const redirectUrlvalue = `${CONFIG.serverUrl}/redirect`;
  const LoginButton = async () => {
    SetLoginloading(true);
    if (idValue === "" || passwordValue === "") {
      showToast("error", "아이디와 비밀번호를 입력해주세요.");
    } else {
      //DAuth
      const DAuthPromise = axios.post(`${CONFIG.DAuth}`, {
        id: idValue,
        pw: hash,
        clientId: `${CONFIG.clientId}`,
        redirectUrl: redirectUrlvalue,
      });

      try {
        const [DAuth] = await Promise.all([DAuthPromise]);
        const url = DAuth.data.data.location;
        const location = url.split("=")[1];
        const lastElement = location.split("&state")[0];
        const response = await axios.post<LoginResponse>(
          `${CONFIG.serverUrl}/sign-in/dodam`,
          {
            code: lastElement,
            fcmToken: null,
          }
        );
        const ResponseData = response.data.data;
        const refreshToken = ResponseData.refreshToken;
        const accessToken = ResponseData.accessToken;
        token.setToken(ACCESS_TOKEN_KEY, accessToken);
        token.setToken(REFRESH_TOKEN_KEY, refreshToken);
        showToast("success", "로그인 성공");
        navigate("/");
      } catch (error) {
        SetLoginloading(false);
        showToast("error", "통신 오류가 발생했습니다.");
      }
    }
  };

  return {
    Loginloading,
    idValue,
    setIdValue,
    passwordValue,
    clickName,
    setClickName,
    isShowPswd,
    setIsShowPswd,
    InputChange,
    LoginButton,
  };
};

export default Uselogin;
