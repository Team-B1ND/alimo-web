import * as S from "src/components/myNotificationse/style";

const Skeleton = () => {
  return (
    <S.MyPostNotificationWrap>
      <S.SkeletonWrap>
        <S.SkeletonBox>
          <S.MyNotificationTextWrap>
            <S.MyInfoWrap>
              <S.ProfileSkeleton></S.ProfileSkeleton>
              <S.MyInfoText>
                <S.MyInfoSkeleton></S.MyInfoSkeleton>
              </S.MyInfoText>
            </S.MyInfoWrap>
            <S.MyContentBoxWrap>
              <S.TitleSkeleton></S.TitleSkeleton>
              <S.ContentSkeleton></S.ContentSkeleton>
            </S.MyContentBoxWrap>
          </S.MyNotificationTextWrap>
        </S.SkeletonBox>
      </S.SkeletonWrap>
    </S.MyPostNotificationWrap>
  );
};

export default Skeleton;
