import React from "react";
import * as S from "src/components/Write/style/Write.style";
import DeleteViewImageButton from "src/assets/img/ic_round-clear.svg";
import SideBar from "../../constants/SideBar/SideBar";
import Header from "../../constants/Header/Header";
import useWrite from "src/Hooks/Write/useWrite";
import ImageUploadImg from "src/assets/img/ImageUpload.svg";
import FileUplaod from "src/assets/img/FileUpload.svg";

const Write = () => {
  const {
    title,
    context,
    notAllow,
    viewImage,
    image,
    onChangeTitle,
    onChangeContext,
    imageInputRef,
    handleFileChange,
    handleImageChange,
    handleDeleteViewImage,
    handleImageClick,
    fileName,
    selectedCategory,
    onClickAddCategory,
    allowWriteButton,
  } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap>
          <S.WriteTitleInput placeholder="제목을 입력해주세요" type="search" value={title} onChange={onChangeTitle} />
          <S.ViewImageWrap>
            {viewImage.map((image, idx) => (
              <div key={idx}>
                <S.ViewImage src={image.url} alt={image.alt} onClick={() => handleDeleteViewImage(idx)} />
              </div>
            ))}
          </S.ViewImageWrap>
          <S.WriteContext placeholder="대소고에 새로운 소식을 전해보세요!" value={context} onChange={onChangeContext} />
          <S.FileWrap>
            <S.ImageUploadImg src={ImageUploadImg} onClick={handleImageClick} />
            <S.ImageInputRef type="file" accept="image/*" multiple ref={imageInputRef} onChange={handleImageChange} />
            <S.FileChangeLabel htmlFor="file-change">
              <img src={FileUplaod} />
            </S.FileChangeLabel>
            <S.ViewFileName value={fileName} readOnly />
            <S.FileChange type="file" id="file-change" multiple onChange={handleFileChange} />
          </S.FileWrap>
        </S.InputWrap>
        <S.SelectCategoryWrap>
          <S.SendCategoryWrap>
            <S.SendCategoryTitle>보낼 카테고리를 선택해주세요.</S.SendCategoryTitle>
            <S.CategoryWrap>
              <S.Cateogory
                onClick={() => onClickAddCategory("4반")}
                isClicked={selectedCategory.some((category) => category.name === "4반")}
              >
                4반
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B2ND")}
                isClicked={selectedCategory.some((category) => category.name === "B2ND")}
              >
                B2ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B3ND")}
                isClicked={selectedCategory.some((category) => category.name === "B3ND")}
              >
                B3ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B4ND")}
                isClicked={selectedCategory.some((category) => category.name === "B4ND")}
              >
                B4ND
              </S.Cateogory>
              <S.Cateogory
                onClick={() => onClickAddCategory("B5ND")}
                isClicked={selectedCategory.some((category) => category.name === "B5ND")}
              >
                B5ND
              </S.Cateogory>
            </S.CategoryWrap>
          </S.SendCategoryWrap>
          <S.UplaodButtonWrap>
            <S.SendShowMember>
              총 <span>110</span>명에게 전송돼요
            </S.SendShowMember>
            <S.UploadButton disabled={notAllow} onClick={allowWriteButton}>
              게시하기
            </S.UploadButton>
          </S.UplaodButtonWrap>
        </S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
