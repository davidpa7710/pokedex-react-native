import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Pokedex } from '../screens';
import { PokemonDetailsScreen } from '../screens';

const Stack = createStackNavigator();

export const PokedexStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Pokedex" component={Pokedex} />
            <Stack.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
        </Stack.Navigator>
    );
};

