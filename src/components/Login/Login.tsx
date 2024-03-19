import Logo from "src/assets/img/Alimo-image.png";
import IdCancel from "src/assets/img/Id-Cancel.png";
import PasswordHide from "src/assets/img/Password-Hide.png";
import PasswordShow from "src/assets/img/Password-Show.png";
import * as S from "src/components/Login/style/Login.style";
import uselogin from "src/Hooks/auth/useLogin";

const Login = () => {
  const {
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
    idError,
  } = uselogin();
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      LoginButton();
    }
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
              <S.IdWrap>
                <S.Id
                  type="text"
                  value={idValue}
                  placeholder={
                    clickName === "Id" && idValue !== "" ? "" : "도담아이디"
                  }
                  onClick={() => setClickName("Id")}
                  onChange={InputChange}
                  onKeyDown={handleKeyDown}
                />
                { idError && <S.IdKoreanError>한글은 사용할 수 없습니다.</S.IdKoreanError> }
                <S.IdBtn
                  onClick={() => {
                    setIdValue("");
                  }}
                >
                  <img
                    style={{ display: `${idValue !== "" ? "block" : "none"}` }}
                    src={clickName === "Id" && idValue !== "" ? IdCancel : ""}
                    alt=""
                  />
                </S.IdBtn>
              </S.IdWrap>
              <S.PasswordWrap>
                <S.Password
                  type={isShowPswd === true ? "text" : "password"}
                  value={passwordValue}
                  placeholder={
                    clickName === "PassWord" && passwordValue !== ""
                      ? ""
                      : "비밀번호"
                  }
                  onClick={() => setClickName("PassWord")}
                  onChange={InputChange}
                  onKeyDown={handleKeyDown}
                />
                <S.PasswordBtn
                  onClick={() => setIsShowPswd((current) => !current)}
                >
                  <img
                    style={{
                      display: `${passwordValue !== "" ? "block" : "none"}`,
                    }}
                    src={
                      clickName === "PassWord" && passwordValue !== ""
                        ? isShowPswd === true
                          ? PasswordShow
                          : PasswordHide
                        : ""
                    }
                    alt=""
                  />
                </S.PasswordBtn>
              </S.PasswordWrap>
            </S.LoginInputWrap>
            <S.LoginBtnWrap onClick={LoginButton}>
              <S.LoginBtn>
                {Loginloading === true
                  ? "로그인중"
                  : "도담도담 계정으로 로그인"}
              </S.LoginBtn>
            </S.LoginBtnWrap>
          </S.LoginWrap>
        </S.LoginBox>
      </S.LoginPage>
      <S.MadeByB1nd>made by B1ND</S.MadeByB1nd>
    </S.LogoPageWrap>
  );
};

export default Login;
