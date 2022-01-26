
import React  from "react";  
import {   StyleSheet, View} from "react-native";
import theme from "../thene"; 



const styles = StyleSheet.create({
  separator:{
    height:16,
    backgroundColor: theme.colors.lightGray
  }
});
   
  
const ItemSeparator = ()=> <View style={styles.separator} />; 

export default ItemSeparator;