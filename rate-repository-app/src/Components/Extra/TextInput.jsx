import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';
import theme from "../../thene"; 

const styles = StyleSheet.create({ 
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
  },
  textBox:{ 
    paddingLeft: 10,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
  }, 
  grayBorder:{
    borderColor: theme.colors.lightGray,
  },
  redBorder:{
    borderColor: theme.colors.errorRed,
  }
    
  // ...
}); 
const TextInput = ({ style , error, ...props }) => {
  const textInputStyle = [style, styles.box,styles.textBox, error?styles.redBorder:styles.grayBorder];
 
  return <NativeTextInput style={textInputStyle}  {...props} />;
};

export default TextInput;