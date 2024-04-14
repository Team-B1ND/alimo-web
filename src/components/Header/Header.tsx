import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/Header/style";
const Header = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderBarWrap>
      <S.UploadNewNotifyButton onClick={() => navigate("/write")}>
        <span>새 공지 작성</span>
      </S.UploadNewNotifyButton>
    </S.HeaderBarWrap>
  );
};

export default Header;
