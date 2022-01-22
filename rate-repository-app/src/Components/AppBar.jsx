import React from "react";
import { View , StyleSheet, TouchableWithoutFeedback} from "react-native";
import Constants from 'expo-constants'; 
import theme from "../thene";
import AppBarItem from "./AppBarItem"; 
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container:{
    paddingTop: Constants.statusBarHeight * 2,
    backgroundColor: theme.colors.blackBkg, 
    paddingBottom: Constants.statusBarHeight /2,
    display: "flex",
    flexDirection: "row",

    // ...
  } 
});

const AppBar = ()=>{
  return (
    <View style={styles.container}>
      
      <TouchableWithoutFeedback>
        <View>
          <Link to="/" ><AppBarItem title="Repositories" /></Link>
        </View>
      </TouchableWithoutFeedback> 
      <TouchableWithoutFeedback >
        <View>
          <Link to="/signin"><AppBarItem title="Sign In" /></Link>
        </View>
      </TouchableWithoutFeedback> 
    </View>);
};

export default AppBar; 