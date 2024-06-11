import styled from "styled-components";

export const InformationContainer = styled.div`
  min-width: 100px;
  width: 100%;
  height: 4800px;
  @media screen and (min-width: 100px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 800px) {
    font-size: 1.2rem;
  }
  display: flex;
  flex-direction: column;
  align-items: center;

  row-gap: 15px;
`;

export const InformationHeadBox = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
`;
export const InformationLogo = styled.img`
  width: 200px;
  height: 100%;
  margin-left: 50px;
`;

export const InformationContentContainer = styled.div`
  width: 70%;

  display: flex;
  flex-direction: column;

  row-gap: 20px;

  margin-bottom: 50px;
`;

export const InformationTitle = styled.h1`
  font-size: 30px;
`;

export const InformationContent = styled.p`
  line-height: 25px;
`;

export const InformationBtn = styled.button`
  position: fixed;
  width: 105px;
  height: 40px;
  background: #fece23;
  color: #fff;
  border-radius: 100px;
  border: none;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    transition: 1s;
    background-color: black;
    color: white;
  }
`;

export const InformationImg = styled.img`
  width: 100%;
  min-height: 200px;
`;
export const InformationLinkBtn = styled.div`
  font-size: 30px;

  color: #000;
  &:hover {
    transition: 0.5s;
    color: #fece23;
  }
`;

export const NullState = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
`;
