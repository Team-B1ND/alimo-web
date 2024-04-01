import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import * as S from "src/components/MyNotification/style/MyNotification.style";
import useMyNotification from "src/Hooks/Notification/useMyNotification";
import NullSkeleton from "src/components/MyNotification/Skeleton/NullSkeleton";
import SettingImg from "src/assets/img/SettingImage.png";
// import CloseButtonImg from "src/assets/img/CloseImg.png";
import DefaultImg from "src/assets/img/profileimg.png";
import { isJSDocLinkLike } from "typescript";
const MyPostNotification = () => {
  const { notificationData, DataAbsence, DeleteButtonClick } =
    useMyNotification();
  const navigate = useNavigate();
  const [isImageError, setIsImageError] = useState(true);

  const HandleImageError = () => {
    setIsImageError(false);
  };

  return (
    <S.MyNotificationWrap>
      {DataAbsence ? (
        notificationData.map((notification: MyNotificationData) => (
          <S.MyPostNotificationWrap key={notification.notificationId}>
            <S.MyPostNotification>
              <S.MyNotificationBox
                onClick={() =>
                  navigate(`/write-read/${notification.notificationId}`)
                }>
                <S.MyNotificationTextWrap>
                  <S.MyInfoWrap>
                    {}
                    <S.MyProfile
                      src={notification.profileImage || DefaultImg}
                      onError={HandleImageError}
                    />
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
                      <S.MyContent>
                        {notification.content.length < 50
                          ? notification.content
                          : `${notification.content.substring(0, 50)}...`}
                      </S.MyContent>
                    </S.MyContentWrap>
                  </S.MyContentBoxWrap>
                </S.MyNotificationTextWrap>
                <S.MyNotificationImgWrap>
                  {notification.images && notification.images.length > 0 && (
                    <S.MyNotificationImg
                      rel="preconnect"
                      decoding="async"
                      src={notification.images[0].fileUrl}
                      onError={HandleImageError}
                    />
                  )}
                </S.MyNotificationImgWrap>
              </S.MyNotificationBox>
              <S.DeleteButtonWrap>
                <S.DeleteButton
                  src={SettingImg}
                  onClick={() => {
                    DeleteButtonClick(notification);
                  }}></S.DeleteButton>
              </S.DeleteButtonWrap>
            </S.MyPostNotification>
          </S.MyPostNotificationWrap>
        ))
      ) : (
        <NullSkeleton />
      )}
    </S.MyNotificationWrap>
  );
};

export default MyPostNotification;
