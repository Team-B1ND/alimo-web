import SideBar from "src/components/SideBar/SideBar";
import "src/style/WriteRead.style/WriteReadDetail.style/WriteReadDetail.style.css";
import MyProfile from "src/img/Profile-Dummy.jpg";
import MyNotifyImage from "src/img/MyNotifyDetailImg.svg";
import ExampleProfile from "src/img/ExampleProfile.png";

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
            <img
              className="CommentProfile"
              src={ExampleProfile}
              alt="예시 프로필"
            />
            <div className="CommentInfoWrap">
              <div className="CommentInfo">
                <span className="CommentName">2예진</span>
                <span className="CommentDate">3일 전</span>
              </div>
              <div className="CommentContentWrap">
                <p className="CommentContent">팀인가여?</p>
              </div>
              <div className="ReplyCommentWrap">
                <button className="ReplyCommentWrite">답글달기</button>
                <button className="ReplyCommentView">답글보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WriteReadDetail;
