import token from "src/lib/token/token";
import { useNavigate } from "react-router-dom";

const UseLogout = () => {
  const navigate = useNavigate();

  const logOut = () => {
    token.clearToken();
    navigate("/");
  };

  return { logOut };
};

export default UseLogout;