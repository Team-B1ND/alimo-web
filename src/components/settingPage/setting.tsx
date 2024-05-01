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
            <span onClick={()=>window.open("https://ahead-yacht-97a.notion.site/e9ae676d8ecd4a9a921400ceea6c27e3")}>서비스 정책</span>
          </S.SettingDetail>
          <S.SettingDetail>
            <span onClick={()=>window.open("https://ahead-yacht-97a.notion.site/215ee2a6510e4cff92cff58f7c5011de")}>개인정보 이용 약관</span>
          </S.SettingDetail>
        </S.Settingexplanation>
      </S.SettingMain>
    </S.Setting>
  );
};
export default Setting;
