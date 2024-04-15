import React from "react";
import * as S from "src/components/Write/style/Write.style";
import { ImagePreViewProps } from "src/types/Write/write.type";
const PreviewImage: React.FC<ImagePreViewProps> = ({ previewImage }) => {
  return (
    <>
      {previewImage.map((image, idx) => (
        <div key={idx}>
          <S.ViewImage src={URL.createObjectURL(image)} />
        </div>
      ))}
    </>
  );
};

export default PreviewImage;
