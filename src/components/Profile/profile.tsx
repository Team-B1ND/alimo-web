import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as s from "src/style/Profile.style/Profile.style";
import SideBar from "src/components/SideBar/SideBar";
import UserImage from "src/img/Profile-Dummy.jpg";
import SettingImage from "src/img/Vector.png";
import ProfileImg from "src/img/profileimg.png";
import ChangeImg from "src/img/Group 266.png";

export default function Profile() {
  const navigate = useNavigate();
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
    <s.Profile>
      <SideBar />
      <s.Main>
        <s.UserProfile>
          <s.User>
            <s.SetImg src={selectedImg || ProfileImg}></s.SetImg>
            <s.ChangeFile>
              <label htmlFor="change-img">
                <img src={ChangeImg} alt="Change Image" />
              </label>
              <s.Changbutton name="file" type="file" id="change-img" onChange={handleChangeImg} />
            </s.ChangeFile>
            <span>이진주</span>
          </s.User>
          <s.ChangSucces onClick={() => navigate("/main")}>수정완료</s.ChangSucces>
        </s.UserProfile>
      </s.Main>
    </s.Profile>
  );
}
