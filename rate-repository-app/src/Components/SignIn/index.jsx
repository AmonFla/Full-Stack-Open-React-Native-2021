import React from "react";  
import {  useNavigate } from "react-router-native";
 
import useSignIn from '../../hooks/useSignIn';
import SignInContainer from "./SignInContainer";



const SignIn = () => { 
  const [signIn] = useSignIn();  
  const navigateTo = useNavigate();
 

  const onSubmit = async (values) => {
    const { username, password } = values;

    try { 
      await signIn({ username, password });
      navigateTo('/');   
    } catch (e) {
      console.log(e);
    }
  };

  
  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignIn;