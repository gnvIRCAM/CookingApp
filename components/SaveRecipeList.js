import RecipesList from "./RecipesList";
import { useSelector, useDispatch } from "react-redux";
import { recipesSelector, removeRecipe } from "./SavedRecipeSlice";

export default function SaveRecipeList() {
    const dispatch = useDispatch();
    const recipes = useSelector(recipesSelector);
    const buttonCallback = (item) => {
        let index = item['index']; 
        dispatch(removeRecipe(index))
    }
    return <RecipesList recipes={recipes} buttonCallback={buttonCallback} buttonName='Delete'/>
}