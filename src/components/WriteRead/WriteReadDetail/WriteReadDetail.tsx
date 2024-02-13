import SideBar from "src/constants/SideBar/SideBar";
import "src/components/WriteRead/WriteReadDetail/style/WriteReadDetail.style.css";
import MyProfile from "src/assets/img/Profile-Dummy.jpg";
import MyNotifyImage from "src/assets/img/MyNotifyDetailImg.svg";
import ExampleProfile from "src/assets/img/ExampleProfile.png";
import axios from "axios";
import { useEffect } from "react";

const WriteReadDetail = () => {
  interface Dummy {
    title: string;
    contents: string;
  }
  const DUMMY_CONTENT: Dummy = {
    title: `<2023년 대한민국 고졸인재 채용엑스포 V-log 공모전 안내>`,
    contents: `위 공모전에 관심있는 학생은 이진주 선생님에게 카카오워크로 연락주세요~!`,
  };
  return (
    <div className="WriteReadDetail">
      <SideBar />
      <div className="WriteReadDetailWrap">
        <div className="WriteReadDetailBox">
          <div className="MyPostNotifyWrap">
            <div className="MyNotifyInfoWrap">
              <img className="MyProfile" src={MyProfile} alt="내 프로필" />
              <div className="MyInfoWrap">
                <p className="MyName">이진주</p>
                <p className="MyNotifyDate">2023년 4월 20일(목) 02:56</p>
              </div>
            </div>
            <div className="MyNotifyTitleWrap">
              <span className="MyNotifyTitle">{DUMMY_CONTENT.title}</span>
            </div>
            <div className="MyNotifyImgWrap">
              <img src={MyNotifyImage} alt="공지 이미지" />
            </div>
            <div className="MyNotifyContentWrap">
              <span className="MyNotifyContent">{DUMMY_CONTENT.contents}</span>
            </div>
            <div className="MyNotifyEmoticonWrap">
              <div className="MyNotifyEmoticonBox">
                <div className="EmoticonBox">
                  <span className="Emoticon">👌</span>
                  <span className="EmoticonCnt">1</span>
                </div>
                <div className="EmoticonBox">
                  <span className="Emoticon">😍</span>
                  <span className="EmoticonCnt">0</span>
                </div>
                <div className="EmoticonBox">
                  <span className="Emoticon">😂</span>
                  <span className="EmoticonCnt">30</span>
                </div>
                <div className="EmoticonBox">
                  <span className="Emoticon">😢</span>
                  <span className="EmoticonCnt">15</span>
                </div>
                <div className="EmoticonBox">
                  <span className="Emoticon">😡</span>
                  <span className="EmoticonCnt">30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="WriteReadDetailComment">
          <div className="MyPostCommentWrap">
            <div className="MyPostComment">
              <div className="CommentInfoWrap">
                <img
                  className="CommentProfile"
                  src={ExampleProfile}
                  alt="예시 프로필"
                />
              </div>
              <div className="CommentContentWrap">
                <p className="CommentName">2예진</p>
                <p className="CommentContent">팀인가여?</p>
                <div className="CommentWrap">
                  <span className="CommentDate">
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </span>
                  <button className="ReplyCommentWrite">답글달기</button>
                </div>
              </div>
            </div>
            <div className="MyPostReplyComment">
              <div className="CommentInfoWrap">
                <img
                  className="CommentProfile"
                  src={MyProfile}
                  alt="내 프로필"
                />
              </div>
              <div className="CommentContentWrap">
                <p className="CommentName">이진주</p>
                <p className="CommentContent">얍</p>
                <div className="CommentWrap">
                  <span className="CommentDate">
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </span>
                  <button className="ReplyCommentWrite">답글달기</button>
                </div>
              </div>
            </div>
            <div className="MyPostReplyComment">
              <div className="CommentInfoWrap">
                <img
                  className="CommentProfile"
                  src={ExampleProfile}
                  alt="예시 프로필"
                />
              </div>
              <div className="CommentContentWrap">
                <p className="CommentName">이예진</p>
                <p className="CommentContent">|</p>
                <div className="CommentWrap">
                  <span className="CommentDate">
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </span>
                  <button className="ReplyCommentWrite">답글달기</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReadDetail;
