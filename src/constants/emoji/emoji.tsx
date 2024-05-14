import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmojiData } from "src/types/myNotificationDetails/Emoji.interface"; 
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import * as S from "src/constants/emoji/style";

const Emoji = () => {
  const { id } = useParams();
  const [notificationEmojiData, setNotificationEmojiData] = useState<EmojiData[]>([]);

  useEffect(() => {
    const NotificationEmojiLoad = async () => {
      await alimoV1Axios
        .get(`emoji/load/${id}`)
        .then((res) => {
          setNotificationEmojiData(res.data.data);
        });
    };
    NotificationEmojiLoad();
  }, [id]);

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
          <S.EmojiBox key={data.emojiName}>
            <S.Emoji>{ChangeEmoji(data.emojiName)}</S.Emoji>
            <S.EmojiCnt>{data.count}</S.EmojiCnt>
          </S.EmojiBox>
        ))}
      </S.MyNotificationEmojiBox>
    </S.MyNotificationEmojiWrap>
  );
};

export default Emoji;
