import styled from "styled-components";

export const HeaderBarWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 90vh);
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  position: absolute;
`;

export const UploadNewNotifyButton = styled.button`
  position: absolute;
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);
  gap: 10px;
  border: none;
  border-radius: 10px;
  margin-left: 82.5vw;
  margin-top: 3vh;
  background-color: #fece23;

  color: #000
  cursor: pointer;

`;
