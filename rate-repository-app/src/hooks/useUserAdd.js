
import { USER_ADD } from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";   


const useUserAdd = () => {
  const [add, result] = useMutation(USER_ADD); 
  const apolloClient = useApolloClient();
  
  const userAdd = async ({ username, password}) => { 

    await add({variables:{ user:{username, password}}});  
    apolloClient.resetStore();
    
  };
  
  return  [userAdd, result];
};

export default useUserAdd;