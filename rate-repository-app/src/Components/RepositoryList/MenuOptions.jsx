import  React from 'react'; 
import {Picker} from '@react-native-picker/picker';  
import ItemSeparator from '../Extra/ItemSeparator'; 
import TextInput from '../Extra/TextInput';

  

const MenuOptions = ({setOption, option,setFilter}) => {  

  return (
    <>  
      <Picker    
        selectedValue={option}
        onValueChange={(itemValue) => {
          setOption(itemValue); }
        }>
        <Picker.Item label="Latest repositories" value="default" />
        <Picker.Item label="Highest rated repositories" value="hRate" />
        <Picker.Item label="Lowest rated repositories" value="lRate" />
      </Picker> 

      <TextInput
        onChangeText={(text) =>  setFilter(text)}
        placeholder='Filter repositories...'
        style={{ margin: 5, backgroundColor: "white" }}
      />
      <ItemSeparator />
    </>
    
  );
}; 

export default MenuOptions;