import { useQuery } from "@apollo/client"; 
import { GET_REPOSITORIES} from "../graphql/queries";

const useRepositories = ({orderDirection,orderBy }) => { 
  const { data, loading } = useQuery(GET_REPOSITORIES, {
    variables:{orderDirection, orderBy},
    fetchPolicy: 'cache-and-network'});
 

  return {repositories: data && data.repositories, loading  };
};

export default useRepositories;