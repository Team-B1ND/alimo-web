import React from "react";
import * as S from "src/components/Write/style/Write.style";
import SideBar from "../../constants/SideBar/SideBar";
import Header from "../../constants/Header/Header";
import ImageUploadImg from "src/assets/img/ImageUpload.svg";
import FileUplaod from "src/assets/img/FileUpload.svg";

const Write = () => {
  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap>
          <S.WriteTitleInput placeholder="제목을 입력해주세요" />
          <S.WriteContext placeholder="대소고에 새로운 소식을 전해보세요!" />
          <S.FileWrap>
            <img src={ImageUploadImg} />
            <img src={FileUplaod} />
          </S.FileWrap>
        </S.InputWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
