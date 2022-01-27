import React, {useEffect, useState} from "react";
import {View} from "react-native"; 
import { useDebounce } from "use-debounce";
import useRepositories from '../../hooks/useRepositories'; 
import RepositoryListContainer from "./RepositoryListContainer";

const RepositoryList = ()=>{
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("DESC");
  const [filter, setFilter] = useState("");
  const [searchKeyword] = useDebounce(filter,500);
  const {repositories, fetchMore } = useRepositories({orderBy,orderDirection,searchKeyword, first: 4}); 
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

  const onEachReach = () => {
    fetchMore();
  };
  
  return (
    <View> 
      <RepositoryListContainer repositories={repositories} setOption={setOption} option={option} setFilter={setFilter} onEachReach={onEachReach}/>
    </View>
  );
};

export default RepositoryList;