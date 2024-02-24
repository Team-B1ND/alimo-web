import React, { useState } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SidbarInfo from "src/Hooks/Sidbar/useSiebar";
import ProfileImg from "src/assets/img/profileimg.png";

const UseProfile = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { Name, image } = SidbarInfo();
  const [file, setFile] = useState<File | undefined>();
  const finalImage = image.length > 0 ? image : ProfileImg;
  const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImg(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    }

    try {
      const formData = new FormData();
      if (file) {
        formData.append("images", file);
      }
      const response = await axios.patch(
        `${CONFIG.serverUrl}/member/modify`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${""}`,
          },
        }
      );
      if (response.status === 200) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    Name,
    image: finalImage,
    selectedImg,
    handleChangeImg,
  };
};

export default UseProfile;
