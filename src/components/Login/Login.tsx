import React from "react";
import { useState } from "react";
import "src/style/Login.style/Login.css";
import AlimoImage from "src/img/Alimo-image.png";
import { click } from "@testing-library/user-event/dist/click";

const Login = () => {
  const [isInputClicked, setIsInputClicked] = useState(false);
  const [clickName, setClickName] = useState("");
  
  const onFocus = () => setIsInputClicked(true);
  const onBlur = () => setIsInputClicked(false);

  return (
    <div>
      <div className="LoginPage">
        <div className="LoginBox">
          <img src={AlimoImage} alt="AlimoImage" className="AlimoImage"></img>
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
              <input
                type="text"
                className="Login-Id"
                placeholder={
                  clickName === "Id" && isInputClicked === true ? "" : "이메일"
                }
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={() => setClickName("Id")}
              />
              <input
                type="password"
                className="Login-Password"
                placeholder={
                  clickName === "PassWord" && isInputClicked === true
                    ? ""
                    : "비밀번호"
                }
                onFocus={onFocus}
                onBlur={onBlur}
                onClick={() => setClickName("PassWord")}
              />
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
