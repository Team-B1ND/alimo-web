import * as S from "src/components/mynotifications/style";
import SideBar from "src/components/sideBar/sideBar";
import Mypost from "src/components/mynotifications/myPostNotifications";

const MyNotification = () => {
  return (
    <S.MyNotification>
      <SideBar />
      <S.MyNotificationView>
        <Mypost />
      </S.MyNotificationView>
    </S.MyNotification>
  );
};

export default MyNotification;
