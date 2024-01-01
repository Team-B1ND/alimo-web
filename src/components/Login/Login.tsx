import React from "react";
import { useState } from "react";
import "src/style/Login.style/Login.css";
import Null from "src/img/Null-image.png";
import Logo from "src/img/Alimo-image.png";
import IdCancel from "src/img/Id-Cancel.png";
import PasswordHide from "src/img/Password-Hide.png";
import PasswordShow from "src/img/Password-Show.png";
import "src/style/Login.style/Login.css";

const Login = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [clickName, setClickName] = useState("");
  const [idValue, setIdValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isShowPswd, setIsShowPswd] = useState(false);
  const [isIdButton, setIsIdButton] = useState(false);
  const [isPasswordButton, setIsPasswordButton] = useState(false);

  const onFocus = () => setIsInputClicked(true);
  const onBlur = () => setIsInputClicked(false);
  const onIdChange = (e: any) => {
    setIdValue(e.target.value);
    e.target.value === "" ? setIsIdButton(false) : setIsIdButton(true);
  };
  const onPasswordChange = (e: any) => {
    setPasswordValue(e.target.value);
    e.target.value === ""
      ? setIsPasswordButton(false)
      : setIsPasswordButton(true);
  };

  return (
    <div>
      <div className="LoginPage">
        <div className="LoginBox">
          <img src={Logo} alt="AlimoImage" className="AlimoImage" />
          <div className="LoginWrap">
            <div className="LogoWrap">
              <div className="Logo">
                <h1 className="Logo-Alimo">ALIMO</h1>
                <div className="Logo-Dot"></div>
                <h3 className="Logo-Admin">Admin</h3>
              </div>
              <h2 className="Logo-Text">대소고의 모든 소식</h2>
            </div>
            <div className="LoginInputWrap">
              <label className="IdWrap">
                <input
                  type="text"
                  value={idValue}
                  className="Login-Id"
                  placeholder={
                    clickName === "Id" && isInputClicked === true
                      ? ""
                      : "이메일"
                  }
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onClick={() => setClickName("Id")}
                  onChange={onIdChange}
                />
                <button
                  className="Login-Id-Btn"
                  onClick={() => {
                    setIdValue("");
                    setIsIdButton(false);
                  }}>
                  <img
                    src={
                      clickName === "Id" && isIdButton === true
                        ? IdCancel
                        : Null
                    }
                    alt=""
                  />
                </button>
              </label>
              <label className="PasswordWrap">
                <input
                  type={isShowPswd === true ? "text" : "password"}
                  value={passwordValue}
                  className="Login-Password"
                  placeholder={
                    clickName === "PassWord" && isInputClicked === true
                      ? ""
                      : "비밀번호"
                  }
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onClick={() => setClickName("PassWord")}
                  onChange={onPasswordChange}
                />
                <button
                  className="Login-Password-Btn"
                  onClick={() => setIsShowPswd((current) => !current)}>
                  <img
                    src={
                      clickName === "PassWord" && isPasswordButton === true
                        ? isShowPswd === true
                          ? PasswordShow
                          : PasswordHide
                        : Null
                    }
                    alt=""
                  />
                </button>
              </label>
            </div>
            <div className="LoginBtnWrap">
              <button className="Login-Btn">도담도담 계정으로 로그인</button>
            </div>
          </div>
        </div>
      </div>
      <p className="Made-By-B1nd">made by B1ND</p>
    </div>
  );
};

export default Login;
