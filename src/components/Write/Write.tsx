import React from "react";
import * as S from "src/components/Write/style/Write.style";
import SideBar from "../SideBar/SideBar";
import Header from "../Header/Header";
import useWrite from "src/hooks/Write/useWrite";
import ImageUploadImg from "src/assets/img/ImageUpload.svg";
import FileUplaod from "src/assets/img/FileUpload.svg";
import PreviewImage from "./PreviewImage";

const Write = () => {
  const { ...hooks } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap method="post" encType="multipart/form-data">
          <S.WriteTitleInput
            placeholder="제목을 입력해주세요"
            type="text"
            value={hooks.title}
            onChange={hooks.OnChangeTitle}
          />
          <S.ViewImageWrap onClick={hooks.DeletePreviewImage}>
            <PreviewImage previewImage={hooks.image ? hooks.image : []} />
          </S.ViewImageWrap>
          <S.WriteContext
            placeholder="대소고에 새로운 소식을 전해보세요!"
            value={hooks.context}
            onChange={hooks.OnChangeContext}
          />
          <S.FileWrap>
            <S.ImageUploadImg src={ImageUploadImg} onClick={hooks.HandleImageClick} />
            <S.ImageInputRef
              type="file"
              accept=".jpeg, .jpg, .png"
              multiple
              ref={hooks.imageInputRef}
              onChange={hooks.HandleImageChange}
            />
            <S.FileChangeLabel htmlFor="file-change">
              <img src={FileUplaod} />
            </S.FileChangeLabel>
            <S.ViewFileName
              value={hooks.fileName}
              readOnly
              accept=".hwp, .hwpx, .doc, .docx, .pdf"
              placeholder="파일은 최대 3개, 각각 100MB"
              onClick={hooks.DeleteFile}
            />
            <S.FileChange type="file" id="file-change" multiple onChange={hooks.HandleFileChange} />
          </S.FileWrap>
        </S.InputWrap>
        <S.SelectCategoryWrap>
          <S.SendCategoryWrap>
            <S.SendCategoryTitle>보낼 카테고리를 선택해주세요.</S.SendCategoryTitle>
            <S.CategoryWrap>
              {hooks.CategoryList.map((CategoryName) => (
                <S.Cateogory
                  onClick={() => hooks.HandleAddCategory(CategoryName)}
                  isClicked={hooks.selectedCategory.some((category) => category.name === CategoryName)}
                >
                  {CategoryName}
                </S.Cateogory>
              ))}
            </S.CategoryWrap>
          </S.SendCategoryWrap>
          <S.UplaodButtonWrap>
            <S.SendShowMember>총{hooks.memberCnt}명 에게 전송되요.</S.SendShowMember>
            <S.UploadButton disabled={hooks.notAllow} onClick={hooks.AllowWriteButton}>
              게시하기
            </S.UploadButton>
          </S.UplaodButtonWrap>
        </S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
