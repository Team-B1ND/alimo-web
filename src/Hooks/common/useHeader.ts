import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useHeader = () => {
  const navigate = useNavigate();
  const [notificationId, setNotificationId] = useState<number>(0);

  const handlePostNotification = async () => {
    try {
      await alimoV1Axios.post("notification/create").then((res) => {
        setNotificationId(res.data.data.NotificationId);
        navigate("/write");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    notificationId,
    handlePostNotification,
  };
};

export default useHeader;
