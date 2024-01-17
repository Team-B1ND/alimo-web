import styled from "styled-components";

export const Profile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;
export const Main = styled.div`
  width: calc(100vw - 15vw);
  height: 100vh;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const Mainview = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;

`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  width: 100%;
  height: 100px;
  border-radius: 40px;
  background: var(--White, #fff);
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.3);

`;
export const User = styled.div`
  display: flex;
  margin-left: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: #d9d9d9;
  object-fit: fill;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const UserName = styled.div`
  display: flex;
  width: 150px;
  height: 100px;
  align-items: center;
  color: #000;
  font-family: Inter;
  font-size: 30px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
export const ProfileSetting =styled.div`
    margin-left: 450px;
    display: flex;
    width: 50px;
    height: 50px;
    cursor: pointer;
`
export const UniqueNumber= styled.div`
margin-left: 30px;
color: #000;
font-family: Inter;
font-size: 30px;
font-style: normal;
font-weight: 900;
line-height: normal;
cursor: pointer;
`