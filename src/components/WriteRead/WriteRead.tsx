import React from "react";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotifyDummy from "src/components/WriteRead/MyPostNotify.dummy";
import * as S from "src/components/WriteRead/style/WriteRead.style";

const MyWriteView = () => {
  return (
    <S.WriteRead>
      <SideBar />
      <S.WriteReadView>
        <S.WriteReadWrap>
          <S.WriteReadText>
            <S.WriteReadTitle>나의 공지</S.WriteReadTitle>
            <S.WriteReadCount>13</S.WriteReadCount>
          </S.WriteReadText>
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
          <MyPostNotifyDummy />
        </S.WriteReadWrap>
      </S.WriteReadView>
    </S.WriteRead>
  );
};

export default MyWriteView;
