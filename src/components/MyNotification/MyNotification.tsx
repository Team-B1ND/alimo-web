import React, { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotification from "src/components/MyNotification/MyPostNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyWriteView = () => {
  const accessToken =
  "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MDk4Nzc4NjMsImV4cCI6MTcwOTg3OTY2M30.Fk3-EUFNVGB7l-762-dJGDpQtKIC_fRY4nyA5KmsOk4lajMIYUg6BNr9Fp6UKHQl-MHYNMROZG7t4uHrmmq-1Q";
  interface NotificationType {
    notificationId: number;
  }
  const [notificationData, setNotificationData] = useState<NotificationType[]>(
    []
  );
  useEffect(() => {
    const NotificationLoad = async () => {
      try {
        const response = await axios.get(
          `${CONFIG.serverUrl}/notification/load/my`,
          {
            params: { page: 1, size: 100 },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        setNotificationData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    NotificationLoad();
  }, []);

  return (
    <S.WriteRead>
      <SideBar />
      <S.WriteReadView>
        <S.WriteReadWrap>
          {notificationData.map((data) => (
            <MyPostNotification
              key={data.notificationId}
              notificationData={data}
            />
          ))}
        </S.WriteReadWrap>
      </S.WriteReadView>
    </S.WriteRead>
  );
};

export default MyWriteView;
