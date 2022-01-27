import { useQuery } from "@apollo/client";  


import { GET_REPOSITORY } from "../graphql/queries";

const useRepository = (id, first) => {   
  const variables = { repositoryId:id, first};

  const { data, loading , fetchMore, ...result} = useQuery(GET_REPOSITORY, {
    variables,
    fetchPolicy: "cache-and-network", 
  });

  const handleFetchMore = ()=>{ 
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage; 
    if(!canFetchMore){
      return;
    }

    fetchMore({
      variables:{
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor
      }
    });
  };
    
  return {repository: data && data.repository, loading, fetchMore: handleFetchMore, ...result };
};

export default useRepository;