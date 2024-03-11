import React, { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import MyPostNotification from "src/components/MyNotification/MyPostNotification";
import * as S from "src/components/MyNotification/style/MyNotification.style";

const MyNotification = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAxNjA2NDIsImV4cCI6MTcxMDE2MjQ0Mn0.JgRoR3w05n_gz51yfXS8_wydO4rHEbpxPVj_dmb2gvSs3Vxv7yGG1P_9O6fCMG9D0_MAARpUB_c8JbcQgA-lUw";
  const [notificationData, setNotificationData] = useState<
    MyNotificationData[]
  >([]);

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 100 },
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
