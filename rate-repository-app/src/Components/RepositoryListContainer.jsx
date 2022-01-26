import React from "react";
import { FlatList  , View} from "react-native"; 
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";
 

const RepositoryListContainer = ({repositories})=>{ 

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <View> 
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
        keyExtractor={(item)=>item.id}
      /> 
    </View>
  );
};

export default RepositoryListContainer;