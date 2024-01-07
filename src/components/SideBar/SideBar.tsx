import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/style/Main.style/SideBar.style/SideBar.style";
import "src/style/Main.style/SideBar.style/SideBar.css";
import ProfileImgae from "src/img/Profile-Dummy.jpg";

const SideBar = () => {
  const [clickedCategory, setIsClickCategory] = useState<String | null>(null);
  const navigate = useNavigate();
  const handleCategoryClick = (itemName: string) => {
    setIsClickCategory(itemName === clickedCategory ? null : itemName);
    switch (itemName) {
      case "메인":
        navigate("/main");
        break;
      case "글작성":
        navigate("/write");
        break;
      case "카테고리 관리":
        navigate("/category");
        break;
      case "작성글 보기":
        navigate("/write-read");
        break;
      case "설정":
        navigate("/setting");
        break;
    }
  };

  const onNavigateMain = () => {
    navigate("/main");
  };

  const ClickCategoryStyle = (itemName: string) => ({
    fontWeight: clickedCategory === itemName ? 900 : 600,
  });

  return (
    <S.SideBarWrap>
      <div className="SideBar-LogoWrap" onClick={onNavigateMain}>
        <h1 className="SideBar-Logo-Alimo">Alimo</h1>
        <h1 className="SideBar-Logo-Admin">admin</h1>
      </div>
      <S.ProfileWrap>
        <img src={ProfileImgae} className="ProfileImage" />
        <span className="UserName">이진주T</span>
      </S.ProfileWrap>
      <S.CategoryWrap>
        <S.Categories style={ClickCategoryStyle("메인")} onClick={() => handleCategoryClick("메인")}>
          메인
        </S.Categories>
        <S.Categories style={ClickCategoryStyle("글작성")} onClick={() => handleCategoryClick("글작성")}>
          글작성
        </S.Categories>
        <S.Categories style={ClickCategoryStyle("카테고리 관리")} onClick={() => handleCategoryClick("카테고리 관리")}>
          카테고리 관리
        </S.Categories>
        <S.Categories style={ClickCategoryStyle("작성글 보기")} onClick={() => handleCategoryClick("작성글 보기")}>
          작성글 보기
        </S.Categories>
        <S.Categories style={ClickCategoryStyle("설정")} onClick={() => handleCategoryClick("설정")}>
          설정
        </S.Categories>
      </S.CategoryWrap>
    </S.SideBarWrap>
  );
};

export default SideBar;
