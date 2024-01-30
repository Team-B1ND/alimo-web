import React from "react";
import SideBar from "../SideBar/SideBar";
import * as S from "src/style/Write.style/Write.style";
import useWrite from "src/Hooks/Write/useWrite";
const Write = () => {
  const {
    title,
    content,
    image,
    fileName,
    selectedCategory,
    fileInputRef,
    onChangeTitle,
    onChangeContent,
    onChangeImageInput,
    handleClickButton,
    handleCancelImage,
    onClickCategory,
    handleFileChange,
    onClickConfirmButton,
  } = useWrite();

  return (
    <S.WriteMain>
      <SideBar />
      <S.MainView>
        <S.WriteWrap>
          <S.TitleWrap>
            <S.H1>1. 제목을 입력해주세요!</S.H1>
            <S.TitleInput />
          </S.TitleWrap>
          <S.ContentWrap>
            <S.H1>2. 내용을 입력해주세요!</S.H1>
            <S.InputContent placeholder="알려줄 내용을 입력해주세요" value={content} onChange={onChangeContent} />
          </S.ContentWrap>
          <S.ImageInputWrap>
            <S.H1 style={{ marginBottom: "1vh" }}>3. 첨부하실 파일이 있나요?</S.H1>
            <S.FileSelectWrap>
              <S.InputFileButton htmlFor="input-file">파일 선택</S.InputFileButton>
              <S.UploadFileName value={fileName} placeholder="첨부파일" readOnly />
              <S.InputFile type="file" id="input-file" onChange={handleFileChange} />
            </S.FileSelectWrap>
            <S.ImageInput type="file" accept="image/*" ref={fileInputRef} onChange={onChangeImageInput} />
            <S.ImageInputButton onClick={handleClickButton} style={{ marginRight: "1vw" }}>
              이미지 선택
            </S.ImageInputButton>
            {image && (
              <S.ViewImageWrap>
                <S.ViewImage src={image} alt="Selected" />
                <S.CancleButton onClick={handleCancelImage}>선택 취소</S.CancleButton>
              </S.ViewImageWrap>
            )}
          </S.ImageInputWrap>
          <S.CategorySelectWrap>
            <S.H1>4. 카테고리를 선택해주세요!</S.H1>
            <S.CatetoryWrap>
              <S.Category
                className={selectedCategory === "grade" ? "SelectCategory" : "Category"}
                onClick={() => onClickCategory("grade")}
              >
                1학년
              </S.Category>
              <S.Category
                className={selectedCategory === "Job" ? "SelectCategory" : "Category"}
                onClick={() => onClickCategory("Job")}
              >
                마이스터 홍보부
              </S.Category>
              <S.Category
                className={selectedCategory === "club" ? "SelectCategory" : "Category"}
                onClick={() => onClickCategory("club")}
              >
                ALT
              </S.Category>
              <S.Category
                className={selectedCategory === "pyhNotify" ? "SelectCategory" : "Category"}
                onClick={() => onClickCategory("pyhNotify")}
              >
                교장선생님이 알립니다.
              </S.Category>
            </S.CatetoryWrap>
          </S.CategorySelectWrap>
          <S.ButtonWrap>
            <S.StyledButton style={{ marginLeft: "23vw" }} className="cancle">
              취소 하기
            </S.StyledButton>
            <S.StyledButton style={{ marginLeft: "2vw" }} onClick={onClickConfirmButton}>
              게시 하기
            </S.StyledButton>
          </S.ButtonWrap>
        </S.WriteWrap>
      </S.MainView>
    </S.WriteMain>
  );
};

export default Write;
