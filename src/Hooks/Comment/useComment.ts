import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CONFIG from "src/config/config.json";
import { alimoV1Axios } from "src/lib/axios/customAxios";

const useComment = () => {
  const { id } = useParams();
  const commentRef = useRef(null);
  const [commentValue, setCommentValue] = useState<string>("");

  const handleChangeValue = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    commentRef: React.RefObject<HTMLTextAreaElement>
  ) => {
    if (commentRef.current) {
      commentRef.current.style.height = "auto";
      commentRef.current.style.height = commentRef.current.scrollHeight + "px";
      setCommentValue(e.target.value);
    }
  };

  const handleClickComment = async () => {
    try {
      await alimoV1Axios
        .post(`${CONFIG.serverUrl}/comment/create/${id}`, {
          content: commentValue,
          parentId: null,
        })
        .then((res) => {
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    commentRef,
    commentValue,
    handleChangeValue,
    handleClickComment,
  };
};

export default useComment;
