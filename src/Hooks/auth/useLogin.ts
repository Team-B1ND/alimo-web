import React, { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import CONFIG from "config.json"

const Uselogin = () => {
  const navigate = useNavigate();
  const [clickName, setClickName] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isShowPswd, setIsShowPswd] = useState(false);

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (clickName === "Id") {
      const idRegex = /^[A-Za-z0-9]+$/;

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
  const LoginButton = async () => {
    if (idValue === "" || passwordValue === "") {
      showToast("erorr", "아이디와 비밀번호를 써주세요");
    } else {
      try {
        const response = await axios.post(`#`, {
          email: idValue,
          password: passwordValue,
        });
        if (response.status === 200) {
          showToast("success", "로그인 성공");
          navigate("/main");
        } else {
          showToast("error", "로그인 실패");
        }
      } catch (error) {
        showToast("error", "통신오류");
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
