import React from "react";
import * as S from "./AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
import DenyStudent from "src/assets/img/DenyStudent.svg";
import useAddStudnet from "src/hooks/Category/useAddStudent";

const AddStudent = ({ onClose }: { onClose: () => void }) => {
  const { ...student } = useAddStudnet();

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
                <S.GradeInfo onClick={() => student.onLoadStudentInfo(1, 0)}>1학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => student.onLoadStudentInfo(1, 1)}>1반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(1, 2)}>2반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(1, 3)}>3반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(1, 4)}>4반 {student.memberCnt}</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => student.onLoadStudentInfo(2, 0)}>2학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => student.onLoadStudentInfo(2, 1)}>1반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(2, 2)}>2반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(2, 3)}>3반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(2, 4)}>4반 {student.memberCnt}</span>
                </S.ClassInfo>
                <S.GradeInfo onClick={() => student.onLoadStudentInfo(3, 0)}>3학년 (72)</S.GradeInfo>
                <S.ClassInfo>
                  <span onClick={() => student.onLoadStudentInfo(3, 1)}>1반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(3, 2)}>2반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(3, 3)}>3반 {student.memberCnt}</span>
                  <span onClick={() => student.onLoadStudentInfo(3, 4)}>4반 {student.memberCnt}</span>
                </S.ClassInfo>
              </S.StudentWrap>
              <S.TeacherWrap>
                <S.TeacherAndParentsInfo onClick={() => student.onLoadMemberInfo("teacher")}>
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
                onChange={student.onSearchMember}
                value={student.searchMember}
              />
              <S.UtilityWrap>
                <S.Class>{student.room === "0반" ? "전체" : student.room}</S.Class>
                &nbsp;
                <S.ClassStudent>{student.memberCnt}</S.ClassStudent>
                <S.AllSelect onClick={() => student.onClickAddStudent(-1, "")}>전체선택</S.AllSelect>
              </S.UtilityWrap>
              {student.memberInfo.map((stud, idx) => (
                <S.StudentList key={idx}>
                  <img
                    src={
                      student.selectedStudents.some((std) => std.id === stud.memberId) ? CheckStudent : NoneCheckStudent
                    }
                    onClick={() => student.onClickAddStudent(stud.memberId, stud.name)}
                  />
                  <S.ProfileImg src={stud.profileImage !== null ? stud.profileImage : ProfileImg} />
                  <S.StudentName>{stud.name}</S.StudentName>
                </S.StudentList>
              ))}
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              {student.selectedStudents.map((std) => (
                <S.ViewSelectedStudent>
                  <div style={{ marginLeft: "2vw" }}>
                    <S.ViewStudentName>{std.name}</S.ViewStudentName>
                    <S.DenyStudent
                      src={DenyStudent}
                      style={{ marginLeft: "1vw" }}
                      onClick={() => student.onClickRemoveStudent(std.id)}
                    />
                  </div>
                </S.ViewSelectedStudent>
              ))}
            </S.ViewSelectedStudentWrap>
          </S.SelectionWrap>
          <S.ButtonWrap>
            <S.CancleButton onClick={onClose}>취소</S.CancleButton>
            <S.ConfirmButton onClick={student.onClickAdd}>선택</S.ConfirmButton>
          </S.ButtonWrap>
          <S.CloseButton src={CloseImg} onClick={onClose} />
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
