import { useEffect, useState } from "react";
import { ScrollView, Text, Button, Image } from "react-native"

const IMAGE_SIZE = 150; 

export default function DetailedRecipe(props) {
    const navigation = props.navigation; 
    const params = props.route.params['recipe']; 
    const instructions = params.strInstructions.split('.');
    const [ingredients, setIngredients] = useState([]);
    const [quantities, setQuantities] = useState([]);


    useEffect(() => {
        var ingredients_ = []
        var measure_ = []
        for (var p in params) {
            if (p.includes('Ingredient')) {
                if (params[p]) {
                    ingredients_.push(params[p])
                }
            }
            if (p.includes('Measure')) {
                if (params[p]) {
                    measure_.push(params[p])
                }
            }
        }
        setIngredients(ingredients_);
        setQuantities(measure_)
    }, [params])

    return (
    <ScrollView>
        <Image 
            source={{uri: params.strMealThumb}} 
            style={{width: IMAGE_SIZE, height: IMAGE_SIZE, margin : 10, alignSelf: 'center'}}/>
        <Text style={{alignSelf: 'center', fontSize: 25}}>
            {params.strMeal}
        </Text>
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Ingredients : 
        </Text>
        {ingredients.map((ingredient, index) => (
            <Text style={{fontSize: 15}} key={index}>{ingredient} : {quantities[index]}</Text>
        ))}
        <Text style={{fontSize: 20, fontWeight: "bold"}}>
            Instructions : 
        </Text>
        {instructions.map((instruction, index) => (
            <Text style={{fontSize: 15}} key={index+100}>{index+1} - {instruction.replace('\n', '')}</Text>
        ))}

        <Button title="Go back" onPress={()=>navigation.goBack()}/>
    </ScrollView>)
}