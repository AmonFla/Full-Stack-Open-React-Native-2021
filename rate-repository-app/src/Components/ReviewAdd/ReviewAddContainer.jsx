import React from "react"; 
import { Formik } from "formik";
import { Pressable, View , StyleSheet} from "react-native";  
import * as yup from 'yup';  

import FormikTextInput from '../Extra/FormikTextInput';
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
  },
  multiline:{
    textAlignVertical:'top'
  }
  
  // ...
}); 

const validationSchema = yup.object().shape({
  ownerName: yup.string().required('Repository owner name required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.string().required('Rating name is required').matches(/^[0-9]$|^[1-9][0-9]$|^(100)$/,"Must be between 0 and 100.")
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating:'',
  text: ''

};

const ReviewAddForm = ({onSubmit}) =>{ 
  return(
    <View  style={[styles.container, styles.padding]}>
      <FormikTextInput   name="ownerName" placeholder="Repository owner name" />
      <FormikTextInput   name="repositoryName" placeholder="Repository name " />
      <FormikTextInput   name="rating" placeholder="Rating between 0 and 100 " />
      <FormikTextInput   name="text" placeholder="Review" multiline={true} style={styles.multiline} />
      <Pressable onPress={onSubmit}  > 
        <View style={[styles.box, styles.buttonBox]}>
          <Text   
            style={styles.buttonText}
            fontWeight="bold" 
            fontSize="subheading"  >Create a review</Text>  
        </View>
      </Pressable>
    </View>
  );
    
};

const ReviewAddContainer = ({onSubmit}) => { 

  
  return (
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewAddForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default ReviewAddContainer;