import React from "react";
import {  Link } from "react-router-native"; 
import { StyleSheet, Image, View, Pressable, Linking} from "react-native";
import Text from "./New/Text";
import theme from "../thene";
import RepositoryNumberedItems from "./RepositoryNumberedItem"; 

const styles = StyleSheet.create({
  container:{
    fontSize: theme.fontSizes.body,
    backgroundColor: theme.colors.white,
    display: "flex",
    marginBottom: 10
  },
  avatar:{
    width: 70,
    height: 70,
    borderRadius: 10
  },
  padding:{
    paddingTop: 10,
    paddingLeft: 10, 
    paddingRight: 10

  },
  flexBoxColumn:{
    flexDirection: "column",
  },
  flexBoxRow:{
    flexDirection: "row",
  }, 
  flexJustifyContentEvenly:{
    justifyContent: "space-evenly"
  },
  languageBox:{
    backgroundColor: theme.colors.primary, 
    alignSelf: 'flex-start', 
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: theme.colors.white,
    marginTop: 10,  
  },
  languageText:{ 
    color: theme.colors.white,  
    marginRight: 10,
    marginLeft: 10,  
  },
  box:{
    height: 46, 
    borderRadius: 5,
    borderWidth: 1, 
    marginBottom: 5
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
}); 

const RepositoryItem = ({item, viewLink}) => {  

  const openGitHub = ()=>{
    Linking.openURL(item.url);
  };

  return(
    <View style={styles.container} testID="repositoryItem">
      <Link to={`/viewrepo/${item.id}`}>
        <View style={styles.padding}>
          <View style={styles.flexBoxRow}>
            <Image
              style={styles.avatar}
              source={{uri: item.ownerAvatarUrl}} />
            <View style={styles.flexBoxColumn}>
              <Text 
                style={styles.padding} 
                fontWeight="bold" 
                fontSize="subheading" >
                {item.fullName}
              </Text>
              <Text 
                style={styles.padding}  
                fontSize="subheading" > 
                {item.description}
              </Text>
              <Text style={[styles.padding, styles.languageBox]}  >
                <Text 
                  style={styles.languageText}  
                  fontWeight="bold" 
                  fontSize="subheading" > 
                  {item.language}</Text>

              </Text>
            </View>
          </View>
          <View style={[styles.flexBoxRow, styles.flexJustifyContentEvenly, styles.padding]} >

            <RepositoryNumberedItems title="Stars" number={item.stargazersCount} />
            <RepositoryNumberedItems title="Forks" number={item.forksCount}/>
            <RepositoryNumberedItems title="Reviews" number={item.reviewCount}/>
            <RepositoryNumberedItems title="Rating" number={item.ratingAverage}/>

          </View>
        

        </View>
      </Link>
      {viewLink ?
        <View style={[styles.padding]}>
          <Pressable onPress={()=>openGitHub()}>
            <View style={[styles.box, styles.buttonBox]}>
              <Text   
                style={styles.buttonText}
                fontWeight="bold" 
                fontSize="subheading"  >Open In Github</Text>  
            </View> 
          </Pressable>
        </View> 
        :null}
    </View>

  );

};
 
 
export default RepositoryItem;