import React from "react";
import * as S from "./AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
import DenyStudent from "src/assets/img/DenyStudent.svg";
import useAddStudnet from "src/hooks/Category/useAddStudent";

const AddStudent = ({ onClose }: { onClose: () => void }) => {
  const { ...hooks } = useAddStudnet();

  return (
    <S.AddStudentWrap>
      <S.Main>
        <S.SelectStudentDialog>
          <S.TopNav>
            <S.SelectedStudnetTitle>학생을 선택해주세요</S.SelectedStudnetTitle>
          </S.TopNav>
          <S.SelectionWrap>
            <S.ChoiceInfoWrap>
              <S.StudentWrap>
                <S.GradeInfo onClick={() => hooks.onLoadStudentInfo(1, 0)}>1학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => hooks.onLoadStudentInfo(1, 1)}>1반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(1, 2)}>2반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(1, 3)}>3반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(1, 4)}>4반 {hooks.memberCnt}</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => hooks.onLoadStudentInfo(2, 0)}>2학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => hooks.onLoadStudentInfo(2, 1)}>1반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(2, 2)}>2반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(2, 3)}>3반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(2, 4)}>4반 {hooks.memberCnt}</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => hooks.onLoadStudentInfo(3, 0)}>3학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => hooks.onLoadStudentInfo(3, 1)}>1반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(3, 2)}>2반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(3, 3)}>3반 {hooks.memberCnt}</span>
                  <span onClick={() => hooks.onLoadStudentInfo(3, 4)}>4반 {hooks.memberCnt}</span>
                </S.ClassInfo>
              </S.StudentWrap>
              <S.TeacherWrap>
                <S.TeacherAndParentsInfo onClick={() => hooks.onLoadMemberInfo("teacher")}>
                  교사 (20)
                </S.TeacherAndParentsInfo>
              </S.TeacherWrap>
              <S.ParantWrap>
                <S.TeacherAndParentsInfo>학부모</S.TeacherAndParentsInfo>
              </S.ParantWrap>
            </S.ChoiceInfoWrap>
            <S.StudentSelectionWrap>
              <S.MemberSearchInput
                placeholder="멤버 검색"
                type="search"
                onChange={hooks.onSearchMember}
                value={hooks.searchMember}
              />
              <S.UtilityWrap>
                <S.Class>{hooks.room}</S.Class>
                &nbsp;
                <S.ClassStudent>{hooks.memberCnt}</S.ClassStudent>
                <S.AllSelect onClick={() => hooks.onClickAddStudent(-1)}>전체선택</S.AllSelect>
              </S.UtilityWrap>
              {hooks.memberInfo.map((student, idx) => (
                <S.StudentList key={idx}>
                  <img
                    src={
                      hooks.selectedStudents.some((std) => std.id === student.memberId)
                        ? CheckStudent
                        : NoneCheckStudent
                    }
                    onClick={() => hooks.onClickAddStudent(student.memberId)}
                  />
                  <S.ProfileImg src={student.profileImage !== null ? student.profileImage : ProfileImg} />
                  <S.StudentName>{student.name}</S.StudentName>
                </S.StudentList>
              ))}
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
            </S.ViewSelectedStudentWrap>
          </S.SelectionWrap>
          <S.ButtonWrap>
            <S.CancleButton onClick={onClose}>취소</S.CancleButton>
            <S.ConfirmButton onClick={hooks.onClickAddCategory}>선택</S.ConfirmButton>
          </S.ButtonWrap>
          <S.CloseButton src={CloseImg} onClick={onClose} />
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
