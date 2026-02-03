import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailedRecipe from "../components/DetailedRecipe";
import SaveRecipeList from "../components/SaveRecipeList";

export default function SavedRecipeScreen() {
    const Stack = createNativeStackNavigator(); 
      
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="list" component={SaveRecipeList}/>
          <Stack.Screen name="detailed" component={DetailedRecipe}/>
        </Stack.Navigator>
    )
}