import { MemberId, newSelectedData } from "src/store/category/category.store";
import { useRecoilValue } from "recoil";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";

const useMemberManage = () => {
  const isSelctedCategory = useRecoilValue(newSelectedData);
  const MemberID = useRecoilValue(MemberId);

  const handleGivePermission = async () => {
    try {
      await alimoV1Axios.patch("/permissoin/change-admin", {
        memberId: MemberID,
        categoryName: isSelctedCategory,
      });
    } catch (e) {}
  };

  const handleDeleteMember = async () => {
    try {
      await alimoV1Axios
        .delete("/category/delete-member", {
          data: {
            memberList: [MemberID],
            categoroyName: isSelctedCategory,
          },
        })
        .then(() => {
          window.location.reload();
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
