import React from "react";
import * as S from "src/components/Header/style";
import useHeader from "src/hooks/common/useHeader";

const Header = () => {
  const { handlePostNotification } = useHeader();

  return (
    <S.HeaderBarWrap>
      <S.UploadNewNotifyButton>
        <span onClick={handlePostNotification}>새 공지 작성</span>
      </S.UploadNewNotifyButton>
    </S.HeaderBarWrap>
  );
};

export default Header;
