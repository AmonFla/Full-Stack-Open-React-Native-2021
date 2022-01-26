
import { REVIEW_ADD } from "../graphql/mutations";
import { useMutation, useApolloClient } from "@apollo/client";   


const useReviewAdd = () => {
  const [add, result] = useMutation(REVIEW_ADD); 
  const apolloClient = useApolloClient();
  
  const reviewAdd = async ({ repositoryName, ownerName, rating, text }) => { 

    const {data} = await add({variables:{ review:{repositoryName, ownerName, rating: Number(rating), text}}});  
    apolloClient.resetStore();
    return {createReview: data && data.createReview  };
    
  };
  
  return  [reviewAdd, result];
};

export default useReviewAdd;