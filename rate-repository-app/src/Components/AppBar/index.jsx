import React from "react";
import { View , StyleSheet, TouchableWithoutFeedback, ScrollView} from "react-native";
import Constants from 'expo-constants'; 
import { Link } from "react-router-native"; 

import theme from "../../thene";
import AppBarItem from "./AppBarItem"; 
import useMe  from "../../hooks/useMe";

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
  const {me} = useMe(); 
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <TouchableWithoutFeedback>
          <View>
            <Link to="/" ><AppBarItem title="Repositories" /></Link>
          </View>
        </TouchableWithoutFeedback> 
        {me? 
          <TouchableWithoutFeedback>
            <View>
              <Link to="/reviewadd" ><AppBarItem title="Create a review" /></Link>
            </View>
          </TouchableWithoutFeedback>
          :null}
        <TouchableWithoutFeedback >
          <View>
            {me?  
              <Link to="/signout"><AppBarItem title="Sign Out" /></Link> 
              :<Link to="/signin"><AppBarItem title="Sign In" /></Link>
            }
          </View>
        </TouchableWithoutFeedback> 
      </ScrollView>
    </View>);
};

export default AppBar; 