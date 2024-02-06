import React from "react";
import * as S from "src/style/Write.style/Write.style";
import SideBar from "../SideBar/SideBar";
import Header from "../SideBar/Header";
import useWrite from "src/Hooks/Write/useWrite";
import ImageUploadImg from "src/img/ImageUpload.svg";
import FileUplaod from "src/img/FileUpload.svg";

const Write = () => {
  const { title, onChangeTitle, imageInputRef, handleFileChange, fileName, selectedCategory, onClickAddCategory } =
    useWrite();

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
        <S.SelectCategoryWrap>
          <S.SendCategoryWrap>
            <S.SendCategoryTitle>보낼 카테고리를 선택해주세요.</S.SendCategoryTitle>
            <S.CategoryWrap>
              <S.Cateogory
                onClick={() => onClickAddCategory("B1ND")}
                isClicked={selectedCategory.some((student) => student.name === "B1ND")}
              >
                B1ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B2ND")}
                isClicked={selectedCategory.some((student) => student.name === "B2ND")}
              >
                B2ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("32ND")}
                isClicked={selectedCategory.some((student) => student.name === "B3ND")}
              >
                B3ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B4ND")}
                isClicked={selectedCategory.some((student) => student.name === "B4ND")}
              >
                B4ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B5ND")}
                isClicked={selectedCategory.some((student) => student.name === "B5ND")}
              >
                B5ND
              </S.Cateogory>
            </S.CategoryWrap>
          </S.SendCategoryWrap>
          <S.UplaodButtonWrap>
            <S.SendShowMember>
              총 <span>120</span>명에게 전송돼요
            </S.SendShowMember>
            <S.UploadButton>게시하기</S.UploadButton>
          </S.UplaodButtonWrap>
        </S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
