import { Navigate } from 'react-router-dom';
import React from 'react';
import {
    ACCESS_TOKEN_KEY,
    REFRESH_TOKEN_KEY,
} from "src/constants/token/token.constants";
import token from "src/lib/token/token";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const isAuthenticated = () => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  return !!ACCESS_TOKEN;
};

const PrivateRoute = ({ component: Component }: PrivateRouteProps) => {
  return isAuthenticated() ? (
    <Component />
  ) : (
    <Navigate to="/login" replace />
  );
};

export default PrivateRoute;
