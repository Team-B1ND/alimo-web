import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Props } from "src/types/MyNotification/MyNotificationProps.interface";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyPostNotification = ({ notificationData }: Props) => {
  const navigate = useNavigate();
  const [isImageError, setIsImageError] = useState<boolean>(true);

  const handleImageError = () => {
    setIsImageError(false);
  };
  return (
    <S.MyPostNotificationWrap>
      <S.MyPostNotification
        onClick={() =>
          navigate(`/write-read/${notificationData.notificationId}`)
        }>
        <S.MyNotificationBox>
          <S.MyNotificationTextWrap>
            <S.MyInfoWrap>
              <S.MyProfile src={notificationData.profileImage} />
              <S.MyInfoText>
                <S.MyName>{notificationData.name}</S.MyName>
                <S.MyNotificationDate>
                  {notificationData.createdAt}
                </S.MyNotificationDate>
              </S.MyInfoText>
            </S.MyInfoWrap>
            <S.MyContentBoxWrap>
              <S.MyContentTitleWrap>
                <S.MyContentTitle>{notificationData.title}</S.MyContentTitle>
              </S.MyContentTitleWrap>
              <S.MyContentWrap>
                <S.MyContent>{notificationData.content}</S.MyContent>
              </S.MyContentWrap>
            </S.MyContentBoxWrap>
          </S.MyNotificationTextWrap>
          <S.MyNotificationImgWrap>
            {notificationData.images && notificationData.images.length > 0 && isImageError && (
              <S.MyNotificationImg
                src={notificationData.images[0].fileUrl}
                onError={handleImageError}
              />
            )}
          </S.MyNotificationImgWrap>
        </S.MyNotificationBox>
        <S.MyNotificationLine></S.MyNotificationLine>
      </S.MyPostNotification>
    </S.MyPostNotificationWrap>
  );
};

export default MyPostNotification;