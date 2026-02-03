import RecipesList from "./RecipesList";
import { useDispatch } from "react-redux";
import { addRecipe } from "./SavedRecipeSlice";
import { useEffect, useState } from "react";
import { Button, View } from "react-native";

export default function AllRecipeList() {
    const dispatch = useDispatch();
    const [recipes, setRecipes] = useState();
    const numRecipes = 25;
    const [reload, setReload] = useState(false);
    
    useEffect(() => {
        const queryRecipes = async () => {
            let recipes_ = []; 
            for (let i =0; i<numRecipes; i++){
                try {
                    let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
                    let json = await res.json();
                    recipes_.push(json["meals"][0])

                }
                catch (err) {
                    console.log(err)
                }
            }
            setRecipes(recipes_);

            }; 
        queryRecipes();
        }, [reload])
    
    const buttonCallback = (item) => {
            let recipe = item['item']; 
            dispatch(addRecipe(recipe))
        }
    
    return (
    <View>
        <Button 
            style={{width: 30}}
            onPress={() => setReload(!reload)} 
            title="Refresh"
        />
        <RecipesList recipes={recipes} buttonCallback={buttonCallback} buttonName='Save'/>
    </View>
    )
}