import { useNavigate } from "react-router-dom";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyPostNotifyDummy = ({ notificationData }: any) => {
  const navigate = useNavigate();
  return (
    <S.MyPostNotifyWrap>
      <S.MyPostNotify
        onClick={() =>
          navigate(`/write-read/${notificationData.notificationId}`)
        }>
        <S.MyNotifyWrap>
          <S.MyNotifyTextWrap>
            <S.MyInfoWrap>
              <S.MyProfile
                src={notificationData.profileImage}
                alt="내 프로필"
              />
              <S.MyInfoText>
                <S.MyName>{notificationData.name}</S.MyName>
                <S.MyNotifyDate>{notificationData.createdAt}</S.MyNotifyDate>
              </S.MyInfoText>
            </S.MyInfoWrap>
            <S.MyContentWrap>
              <S.MyContentTitleBox>
                <S.MyContentTitle>{notificationData.title}</S.MyContentTitle>
                <br />
              </S.MyContentTitleBox>
              <S.MyContentBox>
                <S.MyContent>{notificationData.contents}</S.MyContent>
              </S.MyContentBox>
            </S.MyContentWrap>
          </S.MyNotifyTextWrap>
          <S.MyNotifyImgWrap>
            {notificationData.images && notificationData.images.length > 0 && (
              <S.MyNotifyImg
                src={notificationData.images[0].fileUrl}
                alt="공지 이미지"
              />
            )}
          </S.MyNotifyImgWrap>
        </S.MyNotifyWrap>
        <S.MyNotifyLine></S.MyNotifyLine>
      </S.MyPostNotify>
    </S.MyPostNotifyWrap>
  );
};

export default MyPostNotifyDummy;
