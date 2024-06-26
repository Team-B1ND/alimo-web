import { useEffect, useState } from "react";
import { MyNotificationData } from "src/types/myNotifications/myNotifications.interface";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import Swal from "sweetalert2";
import { showToast } from "src/libs/toast/swal";
import { useInView } from "react-intersection-observer";

const useMyNotification = () => {
  const sizeNum = 20;
  const [pageNum, setPageNum] = useState(0);
  const [notificationData, setNotificationData] = useState<MyNotificationData[]>([]);
  const [loding, setLoding] = useState(false)
  const [error, setError] = useState(false);
  const [DataAbsence, setDataAbsence] = useState(false);
  const [isView, setIsView] = useState(true);
  const [observerRef, inView] = useInView({threshold: 0, delay: 200,});

  useEffect(() => {
    if (inView && isView && notificationData.length % sizeNum === 0) {
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
              setNotificationData(prevData => prevData.filter(item => item.notificationId !== notificationIdValue));
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
        if (pageNum === 1) {
          setLoding(true);
          setDataAbsence(true);
        }
        try {
          await alimoV1Axios
            .get(`notification/load/my`, {
              params: { page: pageNum, size: sizeNum },
            })
            .then((res) => {
              setLoding(false);
              const newNotificationData = res.data.data;
              
              if (newNotificationData.length > 0) {
                setNotificationData([...notificationData, ...newNotificationData]);
                setDataAbsence(false);
                setIsView(true);
              } else {
                setIsView(false);
              }
            });
        } catch (error) {
          showToast("error", "공지 불러오기 실패");
          setLoding(false);
          setError(true);
          console.log(error);
        }
      }
    };

    MyNotificationLoad();
  }, [pageNum]);

  return {
    observerRef,
    notificationData,
    loding,
    error,
    DataAbsence,
    DeleteButtonClick,
  };
};

export default useMyNotification;