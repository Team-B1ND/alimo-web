import styled from "styled-components";

export const Setting = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const SettingMain = styled.div`
  width: calc(100vw - 15vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Settingview = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
`;
export const SettingFunction = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  border-bottom: 2px solid #ccc;
  align-items: center;
`;
export const SettingLogOut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 450px;
`;

export const SettingLogOutText = styled.div`
display: flex;
margin-top:10px;
margin-left:35px;
width: 95%;
height: 100px;
align-items: center;
flex-direction: row;
gap:60%;
`;
export const LogOut = styled.div`
display: flex;
width: 100px;
height: 50px;
padding: 1px 50px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: var(--Large, 12px);
background: var(--Gray100, #F4F5F9);
font-family: Pretendard;
font-style: normal;
font-weight: 700;
line-height: normal;
color: var(--Red500, #F90707);
cursor: pointer;
`

export const SettingText = styled.div`
  display: flex;
  width: 90%;
  height: 100px;
  gap: 70%;
`;
export const SettingTitle = styled.div`
  display: flex;
  align-items: center;
  width: 100px;
  height: 100%;
  font-family: Pretendard;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const Texts = styled.div`
  display: flex;
  width: 200px;
  height: 50%;
  align-items: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const AlarmSetting = styled.div`
  display: flex;
  width: 54px;
  height: 100%;
`;
export const Alarm = styled.div`
  width: 54px;
  height: 28px;
  margin-top: 10px;
  flex-shrink: 0;
  border-radius: var(--Infinity, 1000px);
  background: var(--Gray500, #aaa);
  cursor: pointer;
`;
export const SettingLink = styled.div`
  cursor: pointer;
  width: 150px;
  height: 28px;
  margin-top: 10px;
  color: var(--Main500, #fece23);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration-line: underline;
`;
