<<<<<<<< HEAD:src/components/mynotifications/skeleton/nullSkeleton.tsx
import * as S from "src/components/mynotifications/style";
========
import * as S from "src/components/myNotifications/style";
>>>>>>>> main:src/components/myNotifications/skeleton/nullSkeleton.tsx

const NullSkeleton = () => {
  return (
    <S.MyPostNotificationWrap>
      <S.Skeleton>작성한 공지글이 없습니다</S.Skeleton>
    </S.MyPostNotificationWrap>
  );
};
export default NullSkeleton;
