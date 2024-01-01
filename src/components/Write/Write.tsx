import React, { ChangeEvent, useRef, useState } from "react";
import * as S from "src/style/Write.style/Write.style";
import SideBar from "../SideBar/SideBar";
import "src/style/Write.style/Write.css";
const Write = () => {
  const [image, setImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onChangeImageInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setImage(URL.createObjectURL(selectedFile));
    }
  };

  const handleClickButton = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    // Reset the file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <S.WriteWrap>
        <div>
          <S.H1>1. 내용을 입력해주세요!</S.H1>
          <input type="text" placeholder="알려줄 내용을 입력해주세요!" className="InputContent" />
        </div>
        <S.ImageInputWrap>
          <S.H1 style={{ marginBottom: "1vh" }}>2. 첨부하실 파일이 있나요?</S.H1>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={onChangeImageInput}
            style={{ display: "none" }}
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <S.InputButton onClick={handleClickButton} style={{ marginRight: "1vw" }}>
              이미지 선택
            </S.InputButton>
            {image && (
              <div>
                <img src={image} alt="Selected" style={{ maxWidth: "30%", marginTop: "10px", display: "grid" }} />
                <button onClick={handleCancelImage} style={{ cursor: "pointer", marginTop: "5px" }}>
                  선택 취소
                </button>
              </div>
            )}
            <S.InputButton style={{ display: "inline" }}>파일 선택</S.InputButton>
          </div>
        </S.ImageInputWrap>
        <div>
          <S.H1>2. 카테고리를 선택해주세요!</S.H1>
          <S.CatetoryWrap>
            <span className="Category">1학년</span>
            <span className="Category">마이스터 홍보부</span>
            <span className="Category">ALT</span>
            <span className="Category">교장선생님이 알립니다.</span>
          </S.CatetoryWrap>
        </div>
        <S.ButtonWrap>
          <S.StyledButton style={{ marginLeft: "27vw" }} className="cancle">
            취소하기
          </S.StyledButton>
          <S.StyledButton style={{ marginLeft: "2vw" }}>게시하기</S.StyledButton>
        </S.ButtonWrap>
      </S.WriteWrap>
    </div>
  );
};

export default Write;
