import React,{useState} from "react";
import Swal from "sweetalert2";
import SideBar from "src/components/SideBar/SideBar";
import * as s from "src/style/Setting.style/Setting.style";

export default function Setting() {
const [Alarm, setAlarm]=useState(false);

const SettingAlarm = ()=>{
setAlarm((prevAlarm) => !prevAlarm);
  }
  const Logout = ()=>{
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      text: '다시 되돌릴 수 없습니다. 신중하세요.',
      reverseButtons: true, 
      showCancelButton: true, 
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33', 
      confirmButtonText: '확인', 
      cancelButtonText: '취소', 
   }).then(result=>{
    if(result.isConfirmed){
      
    }
   })
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
