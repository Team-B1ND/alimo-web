import CloseButton from "src/assets/images/common/Closeimg.png";
import * as S from "./style";

const Setting = ({ onClose }: { onClose: () => void }) => {
  return (
    <S.Setting>
      <S.SettingMain>
        <img src={CloseButton} onClick={onClose} />
        <S.SettingTitle>
          <span>설정</span>
        </S.SettingTitle>
        <S.Settingexplanation>
          <S.SettingDetail>
            <span onClick={()=>window.open("https://https://alimo.b1nd.com/detailed-information/service-polic")}>서비스 정책</span>
          </S.SettingDetail>
          <S.SettingDetail>
            <span onClick={()=>window.open("https://https://alimo.b1nd.com/detailed-information/personal-information")}>개인정보 이용 약관</span>
          </S.SettingDetail>
          <S.SettingDetail>
            <span onClick={()=>window.open("https://https://alimo.b1nd.com/detailed-information/usage-guide")}>사용방법</span>
          </S.SettingDetail>
        </S.Settingexplanation>
      </S.SettingMain>
    </S.Setting>
  );
};
export default Setting;
