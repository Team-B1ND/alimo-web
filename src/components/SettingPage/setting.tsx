import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SideBar from "src/constants/SideBar/SideBar";
import * as s from "src/components/SettingPage/style/Setting.style";

export default function Setting() {
  const [Alarm, setAlarm] = useState(false);
  const naviagate = useNavigate();

  const SettingAlarm = () => {
    setAlarm((prevAlarm) => !prevAlarm);
  };
  const Logout = () => {
    Swal.fire({
      title: "로그아웃",
      text: "진짜 로그아웃 하시겠습니까?",
      showCancelButton: true,
      reverseButtons: true,
      cancelButtonText: "취소",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#FBE69E",
      confirmButtonText: "로그아웃하기",
    }).then((result) => {
      if (result.isConfirmed) {
        naviagate("/");
      }
    });
  };

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
                <s.Alarm animate={Alarm} onClick={() => SettingAlarm()}>
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
