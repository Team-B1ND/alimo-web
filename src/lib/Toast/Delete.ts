import Swal from "sweetalert2";
import { alimoV1Axios } from "src/lib/axios/CustomAxios";
import { showToast } from "src/lib/Toast/Swal";

export const DeleteModal = (notificationIdValue: number) => {
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
          .delete(`/notification/delete/${notificationIdValue}`)
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
