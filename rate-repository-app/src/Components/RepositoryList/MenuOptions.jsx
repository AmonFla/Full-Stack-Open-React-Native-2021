import  React from 'react'; 
import {Picker} from '@react-native-picker/picker'; 
 
 

const MenuOptions = ({setOption, option}) => {  

  return (  
    <Picker  
      selectedValue={option}
      onValueChange={(itemValue) => {
        setOption(itemValue); }
      }>
      <Picker.Item label="Latest repositories" value="default" />
      <Picker.Item label="Highest rated repositories" value="hRate" />
      <Picker.Item label="Lowest rated repositories" value="lRate" />
    </Picker> 
    
  );
}; 

export default MenuOptions;