import React, {useState} from "react";   
import {  View } from "react-native";  
import {  useNavigate } from "react-router-native";

import useReviewAdd from "../../hooks/useReviewAdd";
import Message from "../Extra/Message";
import ReviewAddContainer from "./ReviewAddContainer";



const ReviewAdd = () => {  
  const [reviewAdd] = useReviewAdd();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigateTo = useNavigate();
 

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, test } = values;
    try { 
      const {createReview} = await reviewAdd({ repositoryName, ownerName, rating, test }); 
      navigateTo(`/viewrepo/${createReview.repositoryId}`);
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
      <ReviewAddContainer onSubmit={onSubmit} />
    </View>
  );
};
 

export default ReviewAdd; 