import styled from "styled-components";

export const Profile = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;
export const Main = styled.div`
  background: rgba(217, 217, 217, 0.4);
  width: 100vw;
  height: 100vh;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
`;
export const UserProfile = styled.div`
  display: flex;
  width: 538px;
  height: 385px;
  border-radius: 20px;
  border: var(--Small, 4px) solid var(--Main500, #fece23);
  background-color: #ffffff;
  position: absolute;
`;
export const User = styled.div`
  display: flex;
  position: absolute;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: space-around;
  span {
    display: flex;
    align-items: center;
    width: 200px;
    height: 100%;
    font-size: 30px;
    font-weight: 700;
  }
`;
export const ChangeFile = styled.form`
  position: absolute;
  z-index: 5;
  width: 30px;
  height: 30px;
  left: 130px;
  bottom: 50px;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

export const SetImg = styled.img`
  width: 100px;
  height: 100px;

  border-radius: 50%;
  border: none;
`;
export const Changbutton = styled.input`
  display: none;
`;
export const ChangSucces = styled.button`
  position: absolute;
  border: none;
  border-radius: 20px;
  background-color: rgba(251, 215, 87, 1);
  color: rgba(255, 255, 255, 1);
  width: 100px;
  height: 40px;
  right: 40px;
  bottom: 30px;
`;
