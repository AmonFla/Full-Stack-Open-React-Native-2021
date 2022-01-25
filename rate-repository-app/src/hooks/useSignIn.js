
import { USER_LOGIN } from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";  
import useAuthStorage from "./useAuthStorage";


const useSignIn = () => {
  const [login, result] = useMutation(USER_LOGIN);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  
  const signIn = async ({ username, password }) => { 

    const {data} = await login({variables:{ credentials:{username,password}}});
    await authStorage.setAccessToken(data.authenticate.accessToken); 
    apolloClient.resetStore();
    
  };
  
  return  [signIn, result];
};

export default useSignIn;