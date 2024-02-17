import React,{useState} from "react"
import * as S from "./style/Alert"
import Profile from "./profile";
const ProfileAlert = ({ onClose }: { onClose: () => void })=>{
    const [isOpenProfile, setOpenProfile] = useState<boolean>(false);
    const openProfile =()=>{
        setOpenProfile((prev) => !prev);
        
        
      }
    return(
        <S.Main onClick={onClose}>
        <S.AlertMain>
            <S.ProfileButton onClick={openProfile}>내 프로필</S.ProfileButton>
            <S.LogOut>로그아웃</S.LogOut>
            {isOpenProfile && <Profile onClose={openProfile} />}
        </S.AlertMain>
        </S.Main>
    )
}
export default ProfileAlert