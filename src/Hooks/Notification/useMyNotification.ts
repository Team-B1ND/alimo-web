import React, { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<MyNotificationData[]>([]);

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await alimoV1Axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 1000 },
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
  return {
    notificationData,
  };
};
export default useMyNotification;
