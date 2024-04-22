import Logo from "src/assets/img/Alimo-image.png";
import IdCancel from "src/assets/img/Id-Cancel.png";
import PasswordHide from "src/assets/img/Password-Hide.png";
import PasswordShow from "src/assets/img/Password-Show.png";
import * as S from "src/components/Login/style";
import uselogin from "src/hooks/auth/useLogin";

const Login = () => {
  const { ...login } = uselogin();

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
                  value={login.idValue}
                  placeholder={
                    login.clickName === "Id" && login.idValue !== ""
                      ? ""
                      : "도담아이디"
                  }
                  onClick={() => login.setClickName("Id")}
                  onChange={login.InputChange}
                  onKeyDown={login.handleKeyDown}
                />
                {login.idError && (
                  <S.IdKoreanError>한글은 사용할 수 없습니다.</S.IdKoreanError>
                )}
                <S.IdBtn
                  onClick={() => {
                    login.setIdValue("");
                  }}
                >
                  <img
                    style={{
                      display: `${login.idValue !== "" ? "block" : "none"}`,
                    }}
                    src={
                      login.clickName === "Id" && login.idValue !== ""
                        ? IdCancel
                        : ""
                    }
                    alt=""
                  />
                </S.IdBtn>
              </S.IdWrap>
              <S.PasswordWrap>
                <S.Password
                  type={login.isShowPswd ? "text" : "password"}
                  value={login.passwordValue}
                  placeholder={
                    login.clickName === "PassWord" && login.passwordValue !== ""
                      ? ""
                      : "비밀번호"
                  }
                  onClick={() => login.setClickName("PassWord")}
                  onChange={login.InputChangePw}
                  onKeyDown={login.handleKeyDown}
                />
                <S.PasswordBtn
                  onClick={() => login.setIsShowPswd((current) => !current)}
                >
                  <img
                    style={{
                      display: `${
                        login.passwordValue !== "" ? "block" : "none"
                      }`,
                    }}
                    src={
                      login.clickName === "PassWord" &&
                      login.passwordValue !== ""
                        ? login.isShowPswd
                          ? PasswordShow
                          : PasswordHide
                        : ""
                    }
                    alt=""
                  />
                </S.PasswordBtn>
              </S.PasswordWrap>
            </S.LoginInputWrap>
            <S.LoginBtnWrap onClick={login.LoginButton}>
              <S.LoginBtn>
                {login.Loginloading ? "로그인중" : "도담도담 계정으로 로그인"}
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
