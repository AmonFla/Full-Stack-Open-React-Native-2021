import { useQuery } from "@apollo/client"; 
import { ME} from "../graphql/queries";

const useMyReviews = () => {  
  const variables = {first: 4, includeReviews: true};

  const { data, loading , fetchMore, ...result } = useQuery(ME, {
    variables,
    fetchPolicy: 'cache-and-network'});
 
  const handleFetchMore = ()=>{
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage;

    if(!canFetchMore){
      return;
    }

    fetchMore({
      variables:{
        ...variables,
        after: data.me.reviews.pageInfo.endCursor
        
      }
    });
  };
  
  return {reviews: data && data.me.reviews, loading, fetchMore: handleFetchMore, ...result };
};

export default useMyReviews;