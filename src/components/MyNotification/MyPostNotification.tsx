import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import * as S from "src/components/MyNotification/style";
import useMyNotification from "src/hooks/Notification/useMyNotification";
import NullSkeleton from "src/components/MyNotification/Skeleton/NullSkeleton";
import SettingImg from "src/assets/img/SettingImage.png";
import DefaultImg from "src/assets/img/profileimg.png";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const MyPostNotification = () => {
  const { notificationData, DataAbsence, DeleteButtonClick } = useMyNotification();
  const navigate = useNavigate();
  const [, setIsImageError] = useState(true);

  const HandleImageError = () => {
    setIsImageError(false);
  };

  return (
    <S.MyNotificationWrap>
      {DataAbsence ? (
        notificationData.map((notification: MyNotificationData) => (
          <S.MyPostNotificationWrap key={notification.notificationId}>
            <S.MyPostNotification>
              <S.MyNotificationBox onClick={() => navigate(`/write-read/${notification.notificationId}`)}>
                <S.MyNotificationTextWrap>
                  <S.MyInfoWrap>
                    <S.MyProfile src={notification.profileImage || DefaultImg} onError={HandleImageError} />
                    <S.MyInfoText>
                      <S.MyName>{notification.name}</S.MyName>
                      <S.MyNotificationDate>
                        {dayjs(notification.createdAt).locale("ko").format("YYYY년 MM월 DD일(ddd) HH:mm")}
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
                  }}
                ></S.DeleteButton>
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
