import CloseButton from "src/assets/img/Closeimg.png";
import * as S from "src/components/SettingPage/style/style";

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
            <span>알리모 사용 설명서</span>
          </S.SettingDetail>
          <S.SettingDetail>
            <span>개인정보 이용 약관</span>
          </S.SettingDetail>
        </S.Settingexplanation>
      </S.SettingMain>
    </S.Setting>
  );
};
export default Setting;
