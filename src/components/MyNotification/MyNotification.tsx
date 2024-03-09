import React, { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotification from "src/components/MyNotification/MyPostNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyNotification = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MDk5NzI1MjAsImV4cCI6MTcwOTk3NDMyMH0.gmc7W2U5BqMOLqsNtsprFKlsaDEvxPsxzMp-seQ2bRrqy2BLjsp__QoLS-Mo3DAcBJV9Fp3wojt-daFTzSSJuA";
  interface NotificationType {
    notificationId: number;
  }
  const [notificationData, setNotificationData] = useState<NotificationType[]>(
    []
  );
  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        const response = await axios.get(
          `${CONFIG.serverUrl}/notification/load/my`,
          {
            params: { page: 1, size: 50 },
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

    MyNotificationLoad();
  }, []);

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
