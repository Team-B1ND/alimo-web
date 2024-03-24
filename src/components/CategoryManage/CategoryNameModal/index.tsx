import * as S from "../style/CreateCategoryName";

const StudentList = ({ onClose }: { onClose: () => void }) => {
  return (
    <S.CreateWrap>
      <S.Main>
        <S.InputDialog>
          <S.Title>카테고리 이름을 입력해주세요.</S.Title>
          <S.InputWrap placeholder="카테고리 이름" type="text" />
          <S.ButtonWrap>
            <S.ConfirmButton>다음</S.ConfirmButton>
            <S.DenyButton>취소</S.DenyButton>
          </S.ButtonWrap>
        </S.InputDialog>
      </S.Main>
    </S.CreateWrap>
  );
};

export default StudentList;
