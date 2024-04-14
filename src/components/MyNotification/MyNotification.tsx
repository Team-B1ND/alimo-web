import * as S from "src/components/MyNotification/style";
import SideBar from "src/components/SideBar/SideBar";
import Mypost from "src/components/MyNotification/MyPostNotification";

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
