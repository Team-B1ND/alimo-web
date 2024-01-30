import { useState } from "react";
import { showToast } from "src/lib/Toast/Swal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import CONFIG from "config.json"

const Uselogin = () => {
  const navigate = useNavigate();
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [clickName, setClickName] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isShowPswd, setIsShowPswd] = useState(false);
  const [isIdButton, setIsIdButton] = useState(false);
  const [isPasswordButton, setIsPasswordButton] = useState(false);
  const [idDisplayBlock, setIdDisplayBlock] = useState("none");
  const [passwordDisplayBlock, setPasswordDisplayBlock] = useState("none");

  const IdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const idRegex = /^[A-Za-z0-9]+$/;

    if (idRegex.test(e.target.value) || e.target.value === "") {
      setIdValue(e.target.value);
      e.target.value === "" ? setIsIdButton(false) : setIsIdButton(true);
      e.target.value === ""
        ? setIdDisplayBlock("none")
        : setIdDisplayBlock("block");
    }
  };
  const PasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^\s*[\w!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?]+$/;

    if (passwordRegex.test(e.target.value) || e.target.value === "") {
      setPasswordValue(e.target.value);
      e.target.value === ""
        ? setIsPasswordButton(false)
        : setIsPasswordButton(true);
      e.target.value === ""
        ? setPasswordDisplayBlock("none")
        : setPasswordDisplayBlock("block");
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
    setIsIdButton,
    passwordValue,
    isInputClicked,
    clickName,
    setClickName,
    isShowPswd,
    setIsShowPswd,
    isIdButton,
    isPasswordButton,
    idDisplayBlock,
    passwordDisplayBlock,
    IdChange,
    PasswordChange,
    LoginButton,
  };
};
export default Uselogin;
