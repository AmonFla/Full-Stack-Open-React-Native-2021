import React from "react"; 
import {  StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from 'react-router-native';


import theme from "./thene";
import SignIn from "./Components/SignIn";
import RepositoryList from "./Components/RepositoryList"; 
import AppBar from "./Components/AppBar"; 
import SignOut from "./Components/SignOut";
import RepositoryView from "./Components/RepositoryView";
import ReviewAdd from "./Components/ReviewAdd";
import SignUp from "./Components/SignUp";
import MyReviews from "./Components/MyReviews";

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
        <Route path="/signout" element={<SignOut />} exact />   
        <Route path="/viewrepo/:id" element={<RepositoryView />} exact />  
        <Route path="/reviewadd" element={<ReviewAdd />} exact />  
        <Route path="/signup" element={<SignUp />} exact />   
        <Route path="/myreviews" element={<MyReviews />} exact />   
        <Route path="*" element={<Navigate to="/" replace />} />  
      </Routes>   
    </View>
  );
};

export default Main;