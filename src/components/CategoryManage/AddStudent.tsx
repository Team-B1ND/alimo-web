import React from "react";
import * as S from "src/components/CategoryManage/style/AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
const AddStudent = () => {
  return (
    <S.AddStudentWrap>
      <S.Main>
        <S.SelectStudentDialog>
          <S.TopNav>
            <S.SelectedStudnetTitle>학생을 선택해주세요</S.SelectedStudnetTitle>
            <img src={CloseImg} />
          </S.TopNav>
          <S.SelectionWrap>
            <S.ChoiceInfoWrap>
              <S.GradeInfo>1학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span>1반 (18)</span>
                <span>2반 (18)</span>
                <span>3반 (18)</span>
                <span>4반 (18)</span>
              </S.ClassInfo>
              <S.GradeInfo>2학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span>1반 (18)</span>
                <span>2반 (18)</span>
                <span>3반 (18)</span>
                <span>4반 (18)</span>
              </S.ClassInfo>
              <S.TeacherAndParentsInfo>교사 (20)</S.TeacherAndParentsInfo>
              <S.TeacherAndParentsInfo>학부모</S.TeacherAndParentsInfo>
            </S.ChoiceInfoWrap>
            <S.StudentSelectionWrap>
              <S.MemberSearchInput placeholder="멤버 검색" />
              <S.UtilityWrap>
                <S.Class>4반</S.Class>
                &nbsp;
                <S.ClassStudent>18</S.ClassStudent>
                <S.AllSelect>전체선택</S.AllSelect>
              </S.UtilityWrap>
              <S.StudentList>
                <img src={CheckStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={CheckStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={CheckStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img src={CheckStudent} />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
            </S.StudentSelectionWrap>
          </S.SelectionWrap>
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
