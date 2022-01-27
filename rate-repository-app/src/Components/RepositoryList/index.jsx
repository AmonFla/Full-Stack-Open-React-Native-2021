import React, {useEffect, useState} from "react";
import {   View} from "react-native"; 
import useRepositories from '../../hooks/useRepositories'; 
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = ()=>{
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const { repositories } = useRepositories({orderBy,orderDirection}); 
  const [option, setOption] = useState('default');
 
  useEffect(()=>{
    switch(option){
      case 'hRate':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('DESC');
        break;
      case 'lRate':
        setOrderBy('RATING_AVERAGE');
        setOrderDirection('ASC');
        break;
      default:
        setOrderBy('CREATED_AT');
        setOrderDirection('DESC');
    }

  }, [option]) ;
  
  return (
    <View> 
      <RepositoryListContainer repositories={repositories} setOption={setOption} option={option} />
    </View>
  );
};

export default RepositoryList;