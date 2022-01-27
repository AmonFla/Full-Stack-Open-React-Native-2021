import React from "react";
import { useParams } from "react-router-native";
 
import useRepository from "../../hooks/useRepository"; 
import ReviewsList from "./ReviewList";

const RepositoryView =  ()=>{ 
  const {id} = useParams();
  const {repository, fetchMore} = useRepository(id,4);  
  
  const onEachReach = () => { 
    fetchMore();
  };
   
  return (
    <ReviewsList repository={repository}  onEachReach={onEachReach} /> 
  ); 
 
    

};

export default RepositoryView;