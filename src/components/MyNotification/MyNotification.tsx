import React, { useEffect, useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotification from "src/components/MyNotification/MyPostNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyNotification = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MDk5ODA1MDEsImV4cCI6MTcwOTk4MjMwMX0.oJ6bQiZF63BLeRBXm8Sr8NPXAy_DcxGxdWxZYNQFKN9uYwXv2Bpu-NjyobwhazhIMdoyOpZcFpmQZA0NrNZoxQ";
  const [notificationData, setNotificationData] = useState<NotificationType[]>(
    []
  );
  interface NotificationType {
    notificationId: number;
  }

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 50 },
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          })
          .then((res) => {
            setNotificationData(res.data.data);
          });
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
