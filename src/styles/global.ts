import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "./font.css";


const globalStyles = createGlobalStyle`
${reset}
* {
    margin: 0;
    padding: 0;
    font-family: 'Pretendard-Medium' !important;
  }
`
export default globalStyles;