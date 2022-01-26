
import React  from "react";  
import { Text, StyleSheet, View} from "react-native";

import theme from "../../thene"; 



const styles = StyleSheet.create({
  text:{
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.subheading, 
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary:{
    color: theme.colors.textSecondary,
  },
  colorPrimary:{
    color: theme.colors.primary
  },  
  backGroundPrimary:{
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  },
  backGroundWarning:{
    backgroundColor: theme.colors.yellow,
    color: theme.colors.white
  },
  backGroundDanger:{
    backgroundColor: theme.colors.errorRed,
    color: theme.colors.white
  },
});
   
  
const Message = ({message, color, backGround, style })=> { 

  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary, 
    backGround === 'primary' && styles.backGroundPrimary,
    backGround === 'warning' && styles.backGroundWarning,
    backGround === 'danger' && styles.backGroundDanger,
    style?style:'',
  ];
  return (
    <View ><Text style={textStyle}>{message}</Text></View>
  );
};

export default Message;