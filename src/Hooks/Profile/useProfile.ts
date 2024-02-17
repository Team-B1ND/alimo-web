import React, { useState } from "react";
import axios from "axios";

const UseProfile =()=>{
    const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const handleChangeImg = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImg(reader.result as string);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
    try{
        const response = await axios.patch("#",{
            
        })
        if(response.status === 200){
            console.log("success");   
        }

    }catch(error){
        console.log(error);
        
    }
  };
  return{
    selectedImg,
    handleChangeImg,
  }
}
export default UseProfile