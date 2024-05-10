import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const PermissionModalWrap = styled.div`
  position: relative;
  width: 13vw;
  height: 10vh;

  background-color: white;

  border: none;
  border-radius: 10px;
  top: 10%;
  left: 60%;

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
  font-size: 1rem;
  margin-bottom: 1vh;
  cursor: pointer;
`;

export const DenyMember = styled.span`
  color: var(--Red500, #f90707);
  font-size: 1rem;
  margin-top: 1vh;
  cursor: pointer;
`;
