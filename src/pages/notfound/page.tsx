import { useEffect } from "react";
import { Link } from "react-router-dom";
import {  Navigate} from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "src/constants/token/token.constants";
import token from "src/libs/token/token";
const Notfound = () => {
  const ACCESS_TOKEN = token.getToken(ACCESS_TOKEN_KEY);
  useEffect(() => {
    if (!ACCESS_TOKEN) {
      window.location.href = "https://alimo.b1nd.com/";
    }
  }, [ACCESS_TOKEN]);

  return (
    <>
      <div>
        <h1>404NotFound</h1>
        <p>
          <Link to="https://alimo.b1nd.com/">알리모 어드민으로 들어가기</Link>
        </p>
      </div>
    </>
  );
};
export default Notfound;
