import React from "react";
import { useState } from "react";
import "src/style/Login.style/Login.css";
import NullImage from "src/img/Null-image.png";
import Logo from "src/img/Alimo-image.png";
import IdCancel from "src/img/Id-Cancel.png";
import PasswordHide from "src/img/Password-Hide.png";
import PasswordShow from "src/img/Password-Show.png";
import * as S from "src/style/Login.style/Login.style";
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
    <S.LogoPageWrap>
      <S.LoginPage>
        <S.LoginBox>
          <S.AlimoImg src={Logo} alt="AlimoImage" />
          <S.LoginWrap>
            <S.LogoWrap>
              <S.Logo>
                <S.LogoAlimo>ALIMO</S.LogoAlimo>
                <S.LogoDot></S.LogoDot>
                <S.LogoAdmin>Admin</S.LogoAdmin>
              </S.Logo>
              <S.LogoText>대소고의 모든 소식</S.LogoText>
            </S.LogoWrap>
            <S.LoginInputWrap>
              <S.InputWrap>
                <S.Input
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
                <S.InputBtn
                  onClick={() => {
                    setIdValue("");
                    setIsIdButton(false);
                  }}>
                  <img
                    src={
                      clickName === "Id" && isIdButton === true
                        ? IdCancel
                        : NullImage
                    }
                    alt=""
                  />
                </S.InputBtn>
              </S.InputWrap>
              <S.InputWrap>
                <S.Input
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
                <S.InputBtn
                  onClick={() => setIsShowPswd((current) => !current)}>
                  <img
                    src={
                      clickName === "PassWord" && isPasswordButton === true
                        ? isShowPswd === true
                          ? PasswordShow
                          : PasswordHide
                        : NullImage
                    }
                    alt=""
                  />
                </S.InputBtn>
              </S.InputWrap>
            </S.LoginInputWrap>
            <S.LoginBtnWrap>
              <S.LoginBtn>도담도담 계정으로 로그인</S.LoginBtn>
            </S.LoginBtnWrap>
          </S.LoginWrap>
        </S.LoginBox>
      </S.LoginPage>
      <S.MadeByB1nd>made by B1ND</S.MadeByB1nd>
    </S.LogoPageWrap>
  );
};

export default Login;
