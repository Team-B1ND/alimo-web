import * as S from "src/components/myNotifications/style";
import SideBar from "src/components/sideBar/sideBar";
import Mypost from "src/components/myNotifications/myPostNotifications";


const MyNotification = () => {
  return (
    <S.MyNotification>
      <SideBar/>

      <S.MyNotificationView>
        <Mypost />
      </S.MyNotificationView>
    </S.MyNotification>
  );
};


export default MyNotification;