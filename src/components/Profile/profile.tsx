import React, { useState } from "react";
import * as S from "src/components/Profile/style/Profile.style";
import SideBar from "src/constants/SideBar/SideBar";
import ProfileImg from "src/assets/img/profileimg.png";
import ChangeImg from "src/assets/img/Group 263.png";
import CloseImg from "src/assets/img/Closeimg.png"

const Profile = ({ onClose }: { onClose: () => void }) =>{
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const handleChangeImg = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    const reader = new FileReader();

    reader.onload = () => {
      setSelectedImg(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <S.Profile>
      <SideBar />
      <S.Main>
        <S.UserProfile>
          <S.ProfilePageNanme>프로필</S.ProfilePageNanme>
          <S.User>
            <S.profileImg>
          <S.SetImg src={selectedImg || ProfileImg}></S.SetImg>
            <S.ChangeFile>
              <label htmlFor="change-img">
                <img src={ChangeImg} alt="Change Image" />
              </label>
              <S.Changbutton name="file" type="file" id="change-img" onChange={handleChangeImg} />
            </S.ChangeFile>
            <span>이진주</span>
            </S.profileImg>
          </S.User>
          <S.Category>
            <S.IndividualCategories>1학년</S.IndividualCategories>
            <S.IndividualCategories>2학년</S.IndividualCategories>
            <S.IndividualCategories>2학년</S.IndividualCategories>
            <S.IndividualCategories>2학년</S.IndividualCategories>
            <S.IndividualCategories>2학년 dsdsdsd</S.IndividualCategories>
          </S.Category>
          <S.ChangSucces src={CloseImg}  onClick={onClose}></S.ChangSucces>
        </S.UserProfile>
      </S.Main>
    </S.Profile>
  );
}

export default Profile