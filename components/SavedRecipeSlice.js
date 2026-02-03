import { createSlice } from "@reduxjs/toolkit";

const SavedRecipeSlice = createSlice({
    name:'recipes', 
    initialState: [],
    reducers: {
        addRecipe: (state, action) => {
            state.push(action.payload); 
        }, 
        removeRecipe: (state, action) => {
            state.splice(action.payload, 1); 
        }, 
    }
}); 

export const { addRecipe, removeRecipe } = SavedRecipeSlice.actions; 
export const recipesSelector = (state) => state.recipes; 
export default SavedRecipeSlice.reducer; 