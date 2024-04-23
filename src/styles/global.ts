import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import PretendardMedium from "src/assets/fonts/Pretendard/Pretendard-Medium.otf";
import PretendardRegular from "src/assets/fonts/Pretendard/Pretendard-Regular.otf";
import PretendardSemiBold from "src/assets/fonts/Pretendard/Pretendard-SemiBold.otf";

const globalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Medium' ;

  }
  @font-face {
    font-family: "PretendardMedium";
    src: local('PretendardMedium'), local('PretendardMedium');
    font-style: normal;
    src: url(${PretendardMedium}) format('truetype');
  }
  @font-face {
    font-family: "PretendardRegular";
    src: local('PretendardRegular'), local('PretendardRegular');
    font-style: normal;
    src: url(${PretendardRegular}) format('truetype');
  }
  @font-face {
    font-family: "PretendardSemiBold";
    src: local('PretendardSemiBold'), local('PretendardSemiBold');
    font-style: normal;
    src: url(${PretendardSemiBold}) format('truetype');
  }
`;
export default globalStyles;
