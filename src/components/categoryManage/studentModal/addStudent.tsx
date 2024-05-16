import React, { useEffect } from "react";
import * as S from "./style";
import CheckStudent from "src/assets/images/category/CheckStudent.svg";
import NoneCheckStudent from "src/assets/images/category/NoneCheckStudent.svg";
import ProfileImg from "src/assets/images/common/ProfileImg.svg";
import CloseImg from "src/assets/images/common/Closeimg.png";
import DenyStudent from "src/assets/images/category/DenyStudent.svg";
import useAddStudnet from "src/hooks/category/useAddStudent";
import { useRecoilValue } from "recoil";
import { MemberData } from "src/store/category/category.store";

const AddStudent = ({ onClose }: { onClose: () => void }) => {
  const { ...student } = useAddStudnet();
  const MEMBER_DATA = useRecoilValue(MemberData);

  useEffect(() => {
    student.getMemberCntList();
    student.setSelectedStudents(
      MEMBER_DATA.map((member) => ({ id: member.id, name: member.name }))
    );
  }, []);

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
                {student.memberCntList?.student?.map((std, idx) => (
                  <>
                    <div key={std.grade1[0].cls}>
                      <S.GradeInfo
                        onClick={() => student.onLoadStudentInfo(1, 0)}
                        key={idx}>
                        1학년
                      </S.GradeInfo>
                      <S.ClassInfo>
                        {std.grade1.map((g1) => (
                          <span
                            key={g1.cls}
                            onClick={() =>
                              student.onLoadStudentInfo(1, g1.cls)
                            }>
                            {g1.cls}반 ({g1.count})
                          </span>
                        ))}
                      </S.ClassInfo>
                    </div>
                    <div key={std.grade2[0].cls}>
                      <S.GradeInfo
                        onClick={() => student.onLoadStudentInfo(2, 0)}>
                        2학년
                      </S.GradeInfo>
                      <S.ClassInfo>
                        {std.grade2.map((g2) => (
                          <span
                            key={g2.cls}
                            onClick={() =>
                              student.onLoadStudentInfo(2, g2.cls)
                            }>
                            {g2.cls}반 ({g2.count})
                          </span>
                        ))}
                      </S.ClassInfo>
                    </div>
                    <div key={std.grade3[0].cls}>
                      <S.GradeInfo
                        onClick={() => student.onLoadStudentInfo(3, 0)}>
                        3학년
                      </S.GradeInfo>
                      <S.ClassInfo>
                        {std.grade3.map((g3) => (
                          <span
                            key={g3.cls}
                            onClick={() =>
                              student.onLoadStudentInfo(3, g3.cls)
                            }>
                            {g3.cls}반 ({g3.count})
                          </span>
                        ))}
                      </S.ClassInfo>
                    </div>
                  </>
                ))}
              </S.StudentWrap>
              <S.TeacherWrap>
                <S.TeacherAndParentsInfo onClick={student.onLoadTeacherInfo}>
                  교사 ({student.memberCntList?.teacher})
                </S.TeacherAndParentsInfo>
              </S.TeacherWrap>
              <S.ParantWrap>
                <S.TeacherAndParentsInfo onClick={student.onLoadParentInfo}>
                  학부모 ({student.memberCntList?.parent})
                </S.TeacherAndParentsInfo>
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
                <S.Class>
                  {student.room === "0반" ? "전체" : student.room}
                </S.Class>
                &nbsp;
                <S.AllSelect onClick={() => student.onClickAddStudent(-1, "")}>
                  {student.allSelectedStudents ? "전체선택" : "전체취소"}
                </S.AllSelect>
              </S.UtilityWrap>
              {!student.searchMember && student.memberInfo.length > 0
                ? student.memberInfo.map((stud, idx) => (
                    <S.StudentList key={idx}>
                      <img
                        src={
                          student.selectedStudents.some(
                            (std) => std.id === stud.memberId
                          )
                            ? CheckStudent
                            : NoneCheckStudent
                        }
                        onClick={() =>
                          student.onClickAddStudent(stud.memberId, stud.name)
                        }
                      />
                      <S.ProfileImg
                        src={
                          stud.profileImage !== null
                            ? stud.profileImage
                            : ProfileImg
                        }
                      />
                      <S.StudentName>{stud.name}</S.StudentName>
                    </S.StudentList>
                  ))
                : student.filteredMemberInfo.map((member, idx) => (
                    <S.StudentList key={idx}>
                      <img
                        src={
                          student.selectedStudents.some(
                            (std) => std.id === member.memberId
                          )
                            ? CheckStudent
                            : NoneCheckStudent
                        }
                        onClick={() =>
                          student.onClickAddStudent(
                            member.memberId,
                            member.name
                          )
                        }
                      />
                      <S.ProfileImg
                        src={
                          member.profileImage !== null
                            ? member.profileImage
                            : ProfileImg
                        }
                      />
                      <S.StudentName>{member.name}</S.StudentName>
                    </S.StudentList>
                  ))}
            </S.StudentSelectionWrap>
            <S.ViewSelectedStudentWrap>
              {student.selectedStudents &&
                student.selectedStudents.map((std, idx) => (
                  <S.ViewSelectedStudent key={idx}>
                    {/* <div style={{ marginLeft: "2vw" }}> */}
                    <S.ViewStudentName>{std.name}</S.ViewStudentName>
                    <S.DenyStudent
                      src={DenyStudent}
                      style={{ marginLeft: "1vw" }}
                      onClick={() => student.onClickRemoveStudent(std.id)}
                    />
                    {/* </div>   */}
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
