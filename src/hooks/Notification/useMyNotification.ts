import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/MyNotification/MyNotification.interface";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { showToast } from "src/libs/Toast/Swal";
import { useInView } from "react-intersection-observer";

const useMyNotification = () => {
  const [pageNum, setPageNum] = useState(0);
  const [notificationData, setNotificationData] = useState<
    MyNotificationData[]
  >([]);
  const [DataAbsence, setDataAbsence] = useState(true);
  const [observerRef, inView] = useInView({
    threshold: 0,
    delay: 200,
  });

  useEffect(() => {
    if (inView && notificationData.length%20 === 0) {
      setPageNum((current) => current + 1);
    }
  }, [inView]);

  // 공지글 삭제
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
            .delete(`notification/delete/${notificationIdValue}`)
            .then(() => {
              showToast("success", "공지 삭제성공");
              setPageNum(1);
            });
        } catch (error) {
          showToast("error", "공지 삭제실패");
          console.log(error);
        }
      }
    });
  };

  useEffect(() => {
    const MyNotificationLoad = async () => {
      if (pageNum) {
        try {
          await alimoV1Axios
            .get(`notification/load/my`, {
              params: { page: pageNum, size: 20 },
            })
            .then((res) => {
              const newNotificationData = res.data.data;
              setNotificationData([...notificationData, ...newNotificationData]);
              if (newNotificationData.length === 0) {
                setDataAbsence(false);
              }
            });
        } catch (error) {
          console.log(error);
        }
      }
    };

    MyNotificationLoad();
  }, [pageNum]);

  return {
    observerRef,
    notificationData,
    DataAbsence,
    DeleteButtonClick,
  };
};

export default useMyNotification;
