import React, { useState } from "react";
import * as S from "src/style/Main.style/Main.style";
import SideBar from "src/components/SideBar/SideBar";
import TeacherProfile from "src/img/T-Profile.png";
import PostImage from "src/img/PostImage.svg";
import Modal from "react-modal";
import DetailPostModal from "src/lib/Modal/DetailPostModal";

const Main = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const onClickNavigatePostDetail = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <S.Main>
      <SideBar />
      <S.MainView>
        <S.MainWrapper>
          <S.DateWrapper>
            <S.lineLeft></S.lineLeft>
            <S.PostDateTime>2024년 1월 20일 22:00</S.PostDateTime>
            <S.lineRight></S.lineRight>
          </S.DateWrapper>
          <S.PostNotifyWrap onClick={onClickNavigatePostDetail}>
            <S.NotifyInfo>
              <S.TeacherProfile src={TeacherProfile} />
              <S.TeacherName>빈윤미</S.TeacherName>
            </S.NotifyInfo>
            <S.NotifyContentWrap>
              <S.Content>너 좀 수상함...아니 그게 아니라 수상함... 문화상품권 받으러오셈.</S.Content>
              <S.More>...더보기</S.More>
              <S.PostImage src={PostImage} />
            </S.NotifyContentWrap>
          </S.PostNotifyWrap>
          <DetailPostModal 
            isOpen={isModalOpen}
            onRequestClose={onClickNavigatePostDetail}
            teacherProfile={TeacherProfile}
            content="너 좀 수상함...아니 그게 아니라 수상함... 문화상품권 받으러오셈."
            postImage={PostImage}
          />
          <S.PostNotifyWrap onClick={onClickNavigatePostDetail}>
            <S.NotifyInfo>
              <S.TeacherProfile src={TeacherProfile} />
              <S.TeacherName>빈윤미</S.TeacherName>
            </S.NotifyInfo>
            <S.NotifyContentWrap>
              <S.Content>너 좀 수상함...아니 그게 아니라 수상함... 문화상품권 받으러오셈.</S.Content>
              <S.More>...더보기</S.More>
              <S.PostImage src={PostImage} />
            </S.NotifyContentWrap>
          </S.PostNotifyWrap>
          <S.DateWrapper>
            <S.lineLeft></S.lineLeft>
            <S.PostDateTime>2024년 1월 21일 1:00</S.PostDateTime>
            <S.lineRight></S.lineRight>
          </S.DateWrapper>
          <S.PostNotifyWrap onClick={onClickNavigatePostDetail}>
            <S.NotifyInfo>
              <S.TeacherProfile src={TeacherProfile} />
              <S.TeacherName>빈윤미</S.TeacherName>
            </S.NotifyInfo>
            <S.NotifyContentWrap>
              <S.Content>너 좀 수상함...아니 그게 아니라 수상함... 문화상품권 받으러오셈.</S.Content>
              <S.More>...더보기</S.More>
              <S.PostImage src={PostImage} />
            </S.NotifyContentWrap>
          </S.PostNotifyWrap>
        </S.MainWrapper>
      </S.MainView>
    </S.Main>
  );
};

export default Main;
