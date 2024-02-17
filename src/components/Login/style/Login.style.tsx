import styled from "styled-components";

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

  top: 16px;
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

  top: 16px;
  right: 10px;
`;

export const LoginBtnWrap = styled.div`
  width: 442px;
  height: 52px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  height: 52px;
  cursor: pointer;
  color: var(--Main50, #fffefc);
  font-family: Pretendard;
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
