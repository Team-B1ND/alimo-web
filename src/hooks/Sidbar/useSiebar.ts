import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/ProfileStore";
import { useRecoilState } from "recoil";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { NavigationProps } from "src/types/login/Sidebar.types";

const Sidbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileAlert, setProfileAlert] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [isSetting, setSetting] = useState(false);
  const [Name, setName] = useState<string>("");
  const [image, setimage] = useState("");
  const [, setCategory] = useState<string[]>([]);
  const [, setCategoryList] = useRecoilState(categoryListState);
  const [isClickCategory, setIsClickCategory] = useState<string | null>(null);
  const CategoryList = async () => {
    const response = await alimoV1Axios.get(
      `${CONFIG.serverUrl}/category/list/member`
    );

    const CategoryData = response.data.data.roles;
    setCategory(CategoryData);
    setCategoryList(CategoryData);
  };

  const ProfileInfo = async () => {
    try {
      const response = await alimoV1Axios.get(
        `${CONFIG.serverUrl}/member/info`
      );
      const userData = response.data.data;
      setName(userData.name);
      setimage(userData.image);
    } catch (error) {
      console.log(error);
    }
  };
  //프로필 설정
  const OpenProfileSetting = () => {
    setProfileAlert((prev) => !prev);
  };
  //프로필
  const OpenProfile = () => {
    setProfile((prev) => !prev);
  };
  const OpenSetting = () => {
    setSetting((prev) => !prev);
  };
  useEffect(() => {
    CategoryList();
    ProfileInfo();
  }, []);

  //페이지 이동
  const HandleNavigation = ({ location, navigate }: NavigationProps) => {
    switch (location.pathname) {
      case "/":
        setIsClickCategory("카테고리 관리");
        break;
      case "/write-read":
        setIsClickCategory("내가 쓴 공지보기");
        break;
      default:
        setIsClickCategory("");
        break;
    }
  };

  const HandleCategoryClick = (itemName: string) => {
    setIsClickCategory(itemName);
    switch (itemName) {
      case "카테고리 관리":
        navigate("/");
        break;
      case "내가 쓴 공지보기":
        navigate("/write-read");
        break;
      default:
        navigate("");
    }
  };

  useEffect(() => {
    HandleNavigation({ location, navigate });
  }, [location.pathname]);

  return {
    Name,
    image,
    isProfileAlert,
    isProfile,
    isSetting,
    OpenProfileSetting,
    OpenProfile,
    OpenSetting,
    HandleCategoryClick,
    isClickCategory,
  };
};
export default Sidbar;
