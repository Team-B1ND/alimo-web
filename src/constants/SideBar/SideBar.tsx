import * as S from "src/constants/SideBar/style/SideBar.style";
import ClickSideBarCategoryManageImg from "src/assets/img/ClickSideBarCateogryManage.svg";
import SideBarCategoryManageImg from "src/assets/img/SideBarCategoryManage.png";
import ClickSideBarWriteReadImg from "src/assets/img/ClickSideBarHome.svg";
import SideBarWriteReadImg from "src/assets/img/SideBarHome.svg";
import SideBarProfileSetting from "src/assets/img/SideBarSetting.svg";
import Profile from "src/components/Profile/profile";
import DefaultPrfoile from "src/assets/img/profileimg.png";
import Header from "../Header/Header";
import ProfileAlert from "src/components/Profile/ProfileAlert";
import UseSidebar from "src/Hooks/Sidbar/useSiebar";
import Setting from "src/components/SettingPage/setting";

const SideBar = () => {
  const {
    Name,
    image,
    isProfileAlert,
    isProfile,
    isSetting,
    OpenProfileSetting,
    openProfile,
    openSetting,
    handleCategoryClick,
    isClickCategory,
  } = UseSidebar();
  return (
    <S.SideBarWrap>
      <Header />
      <S.SideBarLogoWrap>
        <S.AlimoLogoTitle>
          ALIMO<span>.</span>
        </S.AlimoLogoTitle>
        <S.AlimoLogoAdmin>Admin</S.AlimoLogoAdmin>
      </S.SideBarLogoWrap>
      <S.SideBarMenuWrap>
        <S.SideBarMenuFlex>
          <S.SideBarCategory>
            <img src={isClickCategory === "카테고리 관리" ? ClickSideBarCategoryManageImg : SideBarCategoryManageImg} />
            <S.SideBarMenu
              isClicked={isClickCategory === "카테고리 관리"}
              onClick={() => handleCategoryClick("카테고리 관리")}
            >
              카테고리 관리
            </S.SideBarMenu>
          </S.SideBarCategory>
          <S.SideBarCategory>
            <img src={isClickCategory === "내가 쓴 공지보기" ? ClickSideBarWriteReadImg : SideBarWriteReadImg} />
            <S.SideBarMenu
              isClicked={isClickCategory === "내가 쓴 공지보기"}
              onClick={() => handleCategoryClick("내가 쓴 공지보기")}
            >
              내가 쓴 공지보기
            </S.SideBarMenu>
          </S.SideBarCategory>
        </S.SideBarMenuFlex>
        <S.SideBarProfileWrap>
          <S.SidbarClickarea onClick={OpenProfileSetting}>
            <S.SideBarTeacherProfileImg>
              {image.length > 0 ? <img src={image} /> : <img src={DefaultPrfoile} />}
            </S.SideBarTeacherProfileImg>
            <S.SideBarTeacherName>{Name}</S.SideBarTeacherName>
          </S.SidbarClickarea>
          <S.SideBarSetting src={SideBarProfileSetting} onClick={openSetting} />
        </S.SideBarProfileWrap>
      </S.SideBarMenuWrap>
      {isProfileAlert && <ProfileAlert onOpen={openProfile} onClose={OpenProfileSetting} />}
      {isProfile && <Profile onClose={openProfile} />}
      {isSetting && <Setting onClose={openSetting} />}
    </S.SideBarWrap>
  );
};

export default SideBar;
