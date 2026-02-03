import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "../components/SavedRecipeSlice"; 

export default configureStore({
    reducer: {
        recipes: recipesReducer, 
    }
}); 