import { useNavigate } from "react-router-dom";
import { MyNotificationData } from "src/types/myNotifications/myNotifications.interface";
import * as S from "src/components/myNotifications/style";
import useMyNotification from "src/hooks/notifications/useMyNotifications";
import Skeleton from "src/components/myNotifications/skeleton/skeleton";
import ErrorSkeleton from "src/components/myNotifications/skeleton/errorSkeleton";
import NullSkeleton from "src/components/myNotifications/skeleton/nullSkeleton";
import SettingImg from "src/assets/images/notifications/SettingImage.png";
import DefaultImg from "src/assets/images/common/ProfileImg.svg";
import dayjs from "dayjs";
import "dayjs/locale/ko";

const MyPostNotification = () => {
  const { ...MyNotification } = useMyNotification();
  const navigate = useNavigate();

  return (
    <S.MyNotificationWrap>
      {MyNotification.loding ? (
          Array.from({ length: 20 }).map((_, idx) => (
             <Skeleton key={idx} />
          ))
        ) : MyNotification.error ? (
            <ErrorSkeleton />
          ) : MyNotification.DataAbsence ? (
            <NullSkeleton />
            ) : (
              MyNotification.notificationData.map((notification: MyNotificationData) => (
                <S.MyPostNotificationWrap key={notification.notificationId}>
                  <S.MyPostNotification>
                    <S.MyNotificationBox
                      onClick={() => navigate(`/write-read/${notification.notificationId}`)}>
                      <S.MyNotificationTextWrap>
                        <S.MyInfoWrap>
                          <S.MyProfile src={notification.profileImage || DefaultImg}/>
                          <S.MyInfoText>
                            <S.MyName>{notification.name}</S.MyName>
                            <S.MyNotificationDate>
                              {dayjs(notification.createdAt)
                                .locale("ko")
                                .format("YYYY년 MM월 DD일(ddd) HH:mm")}
                            </S.MyNotificationDate>
                          </S.MyInfoText>
                        </S.MyInfoWrap>
                        <S.MyContentBoxWrap>
                          <S.MyContentTitleWrap>
                            <S.MyContentTitle>
                              {notification.title || ""}
                            </S.MyContentTitle>
                          </S.MyContentTitleWrap>
                          <S.MyContentWrap>
                            <S.MyContent>
                              {notification.content 
                                ? notification.content.length < 50
                                  ? notification.content
                                  : `${notification.content.substring(0, 50)}...` : ""}
                            </S.MyContent>
                          </S.MyContentWrap>
                        </S.MyContentBoxWrap>
                      </S.MyNotificationTextWrap>
                      <S.MyNotificationImgWrap>
                        {notification.images && notification.images.length > 0 && (
                          <S.MyNotificationImg
                            rel="preconnect"
                            loading="lazy"
                            decoding="async"
                            src={notification.images[0].fileUrl}/>
                        )}
                      </S.MyNotificationImgWrap>
                    </S.MyNotificationBox>
                    <S.DeleteButtonWrap>
                      <S.DeleteButton
                        src={SettingImg}
                        onClick={() => {MyNotification.DeleteButtonClick(notification)}}></S.DeleteButton>
                    </S.DeleteButtonWrap>
                  </S.MyPostNotification>
                </S.MyPostNotificationWrap>
              )
            )
          )
        }
      {MyNotification.notificationData ? <div ref={MyNotification.observerRef}></div> : ""}
    </S.MyNotificationWrap>
  );
};

export default MyPostNotification;
