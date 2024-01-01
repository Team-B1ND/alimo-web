import React, { useRef, useState } from "react";
import * as S from "src/style/Write.style/Write.style";
import SideBar from "../SideBar/SideBar";
import "src/style/Write.style/Write.css";
const Write = () => {
  const [image, setImage] = useState<String | null>();
  const FileSelect = useRef();
  const onChangeImageInput = (e: any) => {
    setImage([image, e.target.files[0]]);
  };
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <S.WriteWrap>
        <div>
          <S.H1>1. 내용을 입력해주세요!</S.H1>
          <input type="text" placeholder="알려줄 내용을 입력해주세요!" className="InputContent" />
        </div>
        <div>
          <S.H1>2. 첨부하실 파일이 있나요?</S.H1>
          <input type="file" style={{ display: "none" }} />
          <input type="file" />
        </div>
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
