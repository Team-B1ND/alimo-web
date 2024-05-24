import {  Navigate, Outlet} from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";

export const isAuthenticated = () => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  
  return !!ACCESS_TOKEN ;
};

const PrivateRoute = () => {
  
  if(isAuthenticated()){
    return <Outlet />;
  }
  return <Navigate replace to="/login" />;
};

export default PrivateRoute;
