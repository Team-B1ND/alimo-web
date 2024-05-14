import { CategoryDataAtom, MemberData, MemberId, Permission, newSelectedData } from "src/store/category/category.store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { showToast } from "src/libs/toast/swal";

const useMemberManage = () => {
  const isSelctedCategory = useRecoilValue(newSelectedData);
  const MemberID = useRecoilValue(MemberId);
  const permission = useRecoilValue(Permission);
  const setMemberData = useSetRecoilState(MemberData);
  const setCategoryData = useSetRecoilState(CategoryDataAtom);
  const handleGivePermission = async () => {
    if (permission === "ACCESS_MEMBER") {
      await alimoV1Axios.patch("/permission/change-admin", {
        memberId: MemberID,
        categoryName: isSelctedCategory,
      });
    } else {
      await alimoV1Axios.patch("permission/change-student", {
        memberId: MemberID,
        categoryName: isSelctedCategory,
      });
    }
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
        .then(async () => {
          try {
            await alimoV1Axios
              .get(`/category/get-member?page=1&size=1000&categoryName=${isSelctedCategory}&searchKeyword=`)
              .then((res) => {
                setMemberData(res.data.data);
              });
            await alimoV1Axios.get(`/category/get-category?page=1&size=1000&searchKeyword=`).then((res) => {
              setCategoryData(res.data.data);
            });
          } catch (error) {
            console.log(error);
          }
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
