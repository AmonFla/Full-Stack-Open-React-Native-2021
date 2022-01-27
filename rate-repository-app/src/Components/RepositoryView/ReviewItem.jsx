import React from "react";
import { StyleSheet,  View} from "react-native";
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
  }
});  

const ReviewItem = ({ review }) => { 
  const date = new Date(review.createdAt);
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
              {review.user.username}
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
          </View>      
        </View>       
      </View> 
    </View>

  );

}; 

  
export default ReviewItem;