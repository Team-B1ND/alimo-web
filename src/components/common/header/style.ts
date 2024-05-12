import styled from "styled-components";

export const HeaderBarWrap = styled.div`
  width: 100vw;
  height: calc(100vh - 90vh);
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  background-color: white;
  position: absolute;
`;

export const UploadNewNotifyButton = styled.button`
  position: absolute;
  min-width: 100px;
  height: 40px;
  gap: 10px;
  border: none;
  margin-right: 100px;
  border-radius: 10px;
  background-color: #fece23;
  color: #000;
  font-size: 1rem;

  cursor: pointer;

  &:focus {
    outline: none;
  }
`;
