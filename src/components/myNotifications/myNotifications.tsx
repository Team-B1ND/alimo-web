import * as S from "./style";

import Mypost from "src/components/myNotifications/myPostNotifications";


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
