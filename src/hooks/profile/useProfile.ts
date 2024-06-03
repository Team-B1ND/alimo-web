import { useState, useEffect } from "react";
import ProfileImg from "src/assets/images/common/ProfileImg.svg";
import { categoryListState } from "src/store/profile/profileStores";
import { useRecoilValue } from "recoil";
import useSidebar from "src/hooks/sidebar/useSidebar";

const useProfile = () => {
  const { Name, image } = useSidebar();
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

export default useProfile;
