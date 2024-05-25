import { Link, useNavigate } from "react-router-dom";
import Logo from "src/assets/images/detailed-information/alimoLogo.svg";

import {
  InformationBtn,
  InformationContainer,
  InformationContent,
  InformationContentContainer,
  InformationLogo,
  InformationHeadBox,
  InformationTitle,
  InformationImg,
  InformationLinkBtn,
} from "./style";

const IntroducePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <InformationContainer style={{height:"150vh"}}>
        <InformationHeadBox id="agreeDetailForm-header">
            <Link  to="https://alimo.b1nd.com/">
          <InformationLogo
            src={Logo}
            alt="logo"
          />
          </Link>
        </InformationHeadBox>
        <InformationContentContainer style={{ maxWidth: "900px" }}>
          <InformationTitle style={{ color: "#e2b926" }}>
            {" "}
            다양한 학교 공지를 한번에
          </InformationTitle>

          <InformationContent style={{ fontSize: "20px" }}>
            | 학교에서 작성되는 가정통신문, 공지사항 뿐만이 아니라 동아리,
            자율활동과 관련된 공지도 받아보세요!
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer style={{ maxWidth: "800px" }}>
          <InformationTitle>Why Need?</InformationTitle>

          <InformationContent>
            저희는 항상 학교 공지사항을 카카오워크 라는, 채팅을 중점으로 하는
            플랫폼을 통해 주고받습니다.
            <br />
            하지만 학부모님들은 카카오워크에서 발생하는 공지사항들을 빠르고
            직접적으로 확인하실 수 없고, 이로 인해 학생들에게 직접 전해 들어야
            하며, 이로 인한{" "}
            <span style={{ color: "#e2b926" }}>정보의 불균형</span>이
            심화됩니다.
            <br />
            또, 공지사항에 대하여 알림이 오지않거나, 특정 대상군에 대하여 한번만
            공지사항을 올려도 되지만, 이런 알림들을 위해 직접 카카오워크 방을
            만들기 때문에, 불필요한 알람, 계속 생겨 헷갈릴 정도로 쓸모없는
            공지방이 여러개가 생기기도 합니다.
            <br />
            이러한 점은 학생들이 받았던 공지를{" "}
            <span style={{ color: "#e2b926" }}>확인하기도 어렵게</span>하고,
            <span style={{ color: "#e2b926" }}>
              {" "}
              더불어 확인률 자체도 떨어트린다고
            </span>{" "}
            생각합니다.
            <br />
            특히 학부모님들이 공지사항을 빠르게 확인할수 없다는 문제는 정말
            크다고 체감하였습니다. 최근에 학생, 학부모와 학교간 소통이 잘
            이루어지지 않아 문제가 생겼던 교복 착용에 대한 건, 모두가
            알아야하지만 일부에게만 공지가 되어,{" "}
            <span style={{ color: "#e2b926" }}>정보의 불균형</span>으로 인해
            갈등이 빚어진 경우가 있습니다.
            <br />
            저희는 이러한 문제들을 해결하기 위해{" "}
            <span style={{ color: "#e2b926" }}>ALIMO</span> 라는 플랫폼이
            필요하다고 생각하게 되었습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer
          style={{ maxWidth: "800px", width: "800px" }}
        >
          <InformationTitle style={{ color: "#e2b926" }}>
            {" "}
            Our Vision
          </InformationTitle>

          <InformationContent>
            - 학부모와 학생간의{" "}
            <span style={{ fontWeight: "1000" }}>정보 불균형</span> 해소
            <br />- 북마크 기능을 통해{" "}
            <span style={{ fontWeight: "1000" }}>필요한 공지</span> 를 언제든지{" "}
            <span style={{ fontWeight: "1000" }}>빠르게 확인</span>가능
            <br />- 채팅과 공지사항 두개를 분리하여{" "}
            <span style={{ fontWeight: "1000" }}>중요성을 강조</span>
            <br />- 학교홈페이지와 연동하여 같은 공지사항을 올려야하는
            선생님들의 <span style={{ fontWeight: "1000" }}>번거로움 해소</span>
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer
          style={{ maxWidth: "800px", width: "800px" }}
        >
          <InformationTitle style={{ color: "#e2b926" }}>
            {" "}
            플렛폼 링크
          </InformationTitle>
          <Link
            style={{ cursor: "pointer", color: "#000" }}
            to="https://play.google.com/store/apps/details?id=com.b1nd.alimo&pli=1"
          >
            <InformationLinkBtn>AOS</InformationLinkBtn>
          </Link>
          <Link
            style={{ cursor: "pointer", color: "#000" }}
            to="https://apps.apple.com/kr/app/%EC%95%8C%EB%A6%AC%EB%AA%A8/id6499296391"
          >
            <InformationLinkBtn>iOS</InformationLinkBtn>
          </Link>
          <Link
            style={{ cursor: "pointer", color: "#000" }}
            to="https://alimo.b1nd.com/"
          >
            <InformationLinkBtn>ALIMO WEB</InformationLinkBtn>
          </Link>
        </InformationContentContainer>
      </InformationContainer>
    </>
  );
};

export default IntroducePage;
