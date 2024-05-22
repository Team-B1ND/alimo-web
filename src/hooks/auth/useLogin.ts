import React, { useState } from "react";
import { showToast } from "src/libs/toast/swal";
import { useNavigate } from "react-router-dom";
import axios,{ AxiosError } from "axios";
import CONFIG from "src/config/config.json";
import token from "src/libs/token/token";
import { LoginResponse } from "src/types/login/login.type";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "src/constants/token/token.constants";


const Uselogin = () => {
  const navigate = useNavigate();
  const [idError, setIdError] = useState(false);
  const [Loginloading, SetLoginloading] = useState(false);
  const [clickName, setClickName] = useState<string>("");
  const [idValue, setIdValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [isShowPswd, setIsShowPswd] = useState(false);

  const InputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idRegex = /^[A-Za-z0-9@.]+$/;
    const koreanRegex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; // 한글을 포함하는 정규식

    if (idRegex.test(e.target.value) || e.target.value === "") {
      setIdValue(e.target.value);
      setIdError(false); // 에러 상태 초기화
    } else if (koreanRegex.test(e.target.value)) {
      setIdError(true); // 한글 입력 시 에러 상태 활성화
    }
  };

  const InputChangePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      LoginButton();
    }
  };

  const LoginButton = async () => {
    SetLoginloading(true);
    if (idValue === "" || passwordValue === "") {
      SetLoginloading(false);
      showToast("error", "아이디와 비밀번호를 입력해주세요.");
    } else {
      //DAuth

      try {
        const {
          data: {
            data: { location },
          },
        } = await axios.post(`${CONFIG.DAuth}`, {
          id: idValue,
          pw: passwordValue,
          clientId: `${CONFIG.clientId}`,
          redirectUrl: `${CONFIG.redirectUrl}`,
        });
       
        
        const code = location.split("=")[1].split("&state")[0];
        await axios
          .post<LoginResponse>(`${CONFIG.serverUrl}/sign-in/dodam`, {
            code,
            fcmToken: null,
          })
          .then((res) => {
            token.setToken(ACCESS_TOKEN_KEY, res.data.data.accessToken);
            token.setToken(REFRESH_TOKEN_KEY, res.data.data.refreshToken);
            showToast("success", "로그인 성공");
            navigate("/");
           
            
          });
      } catch (error) {
        SetLoginloading(false);
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            showToast("error", "알맞지 않은 id 혹은 비밀번호 입니다");
          } else {
            showToast("error", "통신 오류가 발생했습니다.");
          }
        }
       
      }
    }
  };

  return {
    Loginloading,
    idValue,
    isShowPswd,
    passwordValue,
    clickName,
    idError,
    setClickName,
    handleKeyDown,
    setIdValue,
    setIsShowPswd,
    InputChange,
    LoginButton,
    InputChangePw,
  };
};

export default Uselogin;
