import { useLazyQuery } from "@apollo/client";
import React,{useEffect, useState} from "react";  
import { useParams } from "react-router-native";
import { GET_REPOSITORY } from "../graphql/queries";
import RepositoryItem from "./RepositoryItem";


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
    return (<RepositoryItem item={item} viewLink={true}/>);
  }

  return (<></>);
    

};

export default RepositoryView;