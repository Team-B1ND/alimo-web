import { useState, useEffect } from "react";
import ProfileImg from "src/assets/images/common/ProfileImg.svg";
import { categoryListState } from "src/store/profile/profileStore";
import { useRecoilValue } from "recoil";
import useSidbar from "src/hooks/sidbar/useSiebar";

const UseProfile = () => {
  const { Name, image } = useSidbar();
  const [Category, setCategory] = useState<string[]>([]);
  const CategoryListValue = useRecoilValue(categoryListState); // 값만

  useEffect(() => {
    setCategory(CategoryListValue);
  }, []);

  const finalImage = image && image.length > 0 ? image : ProfileImg;

  return {
    Name,
    image: finalImage,
    Category,
  };
};

export default UseProfile;
