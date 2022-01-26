import React from "react";
import { FlatList , StyleSheet , View} from "react-native";

import theme from "../thene"; 
import RepositoryItem from "./RepositoryItem";

const styles = StyleSheet.create({
  separator:{
    height:16,
    backgroundColor: theme.colors.lightGray
  }
});
 

const ItemSeparator = ()=> <View style={styles.separator} />; 

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