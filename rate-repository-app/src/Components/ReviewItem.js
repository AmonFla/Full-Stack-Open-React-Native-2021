import React from "react";
import { StyleSheet,  View} from "react-native";
import { format } from 'date-fns';
import Text from "./New/Text";
import theme from "../thene"; 

const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.white,
    display: "flex",
    marginBottom: 10
  },
  avatar:{
    width: 70,
    height: 70,
    borderRadius: 10
  },
  padding:{
    paddingTop: 10,
    paddingLeft: 10, 
    paddingRight: 10

  },
  flexBoxColumn:{
    flexDirection: "column",
  },
  flexBoxRow:{
    flexDirection: "row",
  }, 
  flexJustifyContentEvenly:{
    justifyContent: "space-evenly"
  },
  languageBox:{
    backgroundColor: theme.colors.primary, 
    alignSelf: 'flex-start', 
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: theme.colors.white,
    marginTop: 10,  
  },
  languageText:{ 
    color: theme.colors.white,  
    marginRight: 10,
    marginLeft: 10,  
  },
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
  }, 
  buttonBox:{
    backgroundColor: theme.colors.primary,  
    borderColor: theme.colors.white,
    justifyContent: 'center'
  },
  buttonText:{ 
    color: theme.colors.white,  
    marginRight: 10,
    marginLeft: 10,  
    alignSelf:'center', 
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