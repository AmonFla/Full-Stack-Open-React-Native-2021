
import { USER_LOGIN } from "../graphql/mutations";
import { useMutation } from "@apollo/client";  


const useSignIn = () => {
  const [login, result] = useMutation(USER_LOGIN);
  
  const signIn = async ({ username, password }) => { 

    return login({variables:{ credentials:{username,password}}});
    
  };
  
  return  [signIn, result];
};

export default useSignIn;