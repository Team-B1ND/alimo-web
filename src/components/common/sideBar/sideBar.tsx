import * as S from "src/components/common/sideBar/style";
import ClickSideBarCategoryManageImg from "src/assets/images/common/sidebar/ClickSideBarCateogryManage.svg";
import SideBarCategoryManageImg from "src/assets/images/common/sidebar/Category.svg";
import ClickSideBarWriteReadImg from "src/assets/images/common/sidebar/ClickSideBarHome.svg";
import SideBarWriteReadImg from "src/assets/images/common/sidebar/SideBarHome.svg";
import SideBarProfileSetting from "src/assets/images/common/sidebar/SideBarSetting.svg";
import Profile from "src/components/profile/profileMain/profile";
import DefaultPrfoile from "src/assets/images/common/ProfileImg.svg";
import ProfileAlert from "src/components/profile/alert/profileAlert";
import useSideBar from "src/hooks/sidebar/useSidebar";
import Setting from "src/components/settingPage/setting";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const { ...sidebar } = useSideBar();
  const navigate = useNavigate();
  return (
    <S.SideBarWrap>
      <S.SideBarMenuBack>
        <S.SideBarLogoWrap onClick={() => navigate("/")}>
          <S.AlimoLogoTitle>
            ALIMO<span>.</span>
          </S.AlimoLogoTitle>
          <S.AlimoLogoAdmin>Admin</S.AlimoLogoAdmin>
        </S.SideBarLogoWrap>
        <S.SideBarMenuWrap>
          <S.SideBarMenuFlex>
            <S.SideBarCategory onClick={() => sidebar.HandleCategoryClick("카테고리 관리")}>
              <img
                alt="ggg"
                src={
                  sidebar.isClickCategory === "카테고리 관리" ? ClickSideBarCategoryManageImg : SideBarCategoryManageImg
                }
              />
              <S.SideBarMenu $isclicked={sidebar.isClickCategory === "카테고리 관리" ? "true" : "false"}>
                카테고리 관리
              </S.SideBarMenu>
            </S.SideBarCategory>
            <S.SideBarCategory onClick={() => sidebar.HandleCategoryClick("내가 쓴 공지보기")}>
              <img
                src={sidebar.isClickCategory === "내가 쓴 공지보기" ? ClickSideBarWriteReadImg : SideBarWriteReadImg}
              />
              <S.SideBarMenu $isclicked={sidebar.isClickCategory === "내가 쓴 공지보기" ? "true" : "false"}>
                내가 쓴 공지보기
              </S.SideBarMenu>
            </S.SideBarCategory>
          </S.SideBarMenuFlex>
          <S.SideBarProfileWrap>
            <S.SidebarClickarea onClick={sidebar.OpenProfileSetting}>
              <S.SideBarTeacherProfileImg>
                {sidebar.image && sidebar.image.length > 0 ? <img src={sidebar.image} /> : <img src={DefaultPrfoile} />}
              </S.SideBarTeacherProfileImg>
              <span>{sidebar.Name}</span>
            </S.SidebarClickarea>
            <S.SideBarSetting src={SideBarProfileSetting} onClick={sidebar.OpenSetting} />
          </S.SideBarProfileWrap>
        </S.SideBarMenuWrap>
        {sidebar.isProfileAlert && <ProfileAlert onOpen={sidebar.OpenProfile} onClose={sidebar.OpenProfileSetting} />}
        {sidebar.isProfile && <Profile onClose={sidebar.OpenProfile} />}
        {sidebar.isSetting && <Setting onClose={sidebar.OpenSetting} />}
      </S.SideBarMenuBack>
    </S.SideBarWrap>
  );
};

export default SideBar;
