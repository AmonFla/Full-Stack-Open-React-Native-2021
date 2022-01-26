import React from "react";
import { View , StyleSheet} from "react-native";

import Text from "../Extra/Text";
import theme from "../../thene";

const styles = StyleSheet.create({ 
  title:{
    color: theme.colors.white,
    fontSize: theme.fontSizes.heading,
    marginRight: 10
  }
  // ...
});

const AppBarItem = ({title})=>{
  return <View><Text style={styles.title}>{title}</Text></View>;
};

export default AppBarItem;