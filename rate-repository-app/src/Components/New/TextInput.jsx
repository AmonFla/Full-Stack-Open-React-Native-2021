import React from "react";
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style , ...props }) => {
  const textInputStyle = [style, styles];
 
  return <NativeTextInput style={textInputStyle}  {...props} />;
};

export default TextInput;