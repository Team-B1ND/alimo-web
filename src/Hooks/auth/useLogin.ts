import React, { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import { SHA512 } from "crypto-js";

const Uselogin = () => {
  const navigate = useNavigate();
  const [clickName, setClickName] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isShowPswd, setIsShowPswd] = useState(false);
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

  const redirectUrlvalue = `${CONFIG.serverUrl}redirect`;
  const LoginButton = async () => {
    if (idValue === "" || passwordValue === "") {
      showToast("error", "아이디와 비밀번호를 입력해주세요.");
    } else {
      try {
        const DAuth = await axios.post(`${CONFIG.DAuth}`, {
          id: idValue,
          pw: hash,
          clientId: `${CONFIG.clientId}`,
          redirectUrl: redirectUrlvalue,
        });
        const url = DAuth.data.data.location;
        const location = url.split("=")[1]; 
        const lastElement = location.split("&state")[0];
        console.log(lastElement);
        const response = await axios.post(`${CONFIG.serverUrl}sign-in/dodam`, {
          code: lastElement,
          fcmToken : "",
        });
        console.log(response);
        showToast("success", "로그인 성공");
        navigate("/main");
      } catch (error) {
        showToast("error", "통신 오류가 발생했습니다.");
      }
    }
  };

  return {
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
