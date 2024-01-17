import React from "react";
import SideBar from "src/components/SideBar/SideBar";
import "src/style/WriteRead.style/WriteRead.style.css";
import MyNotifyImage from "src/img/MyNotifyImg.svg";
import MyProfile from "src/img/Profile-Dummy.jpg";
import * as S from "src/style/WriteRead.style/WriteRead.style";

const MyWriteView = () => {
  const DUMMY_CONTENT = [
    `<2023년 대한민국 고졸인재 채용엑스포 V-log 공모전 안내>`,
    `위 공모전에 관심있는 학생은 이진주 선생님에게 카카오워크로 연락주세요~!`,
  ];
  return (
    <div className="WriteRead">
      <SideBar />
      <div className="WriteReadView">
        <div className="WriteReadWrap">
          <div className="WriteReadText">
            <span className="WriteReadTitle">내 공지</span>
            <span className="WriteReadCount">13</span>
          </div>
          <div className="MyPostNotifyWrap">
            <div className="MyPostNotify">
              <div className="MyNotifyTextWrap">
                <div className="MyInfoWrap">
                  <img src={MyProfile} className="MyProfile" />
                  <div className="MyInfoText">
                    <p className="MyName">이진주</p>
                    <p className="MyNotifyDate">2023년 4월 20일(목) 02:56</p>
                  </div>
                </div>
                <div className="MyContentWrap">
                  <span className="MyContent">
                    {DUMMY_CONTENT[0]}
                    <br />
                    {DUMMY_CONTENT[1]}
                  </span>
                </div>
              </div>
              <div className="MyNotifyImgWrap">
                <img
                  className="MyNotifyImg"
                  src={MyNotifyImage}
                  alt="공지 이미지"
                />
              </div>
            </div>
          </div>
          <div className="MyPostNotifyWrap">
            <div className="MyPostNotify">
              <div className="MyNotifyTextWrap">
                <div className="MyInfoWrap">
                  <img src={MyProfile} className="MyProfile" />
                  <div className="MyInfoText">
                    <p className="MyName">이진주</p>
                    <p className="MyNotifyDate">2023년 4월 20일(목) 02:56</p>
                  </div>
                </div>
                <div className="MyContentWrap">
                  <span className="MyContent">
                    {DUMMY_CONTENT[0]}
                    <br />
                    {DUMMY_CONTENT[1]}
                  </span>
                </div>
              </div>
              <div className="MyNotifyImgWrap">
                <img
                  className="MyNotifyImg"
                  src={MyNotifyImage}
                  alt="공지 이미지"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyWriteView;
