import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import Emoji from "src/constants/Emoji/Emoji";
import CommentList from "src/components/MyNotification/MyNotificationDetail/Comment/CommentList";
import * as S from "src/components/MyNotification/MyNotificationDetail/style/MyNotificationDetail.style";

const WriteReadDetail = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAzMTc0NzksImV4cCI6MTcxMDMxOTI3OX0.-I-0nKP60hZj7KeGWDBSwps11vUwI9TAkAK5RQ10FgWdC8MRxSem8uCCsbuc5StXG0aNT8S5NLxCKtyGE_N6zQ";
  const { id } = useParams();
  const [notificationDetailData, setNotificationDetailData] = useState<any>([]);
  const [isImageError, setIsImageError] = useState<boolean>(true);

  const handleImageError = () => {
    setIsImageError(false);
  };
  useEffect(() => {
    const NotificationRead = async () => {
      await axios
        .get(`${CONFIG.serverUrl}/notification/read/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setNotificationDetailData(res.data.data);
        });
    };
    NotificationRead();
  }, []);
  return (
    <S.MyNotificationDetailWrap>
      <SideBar />
      <S.MyNotificationDetailBox>
        <S.MyNotificationDetail>
          <S.MyNotification>
            <S.MyNotificationInfoWrap>
              <S.MyProfile src={notificationDetailData.profileImage} />
              <S.MyInfoWrap>
                <S.MyName>{notificationDetailData.name}</S.MyName>
                <S.MyNotificationDate>
                  {notificationDetailData.createdAt}
                </S.MyNotificationDate>
              </S.MyInfoWrap>
            </S.MyNotificationInfoWrap>
            <S.MyNotificationTitleWrap>
              <S.MyNotificationTitle>
                {notificationDetailData.title}
              </S.MyNotificationTitle>
            </S.MyNotificationTitleWrap>
            <S.MyNotificationImgWrap>
              {notificationDetailData.images &&
                notificationDetailData.images.length > 0 && isImageError && (
                  <S.MyNotificationImg
                    src={notificationDetailData.images[0].fileUrl}
                    onError={handleImageError}
                  />
                )}
            </S.MyNotificationImgWrap>
            <S.MyNotificationContentWrap>
              <S.MyNotificationContent>
                {notificationDetailData.content}
              </S.MyNotificationContent>
            </S.MyNotificationContentWrap>
            <Emoji />
          </S.MyNotification>
        </S.MyNotificationDetail>
        <CommentList />
      </S.MyNotificationDetailBox>
    </S.MyNotificationDetailWrap>
  );
};

export default WriteReadDetail;
