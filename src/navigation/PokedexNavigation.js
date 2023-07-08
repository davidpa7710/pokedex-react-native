import React from 'react'
import { createStackNavigator } from "@react-navigation/stack"
import { Pokemon, Pokedex } from '../screens'


const Stack = createStackNavigator()

export default function PokedexNavigation() {
    return (

            <Stack.Navigator>
                <Stack.Screen name="Pokedex" component={Pokedex} />
                <Stack.Screen
                    name='Pokemon'
                    component={Pokemon}
                    options={{
                        title: "",
                        headerTransparent: true
                    }} />
            </Stack.Navigator>
        
    )
}