import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const [notificationDetailData, setNotificationDetailData] = useState<any>([]);
  const [isImageError, setIsImageError] = useState<boolean>(true);
  const [fileSize, setFileSize] = useState<string>("");

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
          const fileData = res.data.data.files;

          setNotificationDetailData(res.data.data);
          if (fileData && fileData.length > 0) {
            let fileSize = fileData[0].fileSize;
            const sizes = ["Byte", "KB", "MB", "GB", "TB"];

            for (let i = 0; i < sizes.length; i++) {
              if (fileSize < 1024) {
                setFileSize(`${fileSize} ${sizes[i]}`);
                break;
              }
              fileSize = `${(fileSize / 1024).toFixed(1)}`;
            }
          }
        });
    };
    NotificationRead();
  }, []);
  return {
    notificationDetailData,
    isImageError,
    handleImageError,
    fileSize,
  };
};

export default useMyNotificationDetail;
