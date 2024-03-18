import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSideBarNavigation from "src/util/Sidebar/useSideBarNavigation";
import CONFIG from "src/config/config.json"
import { categoryListState } from "src/store/profile/ProfileStore";
import { useRecoilState } from "recoil";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const Sidbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileAlert, setProfileAlert] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [isSetting, setSetting] = useState(false);
  const [Name, setName] = useState<string>("");
  const [image, setimage] = useState("");
  const [category, setCategory] = useState<string[]>([]);
  const [categoryList, setCategoryList] = useRecoilState(categoryListState); 
  const CategoryList = async () => {
    const response = await alimoV1Axios.get(`${CONFIG.serverUrl}/category/list/member`);
    const CategoryData = response.data.data.roles;
    setCategory(CategoryData);
    setCategoryList(CategoryData);
  };

  useEffect(() => {
    CategoryList();
  }, []);
    const ProfileInfo = async()=>{
      
        try{
            const response = await alimoV1Axios.get(`${CONFIG.serverUrl}/member/info`);
            const userData = response.data.data;
            setName(userData.name)
            setimage(userData.image)
        }catch(error){
            console.log(error);
            
        }
    }
    //프로필 설정
  const OpenProfileSetting = () => {
    setProfileAlert((prev) => !prev);
  };
  //프로필
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




