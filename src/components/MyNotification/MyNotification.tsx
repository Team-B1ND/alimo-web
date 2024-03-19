import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotification from "src/components/MyNotification/MyPostNotification";
import useMyNotification from "src/Hooks/Notification/useMyNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyNotification = () => {
  const { notificationData } = useMyNotification();
  return (
    <S.MyNotification>
      <SideBar />
      <S.MyNotificationView>
        <S.MyNotificationWrap>
          {notificationData.map((data) => (
            <MyPostNotification
              key={data.notificationId}
              notificationData={data}
            />
          ))}
        </S.MyNotificationWrap>
      </S.MyNotificationView>
    </S.MyNotification>
  );
};

export default MyNotification;
