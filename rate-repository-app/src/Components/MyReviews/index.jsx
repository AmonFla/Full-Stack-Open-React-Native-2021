import React from "react"; 
import { FlatList } from "react-native";

import useMyReviews from "../../hooks/useMyReviews";
import ItemSeparator from "../Extra/ItemSeparator";
import ReviewItem from "./ReviewItem";

const MyReviews =  ()=>{  
  const {reviews, fetchMore} = useMyReviews();  
  
  const onEachReach = () => { 
    fetchMore();
  };
   
  if(!reviews){
    return <></>;  
  }
  return (
    <FlatList 
      data={reviews.edges}
      renderItem={({item}) => <ReviewItem review={item.node} />}
      keyExtractor={(item)=>item.node.id} 
      ItemSeparatorComponent={ItemSeparator} 
      onEndReached={onEachReach}
      onEndReachedThreshold={0.5}
       
    />); 
 
};

export default MyReviews;