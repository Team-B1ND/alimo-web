import React from "react";
import * as s from "src/style/Profile.style/Profile.style"
import SideBar from "src/components/SideBar/SideBar";
import UserImage from "src/img/Profile-Dummy.jpg"
import SettingImage from "src/img/Vector.png"
export default function Profile(){
return(
    <s.Profile>
    <SideBar/>
    <s.Main>
        <s.Mainview>
        <s.UserProfile>
            <s.User>
                <img src={UserImage} />
            </s.User>
            <s.UserName>
                이진주.T
            </s.UserName>
            <s.ProfileSetting>
                <img src={SettingImage}/>
            </s.ProfileSetting>
        </s.UserProfile>
        <s.UserProfile>
            <s.UniqueNumber>고유번호복사</s.UniqueNumber>
        </s.UserProfile>
        </s.Mainview>
    </s.Main>
    </s.Profile>
)
}