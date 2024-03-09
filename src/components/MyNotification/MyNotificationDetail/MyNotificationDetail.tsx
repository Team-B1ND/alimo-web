import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SideBar from "src/constants/SideBar/SideBar";
import Comment from "src/components/MyNotification/MyNotificationDetail/Comment/Comment";
import * as S from "src/components/MyNotification/MyNotificationDetail/style/MyNotificationDetail.style";

const WriteReadDetail = () => {
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MDk5ODA1MDEsImV4cCI6MTcwOTk4MjMwMX0.oJ6bQiZF63BLeRBXm8Sr8NPXAy_DcxGxdWxZYNQFKN9uYwXv2Bpu-NjyobwhazhIMdoyOpZcFpmQZA0NrNZoxQ";
  const { id } = useParams();
  const [notificationDetailData, setNotificationDetailData] = useState<any>([]);
  const [notificationEmojiData, setNotificationEmojiData] = useState<any>([]);

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

    const NotificationEmojiLoad = async () => {
      await axios
        .get(`${CONFIG.serverUrl}/emoji/load/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          setNotificationEmojiData(res.data.data);
        });
    };

    NotificationRead();
    NotificationEmojiLoad();
  }, []);

  const ChangeEmoji = (emoji: string) => {
    let answer = "";
    switch (emoji) {
      case "OKAY":
        answer = "👌";
        break;
      case "LOVE":
        answer = "😍";
        break;
      case "LAUGH":
        answer = "😂";
        break;
      case "SAD":
        answer = "😢";
        break;
      case "ANGRY":
        answer = "😡";
        break;
    }
    return answer;
  };
  return (
    <S.WriteReadDetailWrap>
      <SideBar />
      <S.WriteReadDetailBox>
        <S.WriteReadDetail>
          <S.MyPostNotifyWrap>
            <S.MyNotifyInfoWrap>
              <S.MyProfile src={notificationDetailData.profileImage} />
              <S.MyInfoWrap>
                <S.MyName>{notificationDetailData.name}</S.MyName>
                <S.MyNotifyDate>
                  {notificationDetailData.createdAt}
                </S.MyNotifyDate>
              </S.MyInfoWrap>
            </S.MyNotifyInfoWrap>
            <S.MyNotifyTitleWrap>
              <S.MyNotifyTitle>{notificationDetailData.title}</S.MyNotifyTitle>
            </S.MyNotifyTitleWrap>
            <S.MyNotifyImgWrap>
              {notificationDetailData.Images &&
                notificationDetailData.Images.length > 0 && (
                  <S.MyNotifyImg
                    src={notificationDetailData.Images[0].fileUrl}
                  />
                )}
            </S.MyNotifyImgWrap>
            <S.MyNotifyContentWrap>
              <S.MyNotifyContent>
                {notificationDetailData.content}
              </S.MyNotifyContent>
            </S.MyNotifyContentWrap>
            <S.MyNotifyEmoticonWrap>
              <S.MyNotifyEmoticonBox>
                {notificationEmojiData.map((data: any) => (
                  <S.EmoticonBox>
                    <S.Emoticon>{ChangeEmoji(data.emojiName)}</S.Emoticon>
                    <S.EmoticonCnt>{data.count}</S.EmoticonCnt>
                  </S.EmoticonBox>
                ))}
              </S.MyNotifyEmoticonBox>
            </S.MyNotifyEmoticonWrap>
          </S.MyPostNotifyWrap>
        </S.WriteReadDetail>
        <Comment />
      </S.WriteReadDetailBox>
    </S.WriteReadDetailWrap>
  );
};

export default WriteReadDetail;
