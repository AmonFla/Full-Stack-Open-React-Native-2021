
import React  from "react";  
import { FlatList,  } from "react-native"; 

import ReviewItem from "./ReviewItem";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import ItemSeparator from "../Extra/ItemSeparator"; 

const ReviewsList = ({repository, onEachReach}) =>{
   
  if(!repository){
    return <></>;  
  }
  return (
    <FlatList 
      data={repository.reviews.edges}
      renderItem={({item}) => <ReviewItem review={item.node} />}
      keyExtractor={(item)=>item.node.id}
      ListHeaderComponent={() => <RepositoryItem item={repository} viewLink={true}/>}
      ItemSeparatorComponent={ItemSeparator} 
      onEndReached={onEachReach}
      onEndReachedThreshold={0.5}
       

    />); 

};
 

export default ReviewsList;