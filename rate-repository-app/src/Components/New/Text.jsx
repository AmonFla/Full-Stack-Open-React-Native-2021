import React from "react";
import {Text as NativeText, StyleSheet} from 'react-native';

import theme from "../../thene";

const styles = StyleSheet.create({
  text:{
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary:{
    color: theme.colors.textSecondary,
  },
  colorPrimary:{
    color: theme.colors.primary
  },
  fontSizeSubheading:{
    fontSize: theme.fontSizes.subheading,        
  },
  fontWeightBold:{
    fontWeight: theme.fontWeights.bold
  },
  backGroundPrimary:{
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  },
});

const Text =({color, fontSize, fontWeight, backGround, style, ...props}) =>{
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    backGround === 'primary' && styles.backGroundPrimary,
    style?style:'',
  ];
  return <NativeText style={textStyle} {...props} />;
};

export default Text;