
import { DELETE_REVIEW } from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";   


const useDeleteReview = () => {
  const [add, result] = useMutation(DELETE_REVIEW); 
  const apolloClient = useApolloClient();
  
  const deleteReview = async (deleteReviewId) => { 

    const {data} = await add({variables:{ deleteReviewId }});  
    apolloClient.resetStore();
    return {deleteReview: data && data.deleteReview  };
    
  };
  
  return  [deleteReview, result];
};

export default useDeleteReview;