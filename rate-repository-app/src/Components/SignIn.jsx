import React from "react"; 
import { Formik } from "formik";
import { Pressable, View , StyleSheet} from "react-native";
import FormikTextInput from "./New/FormikTextInput";
import Text from "./New/Text";
import theme from "../thene"; 


const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.white,
    display: "flex",
    marginBottom: 10
  },
  padding:{
    paddingTop: 10,
    paddingLeft: 10, 
    paddingRight: 10
  } ,
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
  },
  textBox:{ 
    borderColor: theme.colors.lightGray,
    paddingLeft: 10,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold
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
  }
  
  // ...
}); 

const initialValues = {
  username: '',
  password: ''
};

const SignInForm = ({onSubmit}) =>{ 

  return(
    <View  style={[styles.container, styles.padding]}>
      <FormikTextInput  style={[styles.box, styles.textBox]} name="username" placeholder="Username" />
      <FormikTextInput style={[styles.box, styles.textBox]} name="password" placeholder="Password" secureTextEntry/>
      <Pressable onPress={onSubmit}  > 
        <View style={[styles.box, styles.buttonBox]}>
          <Text   
            style={styles.buttonText}
            fontWeight="bold" 
            fontSize="subheading"  >Sign In</Text>  
        </View>
      </Pressable>
    </View>
  );
    
};

const SignIn = () => { 
  const onSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;