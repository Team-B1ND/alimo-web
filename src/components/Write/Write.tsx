import React from "react";
import * as S from "src/style/Write.style/Write.style";
import SideBar from "../SideBar/SideBar";
import Header from "../SideBar/Header";
import useWrite from "src/Hooks/Write/useWrite";
import ImageUploadImg from "src/img/ImageUpload.svg";
import FileUplaod from "src/img/FileUpload.svg";

const Write = () => {
  const { title, onChangeTitle, imageInputRef, handleImageClick, handleFileChange, fileName } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap>
          <S.WriteTitleInput placeholder="제목을 입력해주세요" value={title} onChange={onChangeTitle} />
          <S.WriteContext placeholder="대소고에 새로운 소식을 전해보세요!" />
          <S.FileWrap>
            <S.ImageUploadImg src={ImageUploadImg} />
            <S.ImageInputRef type="file" accept="image/*" ref={imageInputRef} />
            <S.FileChangeLabel htmlFor="file-change">
              <img src={FileUplaod} />
            </S.FileChangeLabel>
            <S.ViewFileName value={fileName} readOnly />
            <S.FileChange type="file" id="file-change" onChange={handleFileChange} />
          </S.FileWrap>
        </S.InputWrap>
        <S.SelectCategoryWrap></S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
