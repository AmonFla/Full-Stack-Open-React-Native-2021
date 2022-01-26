import React from "react";
import { StyleSheet, Image, View} from "react-native";
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
  }
}); 
const RepositoryItem = ({item}) => { 
  return(
    <View style={styles.container} testID="repositoryItem">
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
    </View>

  );

};
 
 
export default RepositoryItem;