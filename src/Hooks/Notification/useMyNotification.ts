import React, { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<
    MyNotificationData[]
  >([]);

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 1000 },
            headers: {
              Authorization: `Bearer ${CONFIG.accessToken}`,
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
  return {
    notificationData,
  };
};
export default useMyNotification;
