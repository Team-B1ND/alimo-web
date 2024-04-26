import { Navigate } from "react-router-dom";
import { PrivateRouteProps } from "src/types/private/privateRoute.type";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";

const isAuthenticated = () => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  return !!ACCESS_TOKEN;
};

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  return isAuthenticated() ? <Component /> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
