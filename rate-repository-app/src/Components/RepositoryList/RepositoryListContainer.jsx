import React from "react";
import { FlatList  , View} from "react-native"; 

import RepositoryItem from "./RepositoryItem";
import ItemSeparator from "../Extra/ItemSeparator";
import MenuOptions from "./MenuOptions"; 


export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    // this.props contains the component's props
    const props = this.props;
 
 
    return (
      <View>
        <MenuOptions setOption={props.setOption} option={props.option} setFilter={props.setFilter}/>
      </View>);
    
  };

  render() {
    // Get the nodes from the edges array
    const repositoryNodes = this.props.repositories
      ? this.props.repositories.edges.map(edge => edge.node)
      : [];
      
    return ( 
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={RepositoryItem}
        keyExtractor={(item)=>item.id}
        ListHeaderComponent={this.renderHeader}
       
      />  
    );
  }
}

/*
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
          ListHeaderComponent={() => { 
            return (<MenuOptions setOption={setOption} option={option} />);
          }}
        /> 
      </View>
    </View>
  );
};
*/
export default RepositoryListContainer;