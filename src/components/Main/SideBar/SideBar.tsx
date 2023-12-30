import * as S from "../../../style/Main.style/SideBar.style/SideBar.style";
import "../../../style/Main.style/Main.css";
const SideBar = () => {
  return (
    <S.SideBarWrap>
      <div className="LogoWrap">
        <h1 className="Logo-Alimo">Alimo</h1>
        <h1 className="Logo-Admin">admin</h1>
      </div>
      <div className="Profile">
        <img src="" />
        <span>이진주T</span>
      </div>
    </S.SideBarWrap>
  );
};

export default SideBar;
