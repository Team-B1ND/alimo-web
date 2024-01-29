import Logo from "src/img/Alimo-image.png";
import IdCancel from "src/img/Id-Cancel.png";
import PasswordHide from "src/img/Password-Hide.png";
import PasswordShow from "src/img/Password-Show.png";
import * as S from "src/style/Login.style/Login.style";
import Uselogin from "src/Hooks/auth/useLogin"

const Login = () => {
  const {
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
    Focus,
    Blur,
    IdChange,
    PasswordChange,
    LoginButton
  } = Uselogin();
  

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
                  placeholder={
                    clickName === "Id" && isInputClicked ? "" : "이메일"
                  }
                  onFocus={Focus}
                  onBlur={Blur}
                  onClick={() => setClickName("Id")}
                  onChange={IdChange}
                />
                <S.InputBtn
                  onClick={() => {
                    setIdValue("");
                    setIsIdButton(false);
                  }}>
                  <img
                    style={{ display: `${idDisplayBlock}` }}
                    src={clickName === "Id" && isIdButton ? IdCancel : ""}
                    alt=""
                  />
                </S.InputBtn>
              </S.InputWrap>
              <S.InputWrap>
                <S.Input
                  type={isShowPswd === true ? "text" : "password"}
                  value={passwordValue}
                  placeholder={
                    clickName === "PassWord" && isInputClicked ? "" : "비밀번호"
                  }
                  onFocus={Focus}
                  onBlur={Blur}
                  onClick={() => setClickName("PassWord")}
                  onChange={PasswordChange}
                />
                <S.InputBtn
                  onClick={() => setIsShowPswd((current) => !current)}>
                  <img
                    style={{ display: `${passwordDisplayBlock}` }}
                    src={
                      clickName === "PassWord" && isPasswordButton
                        ? isShowPswd === true
                          ? PasswordShow
                          : PasswordHide
                        : ""
                    }
                    alt=""
                  />
                </S.InputBtn>
              </S.InputWrap>
            </S.LoginInputWrap>
            <S.LoginBtnWrap onClick={LoginButton}>
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
