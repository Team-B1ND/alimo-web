import React from "react";
import * as S from "./style";
import SideBar from "../sideBar/sideBar";
import Header from "../header/header";
import useWrite from "src/hooks/write/useWrite";
import ImageUploadImg from "src/assets/images/write/ImageUpload.svg";
import FileUplaod from "src/assets/images/write/FileUpload.svg";
import PreviewImage from "./previewImage";

const Write = () => {
  const { ...write } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <Header />
      <S.WriteView>
        <S.InputWrap>
          <S.WriteTitleInput
            placeholder="제목을 입력해주세요"
            type="text"
            name="title"
            value={write.wirteElem.title}
            onChange={write.handleWriteElem}
          />
          <S.ViewImageWrap onClick={write.DeletePreviewImage}>
            <PreviewImage previewImage={write.image ? write.image : []} />
          </S.ViewImageWrap>
          <S.WriteContext
            placeholder="대소고에 새로운 소식을 전해보세요!"
            typeof="text"
            value={write.wirteElem.content}
            name="content"
            onChange={write.handleWriteElem}
          />
          <S.FileWrap>
            <S.ImageUploadImg src={ImageUploadImg} onClick={write.HandleImageClick} />
            <S.ImageInputRef
              type="file"
              multiple
              accept=".jpeg, .jpg, .png"
              ref={write.imageInputRef}
              onChange={write.HandleImageChange}
            />
            <S.FileChangeLabel htmlFor="file-change">
              <img src={FileUplaod} />
            </S.FileChangeLabel>
            <S.ViewFileName
              value={write.fileName}
              readOnly
              accept=".hwp, .hwpx, .doc, .docx, .pdf"
              placeholder="파일은 최대 3개, 각각 100MB"
              onClick={write.DeleteFile}
            />
            <S.FileChange type="file" id="file-change" onChange={write.HandleFileChange} />
          </S.FileWrap>
        </S.InputWrap>
        <S.SelectCategoryWrap>
          <S.SendCategoryWrap>
            <S.SendCategoryTitle>보낼 카테고리를 선택해주세요.</S.SendCategoryTitle>
            <S.CategoryWrap>
              {write.categoryList &&
                write.categoryList.map((Category, idx) => (
                  <S.Cateogory
                    onClick={() => write.HandleAddCategory(Category)}
                    $isclicked={write.selectedCategory.some((category) => category.name === Category)}
                    key={idx}
                  >
                    {Category}
                  </S.Cateogory>
                ))}
            </S.CategoryWrap>
          </S.SendCategoryWrap>
          <S.UplaodButtonWrap>
            <S.SendShowMember>총{write.memberCnt}명 에게 전송되요.</S.SendShowMember>
            <S.UploadButton disabled={write.notAllow} onClick={write.AllowWriteButton}>
              게시하기
            </S.UploadButton>
          </S.UplaodButtonWrap>
        </S.SelectCategoryWrap>
      </S.WriteView>
    </S.WriteMain>
  );
};

export default Write;
