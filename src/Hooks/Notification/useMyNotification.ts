import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import { showToast } from "src/lib/Toast/Swal";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<MyNotificationData[]>([]);
  const [DataAbsence, setDataAbsence] = useState(true);
  const [Image , setImage] = useState<string>("");
  useEffect(() => {
    const MyNotificationLoad = async () => {
      try {
        await alimoV1Axios
          .get(`${CONFIG.serverUrl}/notification/load/my`, {
            params: { page: 1, size: 20 },
          })
          .then((res) => {
            const NotificationData = res.data.data;
            setNotificationData(NotificationData);
            console.log(NotificationData);
            if (NotificationData.length === 0) {
              setDataAbsence(false);
            }
          });
      } catch (error) {
        console.log(error);
      }
    };

    MyNotificationLoad();
  }, []);
  const DeleteButtonClick = async (notification: MyNotificationData)=>{
    console.log("sdsd");
    
    const notificationIdValue=notification.notificationId;
    try{
      await alimoV1Axios
      .delete(`${CONFIG.serverUrl}/notification/delete`, {
        params:notificationIdValue
        
      }).then((res)=>{
        showToast("succes","삭제성공")
      })

    }catch(error){
      console.log(error);
      
    }
  }

  return {
    notificationData,
    DataAbsence,
    DeleteButtonClick,
  };
};

export default useMyNotification;
