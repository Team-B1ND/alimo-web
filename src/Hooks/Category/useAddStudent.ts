import { useState } from "react";

const useStudent = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const onClickClickedStudent = () => {
    setIsClicked(!isClicked);
  };

  return {
    isClicked,
    onClickClickedStudent,
  };
};

export default useStudent;
