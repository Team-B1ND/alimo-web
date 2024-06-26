import * as S from "./style";
import CloseImg from "src/assets/images/common/Closeimg.png";
import useProfile from "src/hooks/profile/useProfile";
const Profile = ({ onClose }: { onClose: () => void }) => {
  const { Name, image, Category } = useProfile();

  return (
    <S.Profile>
      <S.Main>
        <S.UserProfile>
          <S.ProfilePageNanme>프로필</S.ProfilePageNanme>
          <S.User>
            <S.profileImg>
              <S.SetImg>
                <img src={image} />
              </S.SetImg>
              <span>{Name}</span>
            </S.profileImg>
          </S.User>
          <S.Category>
            {Category.map((Categorys, index) => (
              <S.IndividualCategories key={index}>
                <span>{Categorys}</span>
              </S.IndividualCategories>
            ))}
          </S.Category>
          <S.ChangSucces src={CloseImg} onClick={onClose}></S.ChangSucces>
        </S.UserProfile>
      </S.Main>
    </S.Profile>
  );
};

export default Profile;
