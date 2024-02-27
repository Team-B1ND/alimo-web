import SideBar from "src/constants/SideBar/SideBar";
import * as S from "src/components/WriteRead/WriteReadDetail/style/WriteReadDetail.style";
import MyProfile from "src/assets/img/Profile-Dummy.jpg";
import MyNotifyImage from "src/assets/img/MyNotifyDetailImg.svg";
import ExampleProfile from "src/assets/img/ExampleProfile.png";

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
    <S.WriteReadDetailWrap>
      <SideBar />
      <S.WriteReadDetailBox>
        <S.WriteReadDetail>
          <S.MyPostNotifyWrap>
            <S.MyNotifyInfoWrap>
              <S.MyProfile src={MyProfile} alt="내 프로필" />
              <S.MyInfoWrap>
                <S.MyName>이진주</S.MyName>
                <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
              </S.MyInfoWrap>
            </S.MyNotifyInfoWrap>
            <S.MyNotifyTitleWrap>
              <S.MyNotifyTitle>{DUMMY_CONTENT.title}</S.MyNotifyTitle>
            </S.MyNotifyTitleWrap>
            <S.MyNotifyImgWrap>
              <S.MyNotifyImg src={MyNotifyImage} alt="공지 이미지" />
            </S.MyNotifyImgWrap>
            <S.MyNotifyContentWrap>
              <S.MyNotifyContent>{DUMMY_CONTENT.contents}</S.MyNotifyContent>
            </S.MyNotifyContentWrap>
            <S.MyNotifyEmoticonWrap>
              <S.MyNotifyEmoticonBox>
                <S.EmoticonBox>
                  <S.Emoticon>👌</S.Emoticon>
                  <S.EmoticonCnt>1</S.EmoticonCnt>
                </S.EmoticonBox>
                <S.EmoticonBox>
                  <S.Emoticon>😍</S.Emoticon>
                  <S.EmoticonCnt>0</S.EmoticonCnt>
                </S.EmoticonBox>
                <S.EmoticonBox>
                  <S.Emoticon>😂</S.Emoticon>
                  <S.EmoticonCnt>30</S.EmoticonCnt>
                </S.EmoticonBox>
                <S.EmoticonBox>
                  <S.Emoticon>😢</S.Emoticon>
                  <S.EmoticonCnt>15</S.EmoticonCnt>
                </S.EmoticonBox>
                <S.EmoticonBox>
                  <S.Emoticon>😡</S.Emoticon>
                  <S.EmoticonCnt>30</S.EmoticonCnt>
                </S.EmoticonBox>
              </S.MyNotifyEmoticonBox>
            </S.MyNotifyEmoticonWrap>
          </S.MyPostNotifyWrap>
        </S.WriteReadDetail>
        <S.WriteReadDetailComment>
          <S.MyPostCommentWrap>
            <S.MyPostComment>
              <S.CommentInfoWrap>
                <S.CommentProfile src={ExampleProfile} alt="예시 프로필" />
              </S.CommentInfoWrap>
              <S.CommentContentWrap>
                <S.CommentName>2예진</S.CommentName>
                <S.CommentContent>팀인가여?</S.CommentContent>
                <S.CommentWrap>
                  <S.CommentDate>
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </S.CommentDate>
                  <S.ReplyCommentWrite>답글달기</S.ReplyCommentWrite>
                </S.CommentWrap>
              </S.CommentContentWrap>
            </S.MyPostComment>
            <S.MyPostReplyComment>
              <S.CommentInfoWrap>
                <S.CommentProfile src={MyProfile} alt="내 프로필" />
              </S.CommentInfoWrap>
              <S.CommentContentWrap>
                <S.CommentName>이진주</S.CommentName>
                <S.CommentContent>얍</S.CommentContent>
                <S.CommentWrap>
                  <S.CommentDate>
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </S.CommentDate>
                </S.CommentWrap>
              </S.CommentContentWrap>
            </S.MyPostReplyComment>
            <S.MyPostReplyComment>
              <S.CommentInfoWrap>
                <S.CommentProfile src={ExampleProfile} alt="예시 프로필" />
              </S.CommentInfoWrap>
              <S.CommentContentWrap>
                <S.CommentName>이예진</S.CommentName>
                <S.CommentContent>|</S.CommentContent>
                <S.CommentWrap>
                  <S.CommentDate>
                    2023년 (-1)월 33일 오후 25:sqrt(3)
                  </S.CommentDate>
                </S.CommentWrap>
              </S.CommentContentWrap>
            </S.MyPostReplyComment>
          </S.MyPostCommentWrap>
        </S.WriteReadDetailComment>
      </S.WriteReadDetailBox>
    </S.WriteReadDetailWrap>
  );
};

export default WriteReadDetail;
