import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import Swal from "sweetalert2";
import { showToast } from "src/lib/Toast/Swal";

const useMyNotification = () => {
  const [notificationData, setNotificationData] = useState<
    MyNotificationData[]
  >([]);
  const [DataAbsence, setDataAbsence] = useState(true);
  // const [Image , setImage] = useState<string>("");
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

  const DeleteButtonClick = async (notification: MyNotificationData) => {
    const notificationIdValue = notification.notificationId;

    Swal.fire({
      title: "정말로 공지를 삭제하시겠습니까?",
      text: "공지를 삭제하면 다시 되돌릴 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D9D9D9",
      confirmButtonText: "공지 삭제",
      cancelButtonText: "취소",
      reverseButtons: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await alimoV1Axios
            .delete(
              `${CONFIG.serverUrl}/notification/delete/${notificationIdValue}`
            )
            .then(() => {
              showToast("success", "공지 삭제성공");
            });
        } catch (error) {
          showToast("error", "공지 삭제실패");
          console.log(error);
        }
      }
    });
  };

  return {
    notificationData,
    DataAbsence,
    DeleteButtonClick,
  };
};

export default useMyNotification;
