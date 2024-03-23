import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import * as S from "src/components/MyNotification/style/MyNotification.style";
import useMyNotification from "src/Hooks/Notification/useMyNotification"
import NullSkeleton from "./Skeleton/NullSkeleton";

const MyPostNotification = () => {
  const { notificationData , DataAbsence } = useMyNotification();
  const navigate = useNavigate();
  const [isImageError, setIsImageError] = useState(true);
  
  const handleImageError = () => {
    setIsImageError(false);
  };


  return (
    <S.MyNotificationWrap>
      {DataAbsence ?notificationData.map((notification: MyNotificationData) => ( 
        <S.MyPostNotificationWrap key={notification.notificationId}> 
          <S.MyPostNotification
            onClick={() => navigate(`/write-read/${notification.notificationId}`)}>
            <S.MyNotificationBox>
              <S.MyNotificationTextWrap>
                <S.MyInfoWrap>
                  <S.MyProfile src={notification.profileImage} onError={handleImageError} />
                  <S.MyInfoText>
                    <S.MyName>{notification.name}</S.MyName>
                    <S.MyNotificationDate>
                      {notification.createdAt}
                    </S.MyNotificationDate>
                  </S.MyInfoText>
                </S.MyInfoWrap>
                <S.MyContentBoxWrap>
                  <S.MyContentTitleWrap>
                    <S.MyContentTitle>{notification.title}</S.MyContentTitle>
                  </S.MyContentTitleWrap>
                  <S.MyContentWrap>
                    <S.MyContent>{notification.content}</S.MyContent>
                  </S.MyContentWrap>
                </S.MyContentBoxWrap>
              </S.MyNotificationTextWrap>
              <S.MyNotificationImgWrap>
                {notification.images && notification.images.length > 0 && isImageError && (
                  <S.MyNotificationImg
                    src={notification.images[0].fileUrl}
                    onError={handleImageError}
                  />
                )}
              </S.MyNotificationImgWrap>
            </S.MyNotificationBox>
            <S.MyNotificationLine></S.MyNotificationLine>
          </S.MyPostNotification>
        </S.MyPostNotificationWrap>
      ))  : <NullSkeleton/>}
    </S.MyNotificationWrap>
  );
};

export default MyPostNotification;
