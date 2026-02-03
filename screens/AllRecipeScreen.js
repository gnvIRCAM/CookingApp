import DetailedRecipe from "../components/DetailedRecipe";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllRecipeList from "../components/AllRecipeList";

export default function AllRecipeScreen() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name='all' component={AllRecipeList}
          />     
          <Stack.Screen name='detailed' component={DetailedRecipe}/> 
            </Stack.Navigator>
    )
}