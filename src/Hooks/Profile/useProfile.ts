import { useState, useEffect } from "react";
import SidbarInfo from "src/Hooks/Sidbar/useSiebar";
import ProfileImg from "src/assets/img/profileimg.png";
import { categoryListState } from "src/store/profile/ProfileStore";
import { useRecoilValue } from "recoil";
import useSidbar from "src/Hooks/Sidbar/useSiebar";

const UseProfile = () => {
  const { Name, image } = useSidbar();
  const [Category, setCategory] = useState<string[]>([]);
  const finalImage = image.length > 0 ? image : ProfileImg;
  const CategoryListValue = useRecoilValue(categoryListState); // 값만
  useEffect(() => {
    setCategory(CategoryListValue)
  }, []);

  return {
    Name,
    image: finalImage,
    Category,
  };
};

export default UseProfile;
