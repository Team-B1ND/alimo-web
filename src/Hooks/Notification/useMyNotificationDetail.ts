import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FileData } from "src/types/MyNotificationDetail/File.interface";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";

const useMyNotificationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notificationDetailData, setNotificationDetailData] = useState<any>([]);
  const [isImageError, setIsImageError] = useState<boolean>(true);
  const [fileSize, setFileSize] = useState<string[]>([]);

  const HandleFileDownLoad = (fileUrl: string) => {
    window.open(fileUrl, "_blank");
  };

  const HandleImageError = () => {
    setIsImageError(false);
  };

  const HandleClose = () => {
    navigate("/write-read");
  };

  useEffect(() => {
    const NotificationRead = async () => {
      await alimoV1Axios.get(`${CONFIG.serverUrl}/notification/read/${id}`).then((res) => {
        setNotificationDetailData(res.data.data);

        let fileSizeData: string[] = [];
        const fileData = res.data.data.files;
        fileData.map((fileData: FileData) => {
          let fileSize = fileData.fileSize;
          const sizes = ["B", "KB", "MB", "GB", "TB"];

          for (let i = 0; i < sizes.length; i++) {
            if (parseInt(fileSize) < 1024) {
              fileSizeData.push(`${fileSize} ${sizes[i]}`);
              break;
            }
            fileSize = `${(parseInt(fileSize) / 1024).toFixed(1)}`;
          }
        });
        setFileSize(fileSizeData);
      });
    };
    NotificationRead();
  }, [id]);
  return {
    notificationDetailData,
    HandleFileDownLoad,
    isImageError,
    HandleImageError,
    fileSize,
    HandleClose,
  };
};

export default useMyNotificationDetail;
