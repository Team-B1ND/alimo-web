import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/profileStores";
import { useRecoilState } from "recoil";
import { alimoV1Axios } from "src/libs/axios/CustomAxios";
import { NavigationProps } from "src/types/sidebar/sidebar.types";

const useSidebar = () => {
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
    await alimoV1Axios.get(`${CONFIG.serverUrl}/category/list/member`).then((res) => {
      const CategoryData = res.data.data.roles;
      setCategory(CategoryData);
      setCategoryList(CategoryData);
    });
  };

  const ProfileInfo = useCallback(() => {
    try {
      alimoV1Axios.get(`${CONFIG.serverUrl}/member/info`).then((res) => {
        const userData = res.data.data;
        setName(userData.name);
        setimage(userData.image);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    ProfileInfo();
  }, []);

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
    ProfileInfo();
    CategoryList();
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
export default useSidebar;
