import * as S from "./style";
import UseLogout from "src/hooks/auth/useLogout";
import { ProfileAlertProps } from "src/types/profile/profileAlert.types";

const ProfileAlert = ({ onClose, onOpen }: ProfileAlertProps) => {
  const { logOut } = UseLogout();
  return (
    <S.Main onClick={onClose}>
      <S.AlertMain>
        <S.ProfileButton
          onClick={() => {
            onOpen();
          }}
        >
          내 프로필
        </S.ProfileButton>
        <S.LogOut onClick={logOut}>로그아웃</S.LogOut>
      </S.AlertMain>
    </S.Main>
  );
};

export default ProfileAlert;
