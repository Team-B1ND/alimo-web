import * as S from "./style";
import ClickSideBarCategoryManageImg from "src/assets/images/common/sidebar/ClickSideBarCateogryManage.svg";
import SideBarCategoryManageImg from "src/assets/images/common/sidebar/SideBarCategoryManage.png";
import ClickSideBarWriteReadImg from "src/assets/images/common/sidebar/ClickSideBarHome.svg";
import SideBarWriteReadImg from "src/assets/images/common/sidebar/SideBarHome.svg";
import SideBarProfileSetting from "src/assets/images/common/sidebar/SideBarSetting.svg";
import Profile from "src/components/Profile/profileMain/profile";
import DefaultPrfoile from "src/assets/images/common/ProfileImg.svg";
import Header from "../Header/Header";
import ProfileAlert from "src/components/Profile/Alert/ProfileAlert";
import UseSideBar from "src/hooks/Sidbar/useSiebar";
import Setting from "src/components/SettingPage/setting";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { ...sidbar } = UseSideBar();
  const navigate = useNavigate();
  return (
    <S.SideBarWrap>
      <Header />
      <S.SideBarMenuBack>
        <S.SideBarLogoWrap onClick={() => navigate("/")}>
          <S.AlimoLogoTitle>
            ALIMO<span>.</span>
          </S.AlimoLogoTitle>
          <S.AlimoLogoAdmin>Admin</S.AlimoLogoAdmin>
        </S.SideBarLogoWrap>
        <S.SideBarMenuWrap>
          <S.SideBarMenuFlex>
            <S.SideBarCategory>
              <img
                alt="ggg"
                src={
                  sidbar.isClickCategory === "카테고리 관리" ? ClickSideBarCategoryManageImg : SideBarCategoryManageImg
                }
              />
              <S.SideBarMenu
                $isclicked={sidbar.isClickCategory === "카테고리 관리" ? "true" : "false"}
                onClick={() => sidbar.HandleCategoryClick("카테고리 관리")}
              >
                카테고리 관리
              </S.SideBarMenu>
            </S.SideBarCategory>
            <S.SideBarCategory>
              <img
                src={sidbar.isClickCategory === "내가 쓴 공지보기" ? ClickSideBarWriteReadImg : SideBarWriteReadImg}
              />
              <S.SideBarMenu
                $isclicked={sidbar.isClickCategory === "내가 쓴 공지보기" ? "true" : "false"}
                onClick={() => sidbar.HandleCategoryClick("내가 쓴 공지보기")}
              >
                내가 쓴 공지보기
              </S.SideBarMenu>
            </S.SideBarCategory>
          </S.SideBarMenuFlex>
          <S.SideBarProfileWrap>
            <S.SidbarClickarea onClick={sidbar.OpenProfileSetting}>
              <S.SideBarTeacherProfileImg>
                {sidbar.image && sidbar.image.length > 0 ? <img src={sidbar.image} /> : <img src={DefaultPrfoile} />}
              </S.SideBarTeacherProfileImg>
              <S.SideBarTeacherName>{sidbar.Name}</S.SideBarTeacherName>
            </S.SidbarClickarea>
            <S.SideBarSetting src={SideBarProfileSetting} onClick={sidbar.OpenSetting} />
          </S.SideBarProfileWrap>
        </S.SideBarMenuWrap>
        {sidbar.isProfileAlert && <ProfileAlert onOpen={sidbar.OpenProfile} onClose={sidbar.OpenProfileSetting} />}
        {sidbar.isProfile && <Profile onClose={sidbar.OpenProfile} />}
        {sidbar.isSetting && <Setting onClose={sidbar.OpenSetting} />}
      </S.SideBarMenuBack>
    </S.SideBarWrap>
  );
};

export default SideBar;
