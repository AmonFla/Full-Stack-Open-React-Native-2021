import React from "react";
import { StyleSheet,  View} from "react-native";

import Text from "../Extra/Text"; 

const styles = StyleSheet.create({
  container:{
    flexDirection: "column",
    alignItems: "center"
  }
 
});

const RepositoryNumberedItems = ({number, title})=>{
  const value = number > 1000 ? Number((number / 1000).toFixed(1)) + 'k': number;
  return (
    <View style={styles.container} testID={title}>
      <Text  
        fontWeight="bold" 
        fontSize="subheading" >
        {value}
      </Text>
      <Text  
        fontSize="subheading" > 
        {title}
      </Text>
    </View>
  );
    
}; 
export default RepositoryNumberedItems;