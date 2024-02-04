import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/style/SideBar.style/Header.style";
const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderBarWrap>
      <S.UploadNewNotifyButton onClick={() => navigate("/write")}>새 공지 작성</S.UploadNewNotifyButton>
      </S.HeaderBarWrap>
  );
};

export default Header;
