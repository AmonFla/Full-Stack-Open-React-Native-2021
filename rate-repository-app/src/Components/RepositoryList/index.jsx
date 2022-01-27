import React, {useEffect, useState} from "react";
import {View} from "react-native"; 
import { useDebounce } from "use-debounce";
import useRepositories from '../../hooks/useRepositories'; 
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = ()=>{
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [filter, setFilter] = useState("");
  const [filterDebounced] = useDebounce(filter,500);
  const {repositories } = useRepositories({orderBy,orderDirection,filterDebounced}); 
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
      <RepositoryListContainer repositories={repositories} setOption={setOption} option={option} setFilter={setFilter} />
    </View>
  );
};

export default RepositoryList;