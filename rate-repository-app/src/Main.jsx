import React from "react"; 
import {  StyleSheet, View } from "react-native";
import RepositoryList from "./Components/RepositoryList"; 
import AppBar from "./Components/AppBar"; 

const style  = StyleSheet.create({
  container:{ 
    flexDirection: "column"
  }
});

const Main =()=>{
  return (
    <View style={style.container}> 
      <View >
        <AppBar />
      </View>
      <View>
        <RepositoryList /> 
      </View>
    </View>
  );
};

export default Main;