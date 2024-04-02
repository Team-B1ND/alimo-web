import React from "react";
import * as S from "./style";
import useCategoryManage from "src/Hooks/Category/useCateogyManage";

const PermissionModal = ({ onClose }: { onClose: () => void }) => {
  const { ...hooks } = useCategoryManage();

  return (
    <S.Main onClick={onClose}>
      <S.PermissionModalWrap>
        <S.GivePermission onClick={hooks.handleGivePermission}>권한 부여</S.GivePermission>
        <div></div>
        <S.DenyMember>멤버 삭제</S.DenyMember>
      </S.PermissionModalWrap>
    </S.Main>
  );
};

export default PermissionModal;
