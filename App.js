import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import AllRecipeScreen from './screens/AllRecipeScreen';
import SavedRecipeScreen from './screens/SavedRecipeScreen'; 
import { Provider } from "react-redux";
import store from './store/store'

export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <Provider store={store}>
      <NavigationContainer
          screenOptions={{
            headerShown: false
          }}
      >
        <Tab.Navigator>
            <Tab.Screen name="All" component={AllRecipeScreen} />
            <Tab.Screen name="Saved" component={SavedRecipeScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>

);
}
