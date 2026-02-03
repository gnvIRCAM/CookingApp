import { Text, TouchableOpacity, Image, Button } from "react-native"
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const thumb_size = 65

export default function SingleRecipe(props) {
    const recipe = props.recipe["item"]; 
    const buttonName = props.buttonName;
    const buttonCallback = props.buttonCallback
    const navigation = useNavigation();

    const goToDetailed = () => {
        navigation.navigate('detailed', {recipe: recipe})
    }
    const title = recipe["strMeal"].length>30?recipe["strMeal"].substring(0, 29):recipe["strMeal"]

    return ( 
    <TouchableOpacity style={styles.container} onPress={goToDetailed}>
            <Image 
                source={{uri: recipe["strMealThumb"]}} 
                style={{width: thumb_size, height: thumb_size, margin : 10}}/>
            <Text style={{fontSize: 15}}>{title}</Text>
            <Button title={buttonName} style={{pad : 5}} onPress={buttonCallback}/>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        margin: 2,
        alignItems: 'center',
        justifyContent: 'space-between',
    }
})