import styled from "styled-components";

export const Main = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
`;

export const PermissionModalWrap = styled.div`
  position: absolute;
  width: 13vw;
  height: 10vh;

  background-color: white;
  top: 50%;
  left: 50%;

  border: none;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;

  & > div {
    width: 100%;
    border: 1px solid var(--Gray100, #f4f5f9);
  }
`;

export const GivePermission = styled.span`
  color: var(--Primary900, #020202);

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 1vh;
`;

export const DenyMember = styled.span`
  color: var(--Red500, #f90707);

  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-top: 1vh;
`;
