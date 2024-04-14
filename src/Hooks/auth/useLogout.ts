import token from "src/libs/token/token";


const useLogout = () => {

  const logOut = () => {
    window.location.href = "/login"
    token.clearToken();
    
  };

  return { logOut };
};

export default useLogout;

