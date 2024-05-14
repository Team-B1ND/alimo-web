import React from "react";
import * as S from "src/components/categoryManage/permissionModal/style";
import useMemberManage from "src/hooks/category/useMemberManage";

const PermissionModal = ({ onClose }: { onClose: () => void }) => {
  const { ...member } = useMemberManage();

  return (
    <S.Main onClick={onClose}>
      <S.PermissionModalWrap>
        <S.GivePermission onClick={() => member.handleGivePermission()}>권한 부여</S.GivePermission>
        <div></div>
        <S.DenyMember onClick={member.handleDeleteMember}>멤버 삭제</S.DenyMember>
      </S.PermissionModalWrap>
    </S.Main>
  );
};

export default PermissionModal;
