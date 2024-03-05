import SideBar from "src/constants/SideBar/SideBar";
import Comment from "src/components/WriteRead/WriteReadDetail/Comment/Comment";
import * as S from "src/components/WriteRead/WriteReadDetail/style/WriteReadDetail.style";
import MyProfile from "src/assets/img/Profile-Dummy.jpg";
import MyNotifyImage from "src/assets/img/MyNotifyDetailImg.svg";

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
        <Comment />
      </S.WriteReadDetailBox>
    </S.WriteReadDetailWrap>
  );
};

export default WriteReadDetail;
