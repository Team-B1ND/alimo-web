import React from "react";
import * as S from "./style";
import useWrite from "src/hooks/write/useWrite";
import { ImagePreViewProps } from "src/types/write/write.type";
const PreviewImage: React.FC<ImagePreViewProps> = ({ previewImage }) => {
  return (
    <>
      {previewImage.map((image, idx) => (
        <div key={idx}>
          <S.ViewImage src={image} />
        </div>
      ))}
    </>
  );
};

export default PreviewImage;
