import React from "react";
import { Text } from "react-native";

const RepositoryItem = ({item}) => {
    console.log(item.fullName);
    return(
        <Text>
            <Text>Full name: {item.fullName}{"\n"}</Text>
            <Text>Description: {item.description}{"\n"}</Text>
            <Text>Language: {item.language}{"\n"}</Text>
            <Text>Stars: {item.stargazersCount}{"\n"}</Text>
            <Text>Forks: {item.forksCount}{"\n"}</Text>
            <Text>Reviews: {item.reviewCount}{"\n"}</Text>
            <Text>Rating: {item.ratingAverage}</Text>
        </Text>

    );

};
 
export default RepositoryItem;