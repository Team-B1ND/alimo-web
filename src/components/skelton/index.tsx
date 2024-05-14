import React from "react";
import * as S from "./style";

interface SkeletonProps {
  height: number;
}

const Skeleton: React.FC<SkeletonProps> = ({ height }) => {
  return (
    <S.CategorySkeletonContainer>
      {Array.from({ length: 8 }).map((item, idx) => (
        <S.CategorySkeletonItem height={height} key={idx} />
      ))}
    </S.CategorySkeletonContainer>
  );
};

export default Skeleton;
