import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CONFIG from "src/config/config.json";
import * as S from "src/constants/Emoji/style/Emoji.style";

const Emoji = () => {
  interface EmojiData {
    emojiName: string;
    count: number;
  }
  const accessToken =
    "eyJKV1QiOiJBQ0NFU1MiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiQXV0aG9yaXphdGlvbiI6IlRFQUNIRVIiLCJpYXQiOjE3MTAxNjMxNzAsImV4cCI6MTcxMDE2NDk3MH0.MVczad3iYMZ-F4NTJYs_Ex20ozcOklYbQP8gJDB1ZeNIHx-BM1DgmlG84yMlzXKC-iDH9x2D5P1AG5i1mCq5qg";
  const { id } = useParams();
  const [notificationEmojiData, setNotificationEmojiData] = useState<
    EmojiData[]
  >([]);

  useEffect(() => {
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
    NotificationEmojiLoad();
  }, []);

  const ChangeEmoji = (emoji: string) => {
    switch (emoji) {
      case "OKAY":
        return "👌";
      case "LOVE":
        return "😍";
      case "LAUGH":
        return "😂";
      case "SAD":
        return "😢";
      case "ANGRY":
        return "😡";
    }
  };
  return (
    <S.MyNotificationEmojiWrap>
      <S.MyNotificationEmojiBox>
        {notificationEmojiData.map((data) => (
          <S.EmojiBox>
            <S.Emoji>{ChangeEmoji(data.emojiName)}</S.Emoji>
            <S.EmojiCnt>{data.count}</S.EmojiCnt>
          </S.EmojiBox>
        ))}
      </S.MyNotificationEmojiBox>
    </S.MyNotificationEmojiWrap>
  );
};

export default Emoji;
