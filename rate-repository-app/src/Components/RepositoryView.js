import { useLazyQuery } from "@apollo/client";
import React,{useEffect, useState} from "react";  
import { FlatList,  } from "react-native";
import { useParams } from "react-router-native";

import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "./ItemSeparator";
import ReviewItem from "./ReviewItem";




const RepositoryView =  ()=>{
  const {id} = useParams();
  const [getRepository, result] = useLazyQuery(GET_REPOSITORY); 
  const [item, setItem] = useState(null);

  useEffect(()=>{ 
    if(result.data){
      setItem(result.data.repository); 
    }  
  },[result]);

  useEffect(()=>{
    getRepository({variables:{repositoryId:id}});
  },[id]);
 
  
  if (item != null) { 
    return (
      <FlatList 
        data={item.reviews.edges}
        renderItem={({item}) => <ReviewItem review={item.node} />}
        keyExtractor={(item)=>item.node.id}
        ListHeaderComponent={() => <RepositoryItem item={item} viewLink={true}/>}
        ItemSeparatorComponent={ItemSeparator}
      />);
  }

  return (<></>);
    

};

export default RepositoryView;