import React from "react";
import { View , StyleSheet, TouchableWithoutFeedback} from "react-native";
import Constants from 'expo-constants'; 
import theme from "../thene";
import AppBarItem from "./AppBarItem"; 

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.blackBkg, 
    paddingBottom: Constants.statusBarHeight
    // ...
  } 
});

const AppBar = ()=>{
  return (
    <View style={styles.container}>
      
      <TouchableWithoutFeedback onPress={() => alert('Repo!')}>
        <View>
          <AppBarItem title="Repositories" />
        </View>
      </TouchableWithoutFeedback> 
    </View>);
};

export default AppBar;