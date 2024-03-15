import * as S from "./style/Alert";
import UseLogout from "src/Hooks/auth/useLogout";
interface ProfileAlertProps {
  onClose: () => void;
  onOpen: () => void;
}

const ProfileAlert = ({ onClose, onOpen }: ProfileAlertProps) => {
  const openProfile = () => {
    onOpen();
  };

  const { logOut } = UseLogout();
  return (
    <S.Main onClick={onClose}>
      <S.AlertMain>
        <S.ProfileButton onClick={openProfile}>내 프로필</S.ProfileButton>
        <S.LogOut onClick={logOut}>로그아웃</S.LogOut>
      </S.AlertMain>
    </S.Main>
  );
};

export default ProfileAlert;
