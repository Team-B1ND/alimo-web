import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from { transform: rotate(0deg);}
  to{  transform: rotate(360deg);}
`;
export const Loding = styled.div`
  display: flex;
  width: 20px;
  height: 20px;
  border: 4.5px solid #aaaaaa;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: ${rotate} 1s linear infinite;
`;

export const LogoPageWrap = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const LoginPage = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const IdKoreanError = styled.span`
  display: flex;
  margin: 5px 0px 5px 10px;

  font-size: 0.8rem;
  font-weight: 700;
  color: red;
`;

export const LoginBox = styled.div`
  width: 873px;
  height: 471px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: 100px;
`;

export const AlimoImg = styled.img`
  width: 259px;
  height: 321px;
  margin-top: 200px;
`;

export const LoginWrap = styled.div`
  width: 442px;
  height: 444px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  width: 100%;
  height: 30%;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Logo = styled.div`
  height: 40%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
`;

export const LogoAlimo = styled.h1`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const LogoDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: var(--Main500, #fece23);
`;

export const LogoAdmin = styled.h3`
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 10px;
`;

export const LogoText = styled.h2`
  color: var(--Main900, #020202);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-left: 25%;
`;

export const LoginInputWrap = styled.div`
  width: 442px;
  height: 150px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 50px;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #fff inset;
    -webkit-text-fill-color: #000;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const IdWrap = styled.label`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Id = styled.input`
  width: 410px;
  height: 20px;
  outline: none;
  font-size: 1rem;
  border-radius: var(--Large, 12px);
  border: 1px solid var(--Gray300, #e6e6e6);
  background: var(--White, #fff);

  padding: 18px 16px;

  &::placeholder {
    color: var(--Gray500, #aaa);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const IdBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;

  top: 20px;
  right: 10px;
`;

export const PasswordWrap = styled.label`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Password = styled.input`
  width: 410px;
  height: 20px;
  outline: none;
  font-size: 1rem;
  border-radius: var(--Large, 12px);
  border: 1px solid var(--Gray300, #e6e6e6);
  background: var(--White, #fff);

  padding: 18px 16px;

  &::placeholder {
    color: var(--Gray500, #aaa);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const PasswordBtn = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;

  top: 20px;
  right: 10px;
`;

export const LoginBtnWrap = styled.div`
  width: 442px;
  height: 52px;
`;

export const LoginBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 52px;
  cursor: pointer;
  outline: none;
  color: var(--Main50, #fffefc);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
  border-radius: var(--Large, 12px);
  background: var(--Main500, #fece23);
`;

export const MadeByB1nd = styled.p`
  width: 100%;
  height: 10vh;
  color: var(--Gray500, #aaa);
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;
