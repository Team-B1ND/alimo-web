import React from "react";
import SideBar from "../SideBar/SideBar";
import * as S from "src/components/CategoryManage/EditCategory.style";
import { useNavigate } from "react-router-dom";
import useCategoryEdit from "src/Hooks/Category/useCategoryEdit";

const EditCategory = () => {
  const navigate = useNavigate();
  const {
    categoryName,
    selectedStudents,
    selectAccess,
    onChangeCategoryName,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
  } = useCategoryEdit();
  
  return (
    <S.CategoryEdit>
      <SideBar />
      <S.CategoryEditView>
        <S.CategoryNameWrap>
          <S.H1 style={{ marginTop: "1vh" }}>카테고리 이름</S.H1>
          <S.CategoryNameInput type="text" value={categoryName} onChange={onChangeCategoryName} />
        </S.CategoryNameWrap>
        <S.SelectMemberWrap>
          <S.H1>멤버 선택</S.H1>
          <S.DropDownContentWrap>
            <S.DropDownContent
              onClick={() => onClickAddStudent("김가영")}
              className={selectedStudents.some((student) => student.name === "김가영") ? "changeBG" : "defaultBG"}
            >
              김가영
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이해준")}
              className={selectedStudents.some((student) => student.name === "이해준") ? "changeBG" : "defaultBG"}
            >
              이해준
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("박병준")}
              className={selectedStudents.some((student) => student.name === "박병준") ? "changeBG" : "defaultBG"}
            >
              박병준
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이강현")}
              className={selectedStudents.some((student) => student.name === "이강현") ? "changeBG" : "defaultBG"}
            >
              이강현
            </S.DropDownContent>
            <S.DropDownContent
              onClick={() => onClickAddStudent("이예진1")}
              className={selectedStudents.some((student) => student.name === "이예진1") ? "changeBG" : "defaultBG"}
            >
              이예진1
            </S.DropDownContent>
          </S.DropDownContentWrap>
        </S.SelectMemberWrap>
        <S.GrantAccessWrap>
          <S.H1 style={{ marginTop: "2vh", marginBottom: "3vh" }}>권한 수정</S.H1>
          <S.AccessWrap>
            <S.GrantAccess
              onClick={() => onClickAccess("선생님")}
              className={selectAccess === "선생님" ? "selected" : "basic"}
            >
              선생님
            </S.GrantAccess>
            <S.GrantAccess onClick={() => onClickAccess("PM")} className={selectAccess === "PM" ? "selected" : "basic"}>
              PM
            </S.GrantAccess>
            <S.GrantAccess
              onClick={() => onClickAccess("동아리장")}
              className={selectAccess === "동아리장" ? "selected" : "basic"}
            >
              동아리장
            </S.GrantAccess>
            <S.GrantAccess
              onClick={() => onClickAccess("일반 학생")}
              className={selectAccess === "일반 학생" ? "selected" : "basic"}
            >
              일반 학생
            </S.GrantAccess>
          </S.AccessWrap>
        </S.GrantAccessWrap>
        <S.ButtonWrap>
          <S.StyledButton className="cancle" onClick={() => navigate("/category-manage")}>
            돌아가기
          </S.StyledButton>
          <S.StyledButton onClick={onClickAddCategory}>추가하기</S.StyledButton>
        </S.ButtonWrap>
      </S.CategoryEditView>
    </S.CategoryEdit>
  );
};

export default EditCategory;
