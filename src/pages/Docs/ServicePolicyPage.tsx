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
  NullState,
} from "./style";

const ServicePolicy = () => {
  return (
    <>
      <InformationContainer >
        <InformationHeadBox id="agreeDetailForm-header">
        <Link  to="https://alimo.b1nd.com/">
          <InformationLogo
            src={Logo}
            alt="logo"
          />
          </Link>
        </InformationHeadBox>
        <InformationContentContainer>
          <InformationTitle>운영정책 제1장 총칙</InformationTitle>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제1조 (목적)</InformationTitle>
          <InformationContent>
            이 약관은 ALIMO에서 제공하는 온라인 서비스(이하 서비스라 한다)의
            이용조건 및 절차에 관한 사항을 규정 함을 목적으로 합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제2조(정의)</InformationTitle>
          <InformationContent>
            이 약관에서 사용하는 용어의 정의는 다음 각 호와 같습니다.
            <br />
            <br /> 이용자 : 본 약관에 따라 ALIMO가 제공하는 서비스를 받는 자
            <br />
            이용계약 : 서비스 이용과 관련하여 ALIMO와 이용자간에 체결하는
            <br />
            계약 가입 : ALIMO가 제공하는 신청서 양식에 해당 정보를 기입하고, 본
            약관에 동의하여 서비스 이용계약을 완료시키는 <br />
            행위 회원 : 회원가입에 필요한 개인정보를 제공하여 사이트에 회원
            등록을 한 자
            <br />
            이용자번호(ID) : 회원 식별과 회원의 서비스 이용을 위하여 이용자가
            선정하고 ALIMO가 승인하는 영문자와 숫자의 조합 (개인식별정보당
            하나의 ID만 발급 가능)
            <br />
            패스워드(PASSWORD) : 회원의 정보 보호를 위해 이용자 자신이 설정한
            영문자와 숫자 조합 <br />
            회원탈퇴 : ALIMO 또는 회원이 서비스 이용 이후 그 이용계약을
            종료시키는 의사표시 <br />
            게시물 : 게시판에 등록하는 제목, 내용 및 댓글
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제3조(이용 조건 정의)</InformationTitle>
          <InformationContent>
            해당 서비스의 이용자는 아래 각 호에 해당하는 자격을 지닌 자로
            한하니다. <br />
            1) 대구소프트웨어마이스터고등학교 (이하 학교라 칭함)에 현재
            재학생으로 등록된 자. <br />
            2) 재학생의 법정 보호자(이하 학부모라 칭함) 또는 학교 문서 상에 해당
            학생의 학부모로 기록된 자. <br /> 3) 학교에서 교사 자격을 부여한 자.
            <br />
            ** 재학생이 아닌 자라 함은 자퇴 /퇴학 / 휴학 / 졸업 등을 사유로 하여
            현재 학교에 재학 중이지 아니한 자를 칭합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제3조 (약관의 효력과 변경)</InformationTitle>
          <InformationContent>
            ① 약관은 이용자가 회원가입을 할 때 특별한 거부 의사에 표시가 없이
            가입을 진행할 경우 동의한 것으로 간주합니다.
            <br /> ② ALIMO는 필요한 경우 법률 기타 관련 법령의 범위내에서 약관의
            내용을 변경할 수 있으며, 개정약관 및 적용일자와 개정사유를 전항의
            방법으로 공지합니다. 이용자는 변경된 약관의 공지 7일 이후에도
            거부의사를 표시하지 아니하고 서비스를 계속 사용할 경우 약관의 변경
            사항에 동의한 것으로 간주됩니다.
            <br />③ 회원은 변경된 약관에 동의하지 않는 경우 서비스 이용을
            중단하고 본인의 회원등록을 취소할 수 있으며, 이의 없이 계속 사용하는
            경우에는 약관 변경에 동의한 것으로 간주되고 전항과 같은 방법으로
            효력이 발생합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제4조 (약관 이외의 준칙)</InformationTitle>
          <InformationContent>
            이 약관에서 정하지 아니한 사항이나 해석에 대해서는 관련 대한민국
            법령 또는 판례를 따릅니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제5조 (이용계약의 성립)</InformationTitle>
          <InformationContent>
            이용계약은 약관 내용에 동의함 버튼을 클릭하는 등 ALIMO가 정한 일정한
            절차에 따른 이용자의 이용신청에 대하여 ALIMO가 승낙을 하면
            성립됩니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제6조 (이용신청)</InformationTitle>
          <InformationContent>
            ① 이용신청은 서비스의 회원정보 화면에서 이용자가 ALIMO에서 요구하는
            가입신청서 양식에 개인의 신상정보를 기록하여 신청합니다.
            <br />② 가입신청서 양식 중 아래 각호에 해당하는 필수항목을 모두
            기입하고 약관에 동의해야만 이용신청이 완료됩니다. 닉네임, 패스워드를
            입력하여 도담도담 서비스에 로그인 후 해당 서비스를 통하여 성명,
            이용자번호를 추가적으로 받아와 이용 신청을 받습니다.
            <br />③ 실명인증이 불가능한 해외거주 외국인 등은 ALIMO 운영진에게
            문의 후 별도의 신청서 양식을 통해 이용신청할 수 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제7조 (이용신청의 승낙)</InformationTitle>
          <InformationContent>
            ① ALIMO는 이용자가 신청서의 필수 항목을 정확히 기재하여 이용신청을
            하였을 경우에 특별한 사정이 없는 한 서비스 이용신청을 승낙합니다.
            <br />
            ②다음 각 호에 해당하는 경우에는 이용승낙을 하지 않을 수 있습니다.
            본인의 정보가 아닌 다른 사람의 명의나 허위정보로 신청한 경우 사회의
            안녕 질서 또는 미풍양속을 저해할 목적으로 신청한 경우 범죄행위,
            스팸광고 등 부정한 목적으로 서비스를 이용하고자 하는 경우 법률, 약관
            및 각 게시판의 이용규칙을 위반하여 이용자격이 제한된 이용자가 신청한
            경우
            <br />
            ③ ALIMO는 다음 사항에 해당하는 경우 승낙을 보류할 수 있습니다.
            ALIMO의 설비나 기술상, 운영상의 이유로 서비스 승낙이 곤란한 경우
            이용 신청자의 연령이 만 14세 이하로 개인정보제공에 대한 동의를
            법정대리인으로부터 받지 않은 경우 최근 30일 이내에 이용계약을 해지한
            이력이 있는 이용자가 신청한 경우
            <br />④ ALIMO는 이용계약 절차 완료 이후 본조 제2항 각 호에 따른
            사유가 발견된 경우 즉시 이용승낙을 철회할 수 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제8조 (계약사항의 변경)</InformationTitle>
          <InformationContent>
            ① 회원은 이용신청시 기재한 사항이 변경 되었을 경우에는 즉시
            변경사항을 정정하여야 하며, 수정하지 아니하여 발생하는 문제의 책임은
            회원에게 있습니다.
            <br />
            ② ID등 회원의 고유한 정보는 변경할 수 없습니다.
            <br />③ 기재된 회원정보가 다음 각 호에 해당하는 경우 회원의 요청
            또는 ALIMO의 직권으로 변경 또는 서비스의 이용을 제한하거나 정지할 수
            있습니다. 1-1)ALIMO의 서비스 또는 운영자, 관리자 등의 명칭과
            동일하거나 유사하여 오인의 우려가 있는 경우 1-2)타인에게 혐오감을
            주거나 미풍양속에 어긋나는 경우 1-3)타인의 권리를 침해할 우려가 있는
            경우 1-4)기타 합리적인 사유가 있는 경우 ** 1-1에 해당하는 자에 경우
            실명 뒤에 구분자(숫자 또는 알파벳) 등을 추가하여 구분하며, 해당
            조치가 불가능할 경우에만 이용을 제한합니다
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제9조 (서비스 이용)</InformationTitle>
          <InformationContent>
            ① 서비스가 지정된 공간(학교)에서만 제공되는 점을 감안하여 모든
            게시판 이용은 회원가입 (또는 이용신청)이 완료되고 ALIMO에게서 이용
            승난을 받은 자만 열람/사용이 가능합니다.
            <br />
            ② 회원 가입 후 일정 기간동안 게시물 및 댓글의 작성이 제한됩니다.
            제한 기간은 운영 중 변경될 수 있습니다. 게시물 및 댓글 작성 제한기간
            : 회원 가입 후 승인이 완료될 때까지
            <br />
            ③ 서비스의 이용시간은 연중무휴, 24시간으로 함을 원칙으로 합니다. 단,
            다음 각 호에 해당하는 경우 서비스 이용을 제한하거나 중지할 수
            있습니다. 서비스 설비의 점검 및 유지보수 또는 공사로 인하여 부득이한
            경우 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로
            서비스 이용에 지장이 있는 경우 국가 또는 관계기관의 명령으로 인해
            일부 서비스를 제한해야 할 경우 기타 중대한 사유로 인해 서비스의
            이용을 지속하는 것이 업무상 및 기술상 불가능할 경우 또는 운영상
            서비스 제한이나 중지가 불가피하다고 판단되는 경우
            <br />
            ④ ALIMO는 전항의 규정에 의해 서비스의 이용을 제한하거나 중지할 경우
            그 사유 및 기간을 사전에 공지함을 원칙으로 합니다. 단, 사전에
            예상하지 못했거나 통제할 수 없는 상황이 발생할 경우 그러하지
            아니합니다.
            <br />
            ⑤ ALIMO는 서비스의 목적이나 용도에 따라 합리적인 범위 내에서
            이용규칙을 정할 수 있으며, 이를 게시판 또는 기타 ALIMO에서 정한
            수단으로 공지합니다. 회원은 해당 규칙을 준수하며 서비스를 이용하여야
            합니다.
            <br />⑥ ALIMO는 회원의 가입일, 연령, 활동이력, 이용제한 요청 등에
            따라 일부의 서비스를 제한할 수 있습니다. 이 경우 이용자가 알 수
            있도록 그 기준과 제한 내용을 게시판 등에 공지합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>
            제10조(서비스 이용의 제한 및 중지)
          </InformationTitle>
          <InformationContent>
            ① ALIMO는 효율적인 서비스 운영을 위하여 회원의 메모리 공간,
            메시지크기, 보관일수 등을 제한할 수 있습니다.
            <br />
            ② ALIMO는 일정 기간동안 접속 이력이 없는 회원에 대하여 로그인시
            본인인증을 거치도록 하는 등의 절차를 둘 수 있습니다.
            <br />
            ③ ALIMO는 회원이 서비스 내에 게시하거나 전달하는 모든 내용물이 다음
            각 호에 해당한다고 판단될 경우 사전 통보 없이 게시중단, 이동, 삭제
            등의 조치를 취할 수 있으며 필요한 경우 해당 회원의 서비스 이용자격을
            일정 기간 제한하거나 영구 중지할 수 있습니다. 회원 또는 제3자에 대한
            인신공격, 비하, 비방, 욕설, 중상모략, 허위사실 유포, 명예훼손 등의
            내용이 포함된 경우 타인을 고의적으로 기만하거나 부정하게 영리적,
            업무적 기타 개인적인 이익을 얻을 목적임이 확인되는 경우 자신의
            종교적 신념을 강요하거나 타인의 종교를 비하한 경우 공공질서 및
            미풍양속에 위반되는 내용인 경우 범죄적 행위에 결부된다고 인정되는
            내용인 경우 회원 또는 제3자의 저작권이나 초상권 등 기타 권리를
            침해하는 내용인 경우 정보통신설비의 오작동이나 정보 등의 파괴를
            유발시키는 컴퓨터바이러스 프로그램 등을 유포하는 경우 스토킹,
            불필요한 특수문자 과다사용, 반복적인 게시물 붙여넣기 등 다른
            이용자의 이용을 방해하는 경우 특정 집단에 대한 차별적 내용으로서
            해당 집단이나 그 구성원들에게 굴욕감이나 불이익을 현저하게 초래하는
            경우 기타 관계법령에 위반되거나 ALIMO에서 정한 각 게시판의 목적에
            따른 이용규칙에 어긋나는 경우
            <br />
            ④ ALIMO는 회원의 공개된 게시물 등에 대하여 다른 이용자 혹은 제3자의
            법률상 권리 침해를 근거로 게시중단 요청을 받은 경우 게시물을
            삭제하거나 게시물 차단 등의 임시조치를 할 수 있으며 게시중단
            요청자와 게시물 등록 회원간의 합의 또는 법적조치의 결과 등이
            접수되면 이를 따릅니다.
            <br />
            ⑤ALIMO는 서비스 내에 공개된 게시물 등이 사생활 침해 또는 명예훼손 등
            제3자의 권리를 침해한다고 인정하는 경우 전항의 게시중단 요청이
            없어도 해당 게시물을 게시중단 할 수 있습니다.
            <br />
            6) 대한민국 수사 기관 또는 학교에서 합법적인 절차를 통해 수사 진행
            또는 기타 학생 선도를 목적으로 한 이용 중지/제한 요청에 응하는 것을
            원칙으로 합니다.
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
            공개된 게시판에 게시된 게시물, 재게시되거나 복제된 게시물과 타인의
            게시물과 결합되어 제공되는 게시물은 자동 삭제되지 않으므로 탈퇴 전
            본인이 직접 삭제하여야 합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle>제12조(ALIMO의 의무)</InformationTitle>
          <InformationContent>
            ① ALIMO는 관련 법령과 이 약관이 정하는 사항을 준수하며, 지속적이고
            안정적인 서비스를 위해 최선을 다합니다.
            <br />
            ② ALIMO는 회원의 회원정보를 보호하며, 개인정보 보호정책을 공시하고
            준수합니다.
            <br />
            ③ ALIMO는 서비스 제공과 관련해서 알고 있는 회원의 신상 정보를 본인의
            승낙 없이 제3자에게 누설하거나 배포하지 않습니다. 단, 전기통신기본법
            등 법률의 규정에 의해 국가기관의 요구가 있는 경우, 범죄에 대한
            수사상의 목적이 있거나 또는 기타 관계법령에서 정한 절차에 의한
            요청이 있을 경우에는 그러하지 아니합니다.
            <br />④ ALIMO는 회원 수신 동의를 하지 않은 영리목적의 광고성
            전자우편, SMS 문자서비스(외출/외박 부모동의 제외) 등을 발송하지
            아니합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제13조(회원 및 이용자의 책임)</InformationTitle>
          <InformationContent>
            ① 회원은 자신의 로그인 패스워드 등 개인정보에 대한 관리책임을
            가집니다.
            <br />
            ② 회원이 작성한 게시물 등에 대한 모든 권리와 책임은 이를 작성한
            회원에게 있습니다.
            <br />
            ③ 서비스를 통해 얻은 정보를 그 정보 권리자의 동의없이 수집, 복제,
            배포할 수 없습니다.
            <br />
            ④ 서비스를 이용하여 해킹, 불법자료의 배포 및 기타 불법행위를
            하여서는 아니되며, 이를 위반하여 발생한 영업활동의 결과 및 손실,
            관계기관에 의한 법적조치 등에 관하여서는 그 이용자가 책임을 집니다.
            <br />⑤ 회원은 ALIMO가 정한 약관 및 이용규칙을 숙지하고 준수하여야
            합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제14조(계약해지 및 이용제한)</InformationTitle>
          <InformationContent>
            ① 회원이 이용계약을 해지하고자 하는 때에는 회원 본인이 인터넷을
            통하여 해지신청을 하여야 합니다. 단, 유관기관의 요청이 있는 경우
            본인이 직접 탈퇴하지 않아도 이용계약 해지가 가능할 수 있습니다.
            <br />
            ② 회원정보는 회원 탈퇴 30일 후 자동 삭제되며, 이 기간동안 재가입이
            제한됩니다.
            <br />
            ③ 회원 탈퇴 시 해당 아이디와 연계된 쪽지, 스크랩내용 등은 삭제되나,
            공개된 게시판에 작성한 게시물 등은 삭제되지 않으며 삭제를 원할 경우
            본인이 직접 삭제 후 탈퇴하여야 합니다.
            <br />④ 사이트 이용규칙 또는 약관 등을 위반하여 징계 중인 상태에서
            탈퇴할 경우 재가입할 수 없으며, 만일 재가입 후 징계사실이 확인되면
            이용이 제한되거나 이전 회원조치이력을 승계할 수 있습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제15조(양도금지)</InformationTitle>
          <InformationContent>
            회원은 서비스의 이용권한, 기타 이용계약상의 지위를 타인에게 양도,
            증여할 수 없으며, 이를 담보로 제공할 수 없습니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제16조(손해배상)</InformationTitle>
          <InformationContent>
            ALIMO는 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가
            발생하더라도 동 손해가 도담도담의 고의 또는 중대한 과실로 인한
            경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제17조(면책 조항)</InformationTitle>
          <InformationContent>
            ① ALIMO는 천재지변, 전쟁 또는 기타 이에 준하는 불가항력으로 인하여
            서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이
            면제됩니다.
            <br />
            ② ALIMO는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한
            사유로 발생한 손해에 대한 책임이 면제됩니다.
            <br />
            ③ ALIMO는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을
            지지 않습니다.
            <br />
            ④ ALIMO는 회원이 서비스를 이용하여 기대하는 이익이나 서비스를 통하여
            얻는 자료로 인한 손해에 관하여 책임을 지지 않습니다.
            <br />⑤ ALIMO는 회원이 서비스에 게재한 정보, 자료, 사실의 신뢰도,
            정확성 등의 내용에 관하여는 책임을 지지 않습니다.
          </InformationContent>
        </InformationContentContainer>

        <InformationContentContainer>
          <InformationTitle> 제18조(분쟁의 해결)</InformationTitle>
          <InformationContent>
            “ALIMO”과 “회원”은 “서비스”와 관련하여 발생한 분쟁을 원만하게
            해결하기 위하여 필요한 모든 노력을 하여야 합니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer>
          <InformationTitle> 제19조(법적 소재지)</InformationTitle>
          <InformationContent>
            ALIMO의 법적 소재지는 대구소프트웨어마이스터고등학교의 법적 소재지와
            동일시 하며, ALIMO와 관련된 모든 법적 공방은 ALIMO의 법적 소재지에
            있는 지방/고등 법원 등에서 이루어집니다.
          </InformationContent>
        </InformationContentContainer>
        <InformationContentContainer >
          <InformationTitle>
            부칙 (시행일) 이 약관은 2024년 4월 17일부터 시행합니다.
          </InformationTitle>
        </InformationContentContainer>
        <InformationContentContainer>
          <NullState></NullState>
        </InformationContentContainer>
        <Link to="/">
          <InformationBtn>돌아가기</InformationBtn>
        </Link>
      </InformationContainer>
    </>
  );
};

export default ServicePolicy;
