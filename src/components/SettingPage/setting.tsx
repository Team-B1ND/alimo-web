import React,{useState} from "react";
import {keyframes} from "styled-components";
import SideBar from "src/components/SideBar/SideBar";
import * as s from "src/style/Setting.style/Setting.style";

export default function Setting() {
const [Alarm, setAlarm]=useState(false)
  const SettingAlarm = ()=>{
setAlarm((prevAlarm) => !prevAlarm);
  }
  const Logout = ()=>{

  }

  return (
    <s.Setting>
      <SideBar />
      <s.SettingMain>
        <s.Settingview>
          <s.SettingFunction>
            <s.SettingText>
              <s.SettingTitle>설정</s.SettingTitle>
            </s.SettingText>
            <s.SettingText>
              <s.Texts>알림설정</s.Texts>
              <s.AlarmSetting>
                <s.Alarm onClick={()=>SettingAlarm()}>
                  <s.Alarm_Button animate={Alarm}></s.Alarm_Button>
                </s.Alarm>
              </s.AlarmSetting>
            </s.SettingText>
            <s.SettingText>
              <s.Texts>사용설명</s.Texts>
              <s.SettingLink>브라우저에서 열기</s.SettingLink>
            </s.SettingText>
            <s.SettingText>
              <s.Texts>개인정보 이용 약관</s.Texts>
              <s.SettingLink>개인정보약관보기</s.SettingLink>
            </s.SettingText>
          </s.SettingFunction>
          <s.SettingLogOut>
            <s.SettingLogOutText>
              <s.Texts>로그아웃하기</s.Texts>
              <s.LogOut onClick={Logout}>로그아웃</s.LogOut>
            </s.SettingLogOutText>
          </s.SettingLogOut>
        </s.Settingview>
      </s.SettingMain>
    </s.Setting>
  );
}
