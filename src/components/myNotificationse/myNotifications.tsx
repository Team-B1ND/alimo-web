import * as S from "src/components/myNotificationse/style";
import Mypost from "src/components/myNotificationse/myPostNotifications";


const MyNotification = () => {
  return (
    <S.MyNotification>
      <S.MyNotificationView>
        <Mypost />
      </S.MyNotificationView>
    </S.MyNotification>
  );
};


export default MyNotification;