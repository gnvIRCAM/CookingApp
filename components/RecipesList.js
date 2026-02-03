import { FlatList } from "react-native"
import SingleRecipe from "./SingleRecipe"
import { useState } from "react";

export default function RecipesList(props) {
    const recipes = props.recipes;
    const buttonName = props.buttonName
    const buttonCallback = props.buttonCallback
    
    return <FlatList 
            data={recipes}
            renderItem={(item, index) => <SingleRecipe 
                recipe={item} 
                buttonName={buttonName} 
                buttonCallback={() => buttonCallback(item, index)}/>}
            keyExtractor={(item, index) => index}/>
}