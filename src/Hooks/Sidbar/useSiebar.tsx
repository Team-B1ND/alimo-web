import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSideBarNavigation from "src/util/Sidebar/useSideBarNavigation";
import CONFIG from "src/config/config.json"
import { categoryListState } from "src/store/profile/ProfileStore";
import { useRecoilState } from "recoil";
import token from "src/lib/token/token";
import {
  ACCESS_TOKEN_KEY,
} from "src/constants/token/token.constants";
import { Alimov1Axios } from "src/lib/axios/customAxios";

const Sidbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileAlert, setProfileAlert] = useState<boolean>(false);
  const [isProfile, setProfile] = useState<boolean>(false);
  const [isSetting, setSetting] = useState<boolean>(false);
  const [Name, setName] = useState<string>("");
  const [image, setimage] = useState("");
  const [Category, setCategory] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState); //
  const ACCESS_TOKEN=token.getToken(ACCESS_TOKEN_KEY);
  const Categorylist = async () => {
    const response = await Alimov1Axios.get(
      `${CONFIG.serverUrl}/category/list/member`,
      {
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      }
    );
    const CategoryData = response.data.data.roles;
    setCategory(CategoryData);
    setCategoryList(CategoryData);
  };

  useEffect(() => {
    Categorylist();
  }, []);
    const ProfileInfo = async()=>{
      
        try{
            const response = await axios.get(`${CONFIG.serverUrl}/member/info`,{
                headers: {
                    Authorization : `Bearer ${ACCESS_TOKEN}`
                }
            });
            const userData = response.data.data;
            setName(userData.name)
            setimage(userData.image)
        }catch(error){
            console.log(error);
            
        }
    }
  const OpenProfileSetting = () => {
    setProfileAlert((prev) => !prev);
  };
  const openProfile = () => {
    setProfile((prev) => !prev);
  };
  const openSetting = () => {
    setSetting((prev) => !prev);
  };
  const { handleCategoryClick, isClickCategory } = useSideBarNavigation({
    location,
    navigate,
  });
  useEffect(()=>{
    ProfileInfo();
  },[]);
  return {
    Name,
    image,
    isProfileAlert,
    isProfile,
    isSetting,
    OpenProfileSetting,
    openProfile,
    openSetting,
    handleCategoryClick,
    isClickCategory,
  };
};
export default Sidbar;
