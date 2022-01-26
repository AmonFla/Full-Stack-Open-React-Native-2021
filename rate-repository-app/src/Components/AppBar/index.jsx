import React from "react";
import { View , StyleSheet, ScrollView} from "react-native";
import Constants from 'expo-constants';  

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
        <AppBarItem title="Repositories" link="/" />
        {me? 
          <>
            <AppBarItem title="Create a review" link="/reviewadd" />
            <AppBarItem title="Sign Out" link="/signout" />
          </> 
          :<>
            <AppBarItem title="Sign In" link="/signin" /> 
            <AppBarItem title="Sign Up" link="/signup" /> 
          </>
        } 
      </ScrollView>
    </View>);
};

export default AppBar; 