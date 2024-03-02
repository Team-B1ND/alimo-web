import React from "react";
import * as S from "src/components/CategoryManage/style/AddStudent.style";
import CheckStudent from "src/assets/img/CheckStudent.png";
import NoneCheckStudent from "src/assets/img/NoneCheckStudent.png";
import ProfileImg from "src/assets/img/ProfileImg.svg";
import CloseImg from "src/assets/img/CloseImg.png";
import DenyStudent from "src/assets/img/DenyStudent.svg";
import useCategoryAdd from "src/Hooks/Category/useCategoryAdd";

const AddStudent = ({ onClose }: { onClose: () => void }) => {
  const {
    categoryName,
    selectedStudents,
    selectAccess,
    onClickSelectedRole,
    onClickSelectedGrade,
    onClickSelectedCls,
    onClickAddStudent,
    onClickAccess,
    onClickAddCategory,
  } = useCategoryAdd();

  return (
    <S.AddStudentWrap>
      <S.Main>
        <S.SelectStudentDialog>
          <S.TopNav>
            <S.SelectedStudnetTitle>학생을 선택해주세요</S.SelectedStudnetTitle>
          </S.TopNav>
          <S.SelectionWrap>
            <S.ChoiceInfoWrap>
              <S.GradeInfo onClick={() => onClickSelectedGrade("1학년")}>1학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span onClick={() => onClickSelectedCls("1반")}>1반 (18)</span>
                <span onClick={() => onClickSelectedCls("2반")}>2반 (18)</span>
                <span onClick={() => onClickSelectedCls("3반")}>3반 (18)</span>
                <span onClick={() => onClickSelectedCls("4반")}>4반 (18)</span>
              </S.ClassInfo>
              <S.GradeInfo onClick={() => onClickSelectedGrade("2학년")}>2학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span onClick={() => onClickSelectedCls("1반")}>1반 (18)</span>
                <span onClick={() => onClickSelectedCls("2반")}>2반 (18)</span>
                <span onClick={() => onClickSelectedCls("3반")}>3반 (18)</span>
                <span onClick={() => onClickSelectedCls("4반")}>4반 (18)</span>
              </S.ClassInfo>
              <S.GradeInfo onClick={() => onClickSelectedGrade("3학년")}>3학년 (72)</S.GradeInfo>
              <S.ClassInfo>
                <span onClick={() => onClickSelectedCls("1반")}>1반 (18)</span>
                <span onClick={() => onClickSelectedCls("2반")}>2반 (18)</span>
                <span onClick={() => onClickSelectedCls("3반")}>3반 (18)</span>
                <span onClick={() => onClickSelectedCls("4반")}>4반 (18)</span>
              </S.ClassInfo>
              <S.TeacherAndParentsInfo onClick={() => onClickSelectedRole("교사")}>교사 (20)</S.TeacherAndParentsInfo>
              <S.TeacherAndParentsInfo onClick={() => onClickSelectedRole("학부모")}>학부모</S.TeacherAndParentsInfo>
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
                <img
                  src={selectedStudents.some((student) => student.name === "김가영") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("김가영")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>김가영</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "이해준") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("이해준")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>이해준</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "이강현") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("이강현")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>이강현</S.StudentName>
              </S.StudentList>
              <S.StudentList>
                <img
                  src={selectedStudents.some((student) => student.name === "전민찬") ? CheckStudent : NoneCheckStudent}
                  onClick={() => onClickAddStudent("전민찬")}
                />
                <S.ProfileImg src={ProfileImg} />
                <S.StudentName>전민찬</S.StudentName>
              </S.StudentList>
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
              <S.ViewSelectedStudent>
                <img src={ProfileImg} />
                <S.ViewStudentName>김가영</S.ViewStudentName>
                <S.DenyStudent style={{ marginLeft: "4vw" }} src={DenyStudent} />
              </S.ViewSelectedStudent>
            </S.ViewSelectedStudentWrap>
          </S.SelectionWrap>
          <S.ButtonWrap>
            <S.CancleButton onClick={onClose}>취소</S.CancleButton>
            <S.ConfirmButton onClick={onClickAddCategory}>선택</S.ConfirmButton>
          </S.ButtonWrap>
          <S.CloseButton src={CloseImg} onClick={onClose}></S.CloseButton>
        </S.SelectStudentDialog>
      </S.Main>
    </S.AddStudentWrap>
  );
};

export default AddStudent;
