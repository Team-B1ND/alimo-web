import React from "react";
import "src/style/Main.style/Main.css";
import * as S from "src/style/Main.style/Main.style";
import SideBar from "src/components/SideBar/SideBar";
import TeacherProfile from "src/img/T-Profile.png";
import PostImage from "src/img/PostImage.svg";

const Main = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div className="MainWrapper">
        <S.DateWrapper>
          <div className="line"></div>
          <span className="PostDateTime">2024년 1월 3일 오후 22:00</span>
          <div className="line"></div>
        </S.DateWrapper>
        <S.PostNotifyWrap>
          <div className="NotifyInfo">
            <img src={TeacherProfile} className="TeacherProfile" />
            <h1 className="TeacherName">빈윤미</h1>
          </div>
          <div className="NotifyContentWrap">
            <span className="Content">너 좀 수상함...아니 그게 아니라 수상함... 문화상품권 받으러오셈.</span>
            <span className="More">...더보기</span>
            <img src={PostImage} className="PostImage" />
          </div>
        </S.PostNotifyWrap>
        <S.PostNotifyWrap>
          <div className="NotifyInfo">
            <img src={TeacherProfile} className="TeacherProfile" />
            <h1 className="TeacherName">가득윤미</h1>
          </div>
          <div className="NotifyContentWrap">
            <span className="Content">너 좀 이상함...아니 그게 아니라 수상함... 문화상품권 받으러오던가 말던가.</span>
            <span className="More">...더보기</span>
            <img src={PostImage} className="PostImage" />
          </div>
        </S.PostNotifyWrap>
        <S.DateWrapper>
          <div className="line"></div>
          <span className="PostDateTime">2024년 1월 4일 오후 22:99</span>
          <div className="line"></div>
        </S.DateWrapper>
        <S.PostNotifyWrap>
          <div className="NotifyInfo">
            <img src={TeacherProfile} className="TeacherProfile" />
            <h1 className="TeacherName">빈살만</h1>
          </div>
          <div className="NotifyContentWrap">
            <span className="Content">너 좀 수상함... 너 마약함? 암튼 너 우리 갱단 들어오삼</span>
            <span className="More">...더보기</span>
            <img src={PostImage} className="PostImage" />
          </div>
        </S.PostNotifyWrap>
      </div>
    </div>
  );
};

export default Main;
