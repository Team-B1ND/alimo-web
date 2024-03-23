import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<MyNotificationData[]>([]);
  const [DataAbsence, setDataAbsence] = useState(true);

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await alimoV1Axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 1000 },
          })
          .then((res) => {
            setNotificationData(res.data.data);
            if (res.data.data.length === 0) {
              setDataAbsence(false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };

    MyNotificationLoad();
  }, []);

  return {
    notificationData,
    DataAbsence,
  };
};

export default useMyNotification;
