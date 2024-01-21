import React from "react";
import { useNavigate } from "react-router-dom";
import * as s from "src/style/Profile.style/Profile.style";
import SideBar from "src/components/SideBar/SideBar";
import UserImage from "src/img/Profile-Dummy.jpg";
import SettingImage from "src/img/Vector.png";
import ProfileImg from "src/img/profileimg.png";
import ChangImg from "src/img/Group 266.png";
export default function Profile() {
  const navigate = useNavigate();

  return (
    <s.Profile>
      <SideBar />
      <s.Main>
        <s.UserProfile>
          <s.User>
            <s.SetImg src={ProfileImg}></s.SetImg>
            <s.ChangeFile  >
              <label htmlFor="file">
                <img src={ChangImg}  alt="Change Image"/>
              </label>
              <s.Changbutton name="file" type="file" />
            </s.ChangeFile>
            <span>이진주</span>
          </s.User>
          <s.ChangSucces onClick={() => navigate("/main")}>
            수정완료
          </s.ChangSucces>
        </s.UserProfile>
      </s.Main>
    </s.Profile>
  );
}
