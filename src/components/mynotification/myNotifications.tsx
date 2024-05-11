import * as S from "src/components/myNotification/style";

import Mypost from "src/components/myNotification/myPostNotifications";


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
