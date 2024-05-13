import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { useNavigate } from "react-router-dom";
import * as S from "src/components/common/header/style";
import { useRecoilState } from "recoil";
import { NotificationIdData } from "src/store/write/write.store";

const Header = () => {
  const navigate = useNavigate();
  const [, setNotificationId] = useRecoilState(NotificationIdData);

  const onGetNotificationId = async () => {
    try {
      navigate("/write");
      await alimoV1Axios.post("/notification/create").then((res) => {
        setNotificationId(res.data.data.NotificationId);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.HeaderBarWrap>
      <S.UploadNewNotifyButton onClick={onGetNotificationId}>새 공지 작성</S.UploadNewNotifyButton>
    </S.HeaderBarWrap>
  );
};

export default Header;
