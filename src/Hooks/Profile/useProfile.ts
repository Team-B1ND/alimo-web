import React, { useState, useEffect } from "react";
import axios from "axios";
import CONFIG from "src/config/config.json";
import SidbarInfo from "src/Hooks/Sidbar/useSiebar";
import ProfileImg from "src/assets/img/profileimg.png";

const UseProfile = () => {
  const { Name, image } = SidbarInfo();
  const [Category , setCategory] = useState<string[]>([])
  const accessToken = localStorage.getItem("accessToken") 
  const finalImage = image.length > 0 ? image : ProfileImg;
  const Categorylist = async()=>{
    const response = await axios.get(`${CONFIG.serverUrl}/member/category-list`,{
      headers : {
        Authorization : `Bearer ${accessToken}`
      }
    })
    setCategory(response.data.data.roles)
  }
  useEffect(() => {
    Categorylist();
  }, []);
  return {
    Name,
    image: finalImage,
    Category,
  };
};

export default UseProfile;
