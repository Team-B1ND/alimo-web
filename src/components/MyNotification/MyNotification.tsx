import SideBar from "src/components/SideBar/SideBar";
import Mypost from "src/components/MyNotification/MyPostNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

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
