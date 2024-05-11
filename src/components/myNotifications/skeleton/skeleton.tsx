import * as S from "src/components/myNotifications/style";

interface Props {
  key: number;
}

const Skeleton = ({ key }: Props) => {
  return (
    <S.MyPostNotificationWrap key={key}>
      <S.SkeltonWrap>
        <S.Skelton></S.Skelton>
      </S.SkeltonWrap>
    </S.MyPostNotificationWrap>
  );
};

export default Skeleton;
