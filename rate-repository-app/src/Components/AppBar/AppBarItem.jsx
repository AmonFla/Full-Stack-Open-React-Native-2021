import React from "react";
import { View , StyleSheet,TouchableWithoutFeedback} from "react-native";
import { Link } from "react-router-native"; 

import Text from "../Extra/Text";
import theme from "../../thene";

const styles = StyleSheet.create({ 
  title:{
    color: theme.colors.white,
    fontSize: theme.fontSizes.subheading,
    marginRight: 10
  }
  // ...
});

const AppBarItem = ({title, link})=>{
  return (
    <TouchableWithoutFeedback>
      <View>
        <Link to={link} ><View><Text style={styles.title}>{title}</Text></View></Link>
      </View>
    </TouchableWithoutFeedback> 
  );
};

export default AppBarItem;