import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import { alimoV1Axios } from "src/lib/axios/customAxios";
import CONFIG from "src/config/config.json";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<
    MyNotificationData[]
  >([]);
const [DataAbsence, setDataAbsence] = useState(true);

  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        const res = await alimoV1Axios.get(
          `${CONFIG.serverUrl}/notification/load/my`,
          {
            params: { page: 1, size: 1000 },
          }
        );
        setNotificationData(res.data.data);
        console.log(res.data.data);
        if(res.data.data.length === 0 ){
          setDataAbsence(false)
        }
        
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
