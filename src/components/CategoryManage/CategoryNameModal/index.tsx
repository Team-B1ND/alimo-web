import React, { useState } from "react";
import * as S from "../style/CreateCategoryName";
import useCreateCategory from "src/hooks/Category/useCreateCategory";

const StudentList = ({ onClose, onNext }: { onClose: () => void; onNext: () => void }) => {
  const { createCategoryName, handleChangeCategoryName } = useCreateCategory();
  
  return (
    <S.CreateWrap >
      <S.Main>
        <S.InputDialog>
          <S.Title>카테고리 이름을 입력해주세요.</S.Title>
          <S.InputWrap
            placeholder="카테고리 이름"
            type="text"
            onChange={handleChangeCategoryName}
            value={createCategoryName}
          />
          <S.ButtonWrap>
            <S.ConfirmButton onClick={onNext}>다음</S.ConfirmButton>
            <S.DenyButton onClick={onClose}>취소</S.DenyButton>
          </S.ButtonWrap>
        </S.InputDialog>
      </S.Main>
    </S.CreateWrap>
  );
};

export default StudentList;