import React from "react";
import { StyleSheet, View, Pressable, Alert} from "react-native";
import {  Link } from "react-router-native"; 

import { format } from 'date-fns';

import Text from "../Extra/Text";
import theme from "../../thene";  

const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.white,
    display: "flex",
    marginBottom: 10
  },
  padding:{
    padding: 10, 

  },
  flexBoxColumn:{
    flexDirection: "column",

    flexGrow: 1,
    flexShrink: 1,
  },
  flexBoxRow:{
    flexDirection: "row",
  }, 
  number:{
    color: theme.colors.primary,
    fontSize: theme.fontSizes.heading ,
    alignSelf:'center', 
  }, 
  numberBox:{
    width: 70,
    height: 70,
    borderRadius: 35,
    borderColor:theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center'
  },
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
  }, 
  buttonBox:{ 
    borderColor: theme.colors.white,
    justifyContent: 'center'
  },
  buttonText:{ 
    color: theme.colors.white,  
    marginRight: 10,
    marginLeft: 10,  
    alignSelf:'center', 
  },
  bkgPrimary:{
    backgroundColor: theme.colors.primary
  },
  bkgRed:{
    backgroundColor: theme.colors.errorRed
  }
});  

const ReviewItem = ({ review,deleteReview}) => { 
  const date = new Date(review.createdAt);

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete Review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel", 
          style: "cancel"
        },
        { text: "Delete", onPress: () => deleteReview(review.id) }
        //doDelete(review.rating.id)
      ]
    );
  
  return(
    <View style={styles.container} > 
      <View style={styles.padding}> 
        <View style={styles.flexBoxRow}>
          <View style={styles.numberBox}>
            <Text 
              style={[styles.number]} >
              {review.rating}
            </Text>
          </View>
          <View style={styles.flexBoxColumn}>
            <Text 
              style={styles.padding} 
              fontWeight="bold" 
              fontSize="subheading" >
              {review.repository.fullName}
            </Text>
            <Text
              style={styles.padding}  
              fontSize="subheading" > 
              {format(date,"yyyy.MM.dd")}
            </Text>
            <Text 
              style={styles.padding}  
              fontSize="subheading" > 
              {review.text}
            </Text>

            <View>
              <View style={[styles.padding, styles.flexBoxRow]}>
                <Link to={`/viewrepo/${review.repository.id}`}>
                  <View style={[styles.box, styles.buttonBox, styles.bkgPrimary]}>
                    <Text   
                      style={styles.buttonText}
                      fontWeight="bold" 
                      fontSize="subheading"  >View Repository</Text>  
                  </View> 
                </Link> 
                <Pressable onPress={createTwoButtonAlert}>
                  <View style={[styles.box, styles.buttonBox, styles.bkgRed]}>
                    <Text   
                      style={styles.buttonText}
                      fontWeight="bold" 
                      fontSize="subheading"  >Delete Review</Text>  
                  </View> 
                </Pressable>
              </View> 
            </View>  
          </View>    
        </View>       
      </View> 
    </View>

  );

}; 

  
export default ReviewItem;