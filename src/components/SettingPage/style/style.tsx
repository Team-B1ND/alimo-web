import styled from "styled-components";

export const Setting = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const SettingMain = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 10%;
  left: 50px;
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: var(--Small, 4px);
  background: #fff;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
  img{
    position: absolute;
    right: 10px;
    top: 15px;
    display: flex;
    width: 30px;
    height: 30px;
  cursor: pointer;
  }
`;
export const Settingview = styled.div`
  display: flex;
  width: 80%;
  height: 100%;
  flex-direction: column;
`;
export const SettingTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100px;
  span {
    margin-left: 30px;
    color: #000;
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  
`;
export const Settingexplanation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100px;
`;

export const SettingDetail = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  span{
    margin-left: 30px;
    color: var(--Gray600, #787878);
font-family: Pretendard;
font-size: 0.9rem;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
  }
`;


export const SettingText = styled.div`
  display: flex;
  width: 90%;
  height: 100px;
  gap: 70%;
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
export const Alarm = styled.div<{ animate: boolean }>`
  display: flex;
  position: absolute;
  align-items: center;
  width: 54px;
  height: 28px;
  margin-top: 10px;
  flex-shrink: 0;
  border-radius: var(--Infinity, 1000px);
  transition: left 1s;
  background: ${({ animate }) => (animate ? "#FBE69E" : "#AAA")};
  cursor: pointer;
`;
export const Alarm_Button = styled.div<{ animate: boolean }>`
  position: absolute;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  margin-left: 1px;
  transition: left 0.5s;
  left: ${({ animate }) => (animate ? "26px" : "1px")};
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
