import React, { useContext, useEffect } from "react";
import AuthStorageContext from "../context/AuthStorageContext";
import {  useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const SignOut = ()=>{
  const authStorage = useContext(AuthStorageContext);
  const navigateTo = useNavigate();
  const apolloClient = useApolloClient();

  const logout = async ()=>{
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigateTo("/");
  };

  useEffect(()=>{
    logout();
  },[]);

  return (<></>);

};

export default SignOut;