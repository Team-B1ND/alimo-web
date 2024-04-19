import React, { useEffect } from "react";
import * as S from "./style";
import useMemberManage from "src/hooks/Category/useMemberManage";

const PermissionModal = ({ onClose }: { onClose: () => void }) => {
  const { ...hooks } = useMemberManage();

  return (
    <S.Main onClick={onClose}>
      <S.PermissionModalWrap>
        <S.GivePermission onClick={() => hooks.handleGivePermission()}>권한 부여</S.GivePermission>
        <div></div>
        <S.DenyMember onClick={hooks.handleDeleteMember}>멤버 삭제</S.DenyMember>
      </S.PermissionModalWrap>
    </S.Main>
  );
};

export default PermissionModal;
