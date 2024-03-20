import React from "react";
import * as S from "src/components/Write/style/Write.style";
import SideBar from "../../constants/SideBar/SideBar";
import Header from "../../constants/Header/Header";
import useWrite from "src/Hooks/Write/useWrite";
import ImageUploadImg from "src/assets/img/ImageUpload.svg";
import FileUplaod from "src/assets/img/FileUpload.svg";
import PreviewImage from "./PreviewImage";

const Write = () => {
  const {
    title,
    context,
    notAllow,
    image,
    CategoryList,
    memberCnt,
    OnChangeTitle,
    OnChangeContext,
    imageInputRef,
    HandleImageClick,
    HandleFileChange,
    DeleteFile,
    HandleImageChange,
    DeletePreviewImage,
    fileName,
    selectedCategory,
    HandleAddCategory,
    AllowWriteButton,
  } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap>
          <S.WriteTitleInput placeholder="제목을 입력해주세요" type="text" value={title} onChange={OnChangeTitle} />
          <S.ViewImageWrap onClick={DeletePreviewImage}>
            <PreviewImage previewImage={image ? image : []} />
          </S.ViewImageWrap>
          <S.WriteContext placeholder="대소고에 새로운 소식을 전해보세요!" value={context} onChange={OnChangeContext} />
          <S.FileWrap>
            <S.ImageUploadImg src={ImageUploadImg} onClick={HandleImageClick} />
            <S.ImageInputRef type="file" accept="image/*" multiple ref={imageInputRef} onChange={HandleImageChange} />
            <S.FileChangeLabel htmlFor="file-change">
              <img src={FileUplaod} />
            </S.FileChangeLabel>
            <S.ViewFileName value={fileName} readOnly placeholder="파일은 최대 3개, 각각 100MB" onClick={DeleteFile} />
            <S.FileChange type="file" id="file-change" multiple onChange={HandleFileChange} />
          </S.FileWrap>
        </S.InputWrap>
        <S.SelectCategoryWrap>
          <S.SendCategoryWrap>
            <S.SendCategoryTitle>보낼 카테고리를 선택해주세요.</S.SendCategoryTitle>
            <S.CategoryWrap>
              {CategoryList.map((CategoryName) => (
                <S.Cateogory
                  onClick={() => HandleAddCategory(CategoryName)}
                  isClicked={selectedCategory.some((category) => category.name === CategoryName)}
                >
                  {CategoryName}
                </S.Cateogory>
              ))}
            </S.CategoryWrap>
          </S.SendCategoryWrap>
          <S.UplaodButtonWrap>
            <S.SendShowMember>총{memberCnt}명 에게 전송되요.</S.SendShowMember>
            <S.UploadButton disabled={notAllow} onClick={AllowWriteButton}>
              게시하기
            </S.UploadButton>
          </S.UplaodButtonWrap>
        </S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
