import React from "react";
import { FlatList  , View} from "react-native"; 

import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "../Extra/ItemSeparator";
import MenuOptions from "./MenuOptions";
 

const RepositoryListContainer = ({repositories,setOption, option})=>{ 

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];
  
  return (
    <View> 
      <View>
        <FlatList
          data={repositoryNodes}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={RepositoryItem}
          keyExtractor={(item)=>item.id}
          ListHeaderComponent={() => <MenuOptions setOption={setOption} option={option} />}
        /> 
      </View>
    </View>
  );
};

export default RepositoryListContainer;