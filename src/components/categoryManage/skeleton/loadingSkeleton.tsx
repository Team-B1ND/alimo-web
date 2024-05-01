import React from "react";
import * as S from "../style";
import SideBar from "src/components/sideBar/sideBar";

const LoadingSkeleton = () => {
  return (
    <S.Main>
      <SideBar />
      <S.LoadigSkeleton>카테고리 로딩중~!</S.LoadigSkeleton>
    </S.Main>
  );
};

export default LoadingSkeleton;
