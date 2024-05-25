import { Link, useNavigate } from "react-router-dom";
import Logo from "src/assets/images/detailed-information/alimoLogo.svg";
import login from "src/assets/images/detailed-information/Group 306.svg";
import makepost from "src/assets/images/detailed-information/post.svg";
import category from "src/assets/images/detailed-information/category.svg";
import myPost from "src/assets/images/detailed-information/myPost.svg";
import {
  InformationBtn,
  InformationContainer,
  InformationContent,
  InformationContentContainer,
  InformationLogo,
  InformationHeadBox,
  InformationTitle,
  InformationImg,
} from "./style";

const UsageGuidePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <InformationContainer>
        <InformationHeadBox id="agreeDetailForm-header">
          <Link to="https://alimo.b1nd.com/">
            <InformationLogo src={Logo} alt="logo" />
          </Link>
        </InformationHeadBox>
        <InformationContentContainer>
          <InformationTitle>ALIMO 사용 방법</InformationTitle>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>로그인</InformationTitle>
          <InformationImg src={login}></InformationImg>
          <InformationContent>
            로그인에 성공해서 이동한 메인화면입니다.
          </InformationContent>
        </InformationContentContainer>

        <InformationContentContainer>
          <InformationTitle>게시글 만들기</InformationTitle>
          <InformationImg src={makepost}></InformationImg>
          <InformationContent>
            확성기 기능은 알리모 모바일 홈화면 상단에 올라갑니다. &nbsp; &nbsp;
            &nbsp; 바인드 카테고리에 공지가 성공적으로 올라갔어요!
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>카테고리 만들기</InformationTitle>
          <InformationImg src={category}></InformationImg>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>게시글 확인하기</InformationTitle>
          <InformationImg src={myPost}></InformationImg>
        </InformationContentContainer>

        <Link to="https://alimo.b1nd.com/">
          <InformationBtn>알리모</InformationBtn>
        </Link>
      </InformationContainer>
    </>
  );
};

export default UsageGuidePage;
