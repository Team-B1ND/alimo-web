import styled from "styled-components";


export const Profile = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const Main = styled.div`
z-index: 5;
  background: rgba(217, 217, 217, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
export const ProfilePageNanme = styled.div`
  position: absolute;
  left: 30px;
  top: 30px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const UserProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 300px;
  min-height: 300px;
  width: calc(100vw - 75vw);
  height: calc(100vw - 75vw);
  border-radius: 10px;
  background-color: #ffffff;
  position: absolute;
  overflow: hidden;
`;
export const profileImg = styled.div`
  display: flex;
  margin-top: 40px;
  position: absolute;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100px;
  height: 150px;
  gap: 10px;
  span{
    display: flex;
    width: 100%;
    height: 30px;
    justify-content: center;
  }
`;
export const User = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
  span {
    display: flex;
    font-size: 1.2rem;
  }
`;

export const SetImg = styled.div`
  width: 100px;
  height: 100px;
  border: none;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
export const Category = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  position: relative;
  width: 90%;
  height: 25%;
  gap: 5px;
`;
export const IndividualCategories = styled.div`
  display: flex;
  position: relative;
  width: auto;
  min-width: 50px;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  padding: 6px var(--ExtraLarge, 16px);
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: #f4f5f9;
`;
export const ChangSucces = styled.img`
  cursor: pointer;
  position: absolute;
  border: none;
  width: 24px;
  height: 24px;
  right: 15px;
  top: 20px;
`;
