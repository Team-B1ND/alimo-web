import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const [notificationDetailData, setNotificationDetailData] = useState<any>([]);
  const [isImageError, setIsImageError] = useState<boolean>(true);

  const handleImageError = () => {
    setIsImageError(false);
  };
  useEffect(() => {
    const NotificationRead = async () => {
      await axios
        .get(`${CONFIG.serverUrl}/notification/read/${id}`, {
          headers: {
            Authorization: `Bearer ${CONFIG.accessToken}`,
          },
        })
        .then((res) => {
          setNotificationDetailData(res.data.data);
          console.log(res.data.data.files);
        });
    };
    NotificationRead();
  }, []);
  return {
    notificationDetailData,
    isImageError,
    handleImageError,
  };
};

export default useMyNotificationDetail;
