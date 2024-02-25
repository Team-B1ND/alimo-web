import * as S from "src/components/Profile/style/Profile.style";
import SideBar from "src/constants/SideBar/SideBar";
import CloseImg from "src/assets/img/Closeimg.png";
import UseProfile from "src/Hooks/Profile/useProfile";

const Profile = ({ onClose }: { onClose: () => void }) => {
  const { Name, image,Category, } = UseProfile();

  return (
    <S.Profile>
      <SideBar />
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
            {Category.map((Categorys)=>(
               <S.IndividualCategories><span>{Categorys}</span></S.IndividualCategories>
            ))}
           
          </S.Category>
          <S.ChangSucces src={CloseImg} onClick={onClose}></S.ChangSucces>
        </S.UserProfile>
      </S.Main>
    </S.Profile>
  );
};

export default Profile;
