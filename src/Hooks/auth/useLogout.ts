import token from "src/lib/token/token";


const UseLogout = () => {

  const logOut = () => {
    console.log("logout");
    window.location.href = "/login"
    token.clearToken();
    
  };

  return { logOut };
};

export default UseLogout;

