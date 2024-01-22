import React from "react";
import SideBar from "src/components/SideBar/SideBar";
import MyNotifyImage from "src/img/MyNotifyImg.svg";
import MyProfile from "src/img/Profile-Dummy.jpg";
import * as S from "src/style/WriteRead.style/WriteRead.style";

const MyWriteView = () => {
  const DUMMY_CONTENT = [
    `<2023년 대한민국 고졸인재 채용엑스포 V-log 공모전 안내>`,
    `위 공모전에 관심있는 학생은 이진주 선생님에게 카카오워크로 연락주세요~!`,
  ];
  return (
    <S.WriteRead>
      <SideBar />
      <S.WriteReadView>
        <S.WriteReadWrap>
          <S.WriteReadText>
            <S.WriteReadTitle>나의 공지</S.WriteReadTitle>
            <S.WriteReadCount>13</S.WriteReadCount>
          </S.WriteReadText>
          <S.MyPostNotifyWrap>
            <S.MyPostNotify>
              <S.MyNotifyTextWrap>
                <S.MyInfoWrap>
                  <S.MyProfile src={MyProfile} alt="내 프로필" />
                  <S.MyInfoText>
                    <S.MyName>이진주</S.MyName>
                    <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
                  </S.MyInfoText>
                </S.MyInfoWrap>
                <S.MyContentWrap>
                  <S.MyContentTitleBox>
                    <S.MyContentTitle>{DUMMY_CONTENT[0]}</S.MyContentTitle>
                    <br />
                  </S.MyContentTitleBox>
                  <S.MyContentBox>
                    <S.MyContent>{DUMMY_CONTENT[1]}</S.MyContent>
                  </S.MyContentBox>
                </S.MyContentWrap>
              </S.MyNotifyTextWrap>
              <S.MyNotifyImgWrap>
                <S.MyNotifyImg src={MyNotifyImage} alt="공지 이미지" />
              </S.MyNotifyImgWrap>
            </S.MyPostNotify>
          </S.MyPostNotifyWrap>
{/* ============================================================================*/}
          <S.MyPostNotifyWrap>
            <S.MyPostNotify>
              <S.MyNotifyTextWrap>
                <S.MyInfoWrap>
                  <S.MyProfile src={MyProfile} alt="내 프로필" />
                  <S.MyInfoText>
                    <S.MyName>이진주</S.MyName>
                    <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
                  </S.MyInfoText>
                </S.MyInfoWrap>
                <S.MyContentWrap>
                  <S.MyContentTitleBox>
                    <S.MyContentTitle>{DUMMY_CONTENT[0]}</S.MyContentTitle>
                    <br />
                  </S.MyContentTitleBox>
                  <S.MyContentBox>
                    <S.MyContent>{DUMMY_CONTENT[1]}</S.MyContent>
                  </S.MyContentBox>
                </S.MyContentWrap>
              </S.MyNotifyTextWrap>
              <S.MyNotifyImgWrap>
                <S.MyNotifyImg src={MyNotifyImage} alt="공지 이미지" />
              </S.MyNotifyImgWrap>
            </S.MyPostNotify>
          </S.MyPostNotifyWrap>
{/* ============================================================================*/}
          <S.MyPostNotifyWrap>
            <S.MyPostNotify>
              <S.MyNotifyTextWrap>
                <S.MyInfoWrap>
                  <S.MyProfile src={MyProfile} alt="내 프로필" />
                  <S.MyInfoText>
                    <S.MyName>이진주</S.MyName>
                    <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
                  </S.MyInfoText>
                </S.MyInfoWrap>
                <S.MyContentWrap>
                  <S.MyContentTitleBox>
                    <S.MyContentTitle>{DUMMY_CONTENT[0]}</S.MyContentTitle>
                    <br />
                  </S.MyContentTitleBox>
                  <S.MyContentBox>
                    <S.MyContent>{DUMMY_CONTENT[1]}</S.MyContent>
                  </S.MyContentBox>
                </S.MyContentWrap>
              </S.MyNotifyTextWrap>
              <S.MyNotifyImgWrap>
                <S.MyNotifyImg src={MyNotifyImage} alt="공지 이미지" />
              </S.MyNotifyImgWrap>
            </S.MyPostNotify>
          </S.MyPostNotifyWrap>
{/* ============================================================================*/}
          <S.MyPostNotifyWrap>
            <S.MyPostNotify>
              <S.MyNotifyTextWrap>
                <S.MyInfoWrap>
                  <S.MyProfile src={MyProfile} alt="내 프로필" />
                  <S.MyInfoText>
                    <S.MyName>이진주</S.MyName>
                    <S.MyNotifyDate>2023년 4월 20일(목) 02:56</S.MyNotifyDate>
                  </S.MyInfoText>
                </S.MyInfoWrap>
                <S.MyContentWrap>
                  <S.MyContentTitleBox>
                    <S.MyContentTitle>{DUMMY_CONTENT[0]}</S.MyContentTitle>
                    <br />
                  </S.MyContentTitleBox>
                  <S.MyContentBox>
                    <S.MyContent>{DUMMY_CONTENT[1]}</S.MyContent>
                  </S.MyContentBox>
                </S.MyContentWrap>
              </S.MyNotifyTextWrap>
              <S.MyNotifyImgWrap>
                <S.MyNotifyImg src={MyNotifyImage} alt="공지 이미지" />
              </S.MyNotifyImgWrap>
            </S.MyPostNotify>
          </S.MyPostNotifyWrap>
        </S.WriteReadWrap>
      </S.WriteReadView>
    </S.WriteRead>
  );
};

export default MyWriteView;
