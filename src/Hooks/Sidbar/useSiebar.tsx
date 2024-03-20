import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useSideBarNavigation from "src/util/useSideBarNavigation";
import CONFIG from "src/config/config.json";
import { categoryListState } from "src/store/profile/ProfileStore";
import { useRecoilState } from "recoil";

const Sidbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isProfileAlert, setProfileAlert] = useState(false);
  const [isProfile, setProfile] = useState(false);
  const [isSetting, setSetting] = useState(false);
  const [Name, setName] = useState("");
  const [image, setimage] = useState("");
  const [Category, setCategory] = useState<string[]>([]);
  const accestoken = localStorage.getItem("accestoken");
  const [categoryList, setCategoryList] = useRecoilState(categoryListState); //
  const Categorylist = async () => {
    const response = await axios.get(`${CONFIG.serverUrl}/category/list/member`, {
      headers: {
        Authorization: `Bearer ${accestoken}`,
      },
    });
    const CategoryData = response.data.data.roles;
    setCategory(CategoryData);
    setCategoryList(CategoryData);
  };

  useEffect(() => {
    Categorylist();
  }, []);
  const ProfileInfo = async () => {
    try {
      const response = await axios.get(`${CONFIG.serverUrl}/member/info`, {
        headers: {
          Authorization: `Bearer ${accestoken}`,
        },
      });
      const userData = response.data.data;
      setName(userData.name);
      setimage(userData.image);
    } catch (error) {
      console.log(error);
    }
  };
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
  useEffect(() => {
    ProfileInfo();
  }, []);
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
