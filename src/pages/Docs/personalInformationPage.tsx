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
} from "./style";

const PersonalInformation = () => {
  const navigate = useNavigate();
  return (
    <>
      <InformationContainer>
        <InformationHeadBox>
        <Link  to="https://alimo.b1nd.com/">
          <InformationLogo
            src={Logo}
            alt="logo"
          />
          </Link>
        </InformationHeadBox>
        <InformationContentContainer>
          <InformationTitle>개인정보처리방침</InformationTitle>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            1. ALIMO는 회원가입, 서비스 이용 등을 위해
            <br /> 아래와 같은 개인정보를 수집하고 있습니다.
          </InformationTitle>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>1) 수집항목</InformationTitle>
          <InformationContent>
            학생 회원 가입시
            <br /> 필수항목 : 아이디, 비밀번호, 이름, 이메일
            <br />
            선생님 회원 가입시 필수항목 : 아이디, 비밀번호, 이름, 이메일
            <br />
            부모님 회원 가입시 필수항목 : 아이디, 비밀번호, 이름, 이메일
            <br /> 선택항목 : 서비스 이용과정에서 아래와 같은 정보들이 자동으로
            생성되어 수집될 수 있습니다. IP 주소, 쿠키, 접속 브라우저, 서비스
            이용기록, 회원조치이력
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>2) 개인정보 수집방법</InformationTitle>
          <InformationContent>
            회원가입, 회원정보 수정, 게시물 등록
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 2. 개인정보의 수집 및 이용목적</InformationTitle>
          <InformationContent>
            ALIMO는 수집한 개인정보를 다음의 목적을 위해 활용하며 다른 용도로는
            사용 되지 않습니다. 차후 이용목적이 변경될 시에는 사전에 동의를
            구합니다. 아이디, 비밀번호: 서비스 이용에 따른 본인 식별, 중복가입
            확인, 부정이용 방지를 위해 사용됩니다. 이메일 : 전체메일발송,
            패스워드 분실시 필요한 정보제공 및 민원처리 등을 위해 사용됩니다.
            성명, 학년: 특수한 서비스를 제공할 경우 및 내부 자료구축, 부정이용
            방지를 위해 사용됩니다. 이용자의 IP주소, 방문일시 : 불량회원의 부정
            이용방지와 비인가 사용방지, 통계학적 분석에 사용됩니다. 그 외
            선택사항 : 개인 맞춤 서비스를 제공하기 위해 사용됩니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 3. 개인정보의 보유 및 이용기간</InformationTitle>
          <InformationContent>
            ALIMO는 회원가입일로부터 서비스를 제공하는 기간 동안에 한하여
            이용자의 개인정보를 보유 및 이용합니다. 단, 다음의 정보에 대해서는
            회원탈퇴 후 아래의 이유로 명시한 기간 동안 보존합니다. 보존항목 :
            성명, 이메일 보존근거 : 빈번한 가입과 탈퇴를 반복하는 악의적 이용
            방지, 서비스 이용의 혼선 방지 보존기간 : 30일 보존항목 : 경고 이상의
            조치를 받은 회원의 ID값 (중복가입확인정보) 및 회원조치이력 보존근거
            : 회원의 불량 이용에 대한 조치이력 보관으로 악의적 이용의 재발 방지
            보존기간 : 1년 보존항목 : 아이디 보존근거 : 아이디를 기준으로
            설계되어 있어 탈퇴 후 타인이 동일한 아이디로 가입할 경우 서비스
            이용의 혼선 방지 보존기간 : 서비스 제공 종료시까지
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>4. 개인정보의 파기절차 및 방법</InformationTitle>
          <InformationContent>
            원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를
            지체없이 파기합니다. 파기절차 및 방법은 다음과 같습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 1) 파기절차</InformationTitle>
          <InformationContent>
            회원이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 내부 방침
            및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조)
            일정 기간 저장된 후 파기되어집니다. 일정기간 저장된 개인정보는
            법령에 의한 경우를 제외하고는 보유 목적 이외의 다른 목적으로
            이용되지 않습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 2) 파기방법</InformationTitle>
          <InformationContent>
            전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적
            방법을 사용하여 삭제합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 5. 개인정보 제공</InformationTitle>
          <InformationContent>
            ALIMO는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다.
            다만, 아래의 경우에는 예외로 합니다. 이용자들이 사전에 동의한 경우
            법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에
            따라 수사기관의 요구가 있는 경우 제공됩니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>6. 수집한 개인정보의 위탁</InformationTitle>
          <InformationContent>
            ALIMO는 회원 정보를 외부 업체에 위탁하지 않습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            제11조 (권리의 귀속 및 저작물의 이용)
          </InformationTitle>
          <InformationContent>
            ① 서비스 내에서 게시된 게시물 등의 저작권은 해당 게시물의 저작자에게
            귀속됩니다.
            <br />
            ② 다음 각 호에 해당하는 범위 내에서 ALIMO는 회원이 등록한 게시물을
            이용할 수 있습니다. 서비스 내에서 게시물의 복제, 전송, 전시, 배포 및
            이를 위해 게시물의 제목 및 내용을 변경하거나 수정 또는 이동할 수
            있습니다. 각각의 게시판의 용도에 적합하지 않거나 이용 규칙에
            위배되는 경우, 게시물을 수정하거나 게시판의 위치를 변경, 또는 삭제할
            수 있습니다. 다른 회원의 신고 등에 의해 일정 시간 게시물의 내용이
            차단될 수 있습니다. 회원이 스크랩 등의 기능을 사용하여 게시물의 제목
            및 링크를 이용할 수 있습니다. 전체메일, 소식지 등의 배포를 위해
            회원이 작성한 이미지, 제목, 내용의 일부를 전자메일로 배포할 수
            있습니다. 검색 등 향상된 서비스를 위해 관련 제휴사에게 게시물의 제목
            및 내용, 게시자의 ID, 닉네임 등 필요한 정보를 제공할 수 있습니다. 단
            이 경우 제공된 정보는 지정된 목적 이외에는 사용되지 않으며, 성명,
            이메일 등 회원의 개인정보는 제공되지 않습니다.
            <br />
            ③ ALIMO는 제2항 이외의 방법으로 회원의 게시물을 이용하고자 하는 경우
            쪽지, 이메일, 약관의 재동의 등을 통해 회원의 동의를 얻습니다.
            <br />④ 회원의 탈퇴 및 회원자격을 상실한 경우 해당 ID에 기록된
            스크랩, 쪽지, 주소록 등은 탈퇴 후 30일 이내에 자동 삭제됩니다. 단,
            공개된 게시판에 게시된 게시물, 재게시 되거나 복제된 게시물과 타인의
            게시물과 결합되어 제공되는 게시물은 자동 삭제 되지 않으므로 탈퇴 전
            본인이 직접 삭제하여야 합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            7. 회원 및 법정대리인의 권리와 그 행사방법
          </InformationTitle>
          <InformationContent>
            이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를
            조회하거나 수정할 수 있으며 가입해지를 요청할 수도 있습니다.
            이용자의 개인정보 조회, 수정을 위해서는 ‘개인정보변경’(또는
            ‘회원정보수정’ 등)을, 가입해지(동의철회)를 위해서는 “회원탈퇴”를
            클릭하여 본인 확인 후 직접 열람, 정정 또는 탈퇴가 가능합니다. 혹은
            개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이
            조치하겠습니다. 이용자가 개인정보의 오류에 대한 정정을 요청하신
            경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
            않습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            8. 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
          </InformationTitle>
          <InformationContent>
            쿠키는 웹사이트를 운영하는데 이용되는 서버가 이용자의 브라우저에
            보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터에 저장됩니다. 보다
            빠르고 편리한 웹사이트 사용을 지원하고 맞춤형 서비스를 제공하기 위해
            사용됩니다. 쿠키 등 사용 목적 이용자가 선호하는 설정 등을 저장하여
            보다 빠른 웹 환경을 지원하며, 편리한 이용을 위해 서비스 개선에
            활용합니다. 쿠키 설정 거부 방법 이용자는 쿠키 설치에 대한 선택권을
            가지고 있습니다. 따라서, 이용자는 웹 브라우저에서 옵션을
            설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을
            거치거나, 모든 쿠키의 저장을 거부할 수도 있습니다. 다만, 쿠키의
            저장을 거부할 경우에는 로그인이 필요한 일부 서비스는 이용에 어려움이
            있을 수 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            9. 개인정보의 기술적, 관리적 보호대책
          </InformationTitle>
          <InformationContent>
            ALIMO는 이용자의 개인정보를 취급함에 있어 개인정보가 분실, 도난,
            유출, 변조 또는 훼손되지 않도록 안정성 확보를 위해 다음과 같은
            기술적, 관리적 대책을 강구하고 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 1) 비밀번호 암호화</InformationTitle>
          <InformationContent>
            이용자의 개인정보를 암호화된 통신구간을 이용하여 전송하고, 비밀번호
            등 중요정보는 암호화하여 보관하고 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 2) 해킹 등의 대비한 기술적 대책</InformationTitle>
          <InformationContent>
            해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인정보가 유출되거나
            훼손되는 것을 막기 위해 외부로부터 접근이 통제된 구역에 시스템을
            설치하고 있습니다. 해커 등의 침입을 탐지하고 차단할 수 있는 시스템을
            설치하여 24시간 감시하고 있으며, 백신 프로그램을 설치하여 시스템이
            최신 악성코드나 바이러스에 감염되지 않도록 노력하고 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 3) 개인 아이디와 비밀번호의 관리</InformationTitle>
          <InformationContent>
            이용자가 사용하는 아이디와 비밀번호는 원칙적으로 이용자만이 사용할
            수 있도록 되어 있습니다. ALIMO는 이용자의 개인적인 부주의로 아이디,
            비밀번호 등 개인정보가 유출되어 발생한 문제와 기본적인 인터넷의
            위험성 때문에 일어나는 일들에 대해 책임을 지지 않습니다. 비밀번호에
            대한 보안의식을 가지고 비밀번호를 자주 변경하며, 타인이 알기 쉬운
            비밀번호를 사용하거나, 공용 PC 에서의 로그인시 개인정보가 누출되지
            않도록 각별한 주의를 기울여 주시기 바랍니다.
          </InformationContent>
        </InformationContentContainer>

        <InformationContentContainer>
          <InformationTitle> 10. 개인정보에 관한 민원서비스</InformationTitle>
          <InformationContent>
            고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여
            아래와 같이 개인정보관리책임자를 지정하고 있습니다. 이용자는
            ALIMO서비스를 이용하며 발생하는 모든 개인정보보호 관련 민원을
            개인정보 관리책임자에게 신고하실 수 있습니다. 개인정보관리책임자성명
            : 권민정(교사)
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationContent>
            Tel : 053) 231-9230
            <br /> FAX : 053) 614-0709
            <br /> 메일 : mdev_team@dgsw.hs.kr
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationContent>
            기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에
            문의하시기 바랍니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationContent>
            개인정보침해신고센터 (privacy.kisa.or.kr / 국번없이 118)
            <br /> 대검찰청 사이버수사과 (www.spo.go.kr / 국번없이 1301)
            <br /> 경찰청 사이버안전국 (cyberbureau.police.go.kr / 국번없이 182)
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 11. 부칙 </InformationTitle>
          <InformationContent>
            이 개인정보처리방침은 2024년 4월 16일부터 적용되며, 법령, 정책 또는
            보안기술의 변경에 따라 내용의 추가, 삭제 및 수정이 있을 시에는
            변경사항의 시행일의 7일 전부터 ALIMO 사이트의 알림판을 통하여 고지할
            것입니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>

        </InformationContentContainer>
        <Link to="https://alimo.b1nd.com/">
          <InformationBtn>알리모 소개</InformationBtn>
        </Link>
      </InformationContainer>
    </>
  );
};

export default PersonalInformation;
