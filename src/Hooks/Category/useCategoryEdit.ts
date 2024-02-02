import { useState } from "react";
import Swal from "sweetalert2";
const useCategoryEdit = () => {
  const [nameChangeAllow, setNameChangeAllow] = useState<boolean>(false);

  const onClickInputPrompt = async () => {
    const { value: inputValue } = await Swal.fire({
      title: "",
      input: "text",
      inputLabel: "주의: 즉시 모든유저에게 반영됩니다!",
      inputPlaceholder: "카테고리 이름을 입력해주세요",
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "카테고리 이름을 입력해주세요.";
        }
      },
      confirmButtonColor: "#"
    });

    if (inputValue) {
      Swal.fire(`카테고리 이름이 ${inputValue}로 변경되었습니다.`);
    }
  };

  return {
    nameChangeAllow,
    onClickInputPrompt,
  };
};

export default useCategoryEdit;