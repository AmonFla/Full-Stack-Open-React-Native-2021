import React from "react"; 
import {  StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from 'react-router-native';
import theme from "./thene";
import SignIn from "./Components/SignIn";
import RepositoryList from "./Components/RepositoryList"; 
import AppBar from "./Components/AppBar"; 

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.mainBackground,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>     
        <Route path="/" element={<RepositoryList />} exact />  
        <Route path="/signin" element={<SignIn />} exact />   
        <Route path="*" element={<Navigate to="/" replace />} />  
      </Routes>   
    </View>
  );
};

export default Main;