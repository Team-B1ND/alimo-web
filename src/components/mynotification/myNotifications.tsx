import * as S from "src/components/myNotification/style";
import SideBar from "src/components/sideBar/sideBar";
import Mypost from "src/components/myNotification/myPostNotifications";


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
