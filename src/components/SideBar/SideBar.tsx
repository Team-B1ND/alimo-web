import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "src/style/SideBar.style/SideBar.style";
import ProfileImgae from "src/img/Profile-Dummy.jpg";

const SideBar = () => {
  const [clickedCategory, setIsClickCategory] = useState<String | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/main":
        setIsClickCategory("메인");
        break;
      case "/write":
        setIsClickCategory("글작성");
        break;
      case "/category-manage":
        setIsClickCategory("카테고리 관리");
        break;
      case "/wirte-read":
        setIsClickCategory("내 공지글 보기");
        break;
      case "/setting":
        setIsClickCategory("설정");
        break;
      default:
        setIsClickCategory("");
        break;
    }
  }, [location.pathname]);

  const handleCategoryClick = (itemName: string) => {
    setIsClickCategory(itemName);
    switch (itemName) {
      case "메인":
        navigate("/main");
        break;
      case "글작성":
        navigate("/write");
        break;
      case "카테고리 관리":
        navigate("/category-manage");
        break;
      case "내 공지글 보기":
        navigate("/write-read");
        break;
      case "설정":
        navigate("/setting");
        break;
      default:
        navigate("");
    }
  };

  const onNavigateMain = () => {
    navigate("/main");
  };

  return (
    <S.SideBarWrap>
      <S.SideBarLogoWrap onClick={onNavigateMain}>
        <S.SideBarLogoAlimo>Alimo</S.SideBarLogoAlimo>
        <S.SideBarLogoAdmin>Admin</S.SideBarLogoAdmin>
      </S.SideBarLogoWrap>
      <S.ProfileWrap>
        <S.ProfileImage src={ProfileImgae} />
        <S.UserName>이진주T</S.UserName>
      </S.ProfileWrap>
      <S.CategoryWrap>
        <S.Categories isClicked={clickedCategory === "메인"} onClick={() => handleCategoryClick("메인")}>
          메인
        </S.Categories>
        <S.Categories isClicked={clickedCategory === "글작성"} onClick={() => handleCategoryClick("글작성")}>
          글작성
        </S.Categories>
        <S.Categories
          isClicked={clickedCategory === "카테고리 관리"}
          onClick={() => handleCategoryClick("카테고리 관리")}
        >
          카테고리 관리
        </S.Categories>
        <S.Categories isClicked={clickedCategory === "내 공지글 보기"} onClick={() => handleCategoryClick("내 공지글 보기")}>
          작성글 보기
        </S.Categories>
        <S.Categories isClicked={clickedCategory === "설정"} onClick={() => handleCategoryClick("설정")}>
          설정
        </S.Categories>
      </S.CategoryWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
