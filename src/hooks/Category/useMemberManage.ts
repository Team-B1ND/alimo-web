import { MemberId, Permission, newSelectedData } from "src/store/category/category.store";
import { useRecoilValue } from "recoil";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { showToast } from "src/libs/Toast/Swal";

const useMemberManage = () => {
  const isSelctedCategory = useRecoilValue(newSelectedData);
  const MemberID = useRecoilValue(MemberId);
  const permission = useRecoilValue(Permission);

  const handleGivePermission = async () => {
    try {
      if (permission === "ACCESS_MEMBER") {
        await alimoV1Axios.patch("/permission/change-admin", {
          memberId: MemberID,
          categoryName: isSelctedCategory,
        });
      } else if (permission === "ACCESS_ADMIN") {
        await alimoV1Axios.patch("permission/change-student", {
          memberId: MemberID,
          categoryName: isSelctedCategory,
        });
      }
    } catch (error) {}
  };

  const handleDeleteMember = async () => {
    try {
      await alimoV1Axios
        .delete("/category/delete-member", {
          data: {
            memberList: [MemberID],
            categoryName: isSelctedCategory,
          },
        })
        .then(() => {
          showToast("success", "멤버가 삭제되었습니다.");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleGivePermission,
    handleDeleteMember,
  };
};


export default useMemberManage;