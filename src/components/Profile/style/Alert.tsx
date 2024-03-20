import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const AlertMain = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  align-items: center;
  flex-direction: column;
  bottom: 10%;
  left: 50px;
  width: 200px;
  height: 100px;
  background-color: white;
  border-radius: var(--Small, 4px);
  background: #fff;
  box-shadow: 0px 6px 18px 0px rgba(0, 0, 0, 0.08);
`;
export const ProfileButton = styled.div`
cursor: pointer;
  display: flex;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 90%;
  height: 50%;
  align-items: center;
  border-bottom: 2px solid #f4f5f9;
`;
export const LogOut =styled.div`
cursor: pointer;
   display: flex;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 90%;
  height: 50%;
  align-items: center; 
  color: var(--Red500, #F90707);
`