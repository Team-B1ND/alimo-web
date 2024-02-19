import * as S from "./style/Alert";

interface ProfileAlertProps {
  onClose: () => void;
  onOpen: () => void;
}

const ProfileAlert = ({ onClose, onOpen }: ProfileAlertProps) => {
  const openProfile = () => {
    onOpen();
    onClose();
  };

  return (
    <S.Main >
      <S.AlertMain>
        <S.ProfileButton onClick={openProfile}>내 프로필</S.ProfileButton>
        <S.LogOut>로그아웃</S.LogOut>
      </S.AlertMain>
    </S.Main>
  );
};

export default ProfileAlert;
