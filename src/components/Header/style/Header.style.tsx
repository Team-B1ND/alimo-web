import styled from "styled-components";

export const HeaderBarWrap = styled.div`
  width: calc(100vw - 15vw);  
  height: calc(100vh - 90vh);
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  background-color: white;
  position: absolute;
  margin-left: 15vw;
`;

export const UploadNewNotifyButton = styled.button`
  position: absolute;
  width: calc(100vw - 90vw);
  height: calc(100vh - 95vh);
  gap: 10px;
  border: none;
  border-radius: 10px;
  margin-left: 70vw;
  margin-top: 3vh;
  background-color: #fece23;

  color: #000;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1rem;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
