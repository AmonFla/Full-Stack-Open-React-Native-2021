import React from "react";
import { StyleSheet } from "react-native";
import Text from "./New/Text";
import theme from "../thene";
const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body
  },
  // ...
});
const RepositoryItem = ({item}) => { 
  return(
    <Text style={styles.container}>
      <Text>Full name: {item.fullName}{"\n"}</Text>
      <Text>Description: {item.description}{"\n"}</Text>
      <Text>Language: {item.language}{"\n"}</Text>
      <Text>Stars: {item.stargazersCount}{"\n"}</Text>
      <Text>Forks: {item.forksCount}{"\n"}</Text>
      <Text>Reviews: {item.reviewCount}{"\n"}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </Text>

  );

};
 
export default RepositoryItem;