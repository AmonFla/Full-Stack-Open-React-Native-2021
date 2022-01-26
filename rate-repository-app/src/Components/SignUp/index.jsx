import React, {useState} from "react";   
import {  View } from "react-native";  
import {  useNavigate } from "react-router-native";

import useUserAdd from "../../hooks/useUserAdd";
import Message from "../Extra/Message";
import UserAddContainer from "./UserAddContainer";
import useSignIn from "../../hooks/useSignIn";



const SignUp = () => {  
  const [userAdd] = useUserAdd();
  const [signIn] = useSignIn();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigateTo = useNavigate();
 

  const onSubmit = async (values) => {
    const { username, password } = values;
    try { 
      await userAdd({ username, password}); 
      await signIn({ username, password });
      navigateTo('/');  
    } catch (e) {
      setErrorMessage(e.message);
    }
  };

  
  return (
    <View>
      { errorMessage?
        <Message message={errorMessage} backGround="danger"/>
        : null
      }
      <UserAddContainer onSubmit={onSubmit} />
    </View>
  );
};
 

export default SignUp; 