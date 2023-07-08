import React, { useRef } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Animated, Image, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Pokedex, Account, Favorites } from "../screens/index.js"
import PokedexNavigation from './PokedexNavigation.js';
import { useNavigation } from '@react-navigation/core';

const Tab = createBottomTabNavigator();


function renderPokeball() {
    const scaleValue = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation();

    const handlePressIn = () => {
        Animated.spring(scaleValue, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
        navigation.navigate('Pokedex');
    };


    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.container, { transform: [{ scale: scaleValue }] }]}>
                <Image
                    source={require('../../assets/pokeball.png')}
                    style={styles.pokeball}
                />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}


const AppNavigator = () => {
    return (

        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator >
                <Tab.Screen
                    name="Favoritos"
                    component={Favorites}
                    options={{
                        tabBarLabel: 'Favoritos',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="heart" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Pokedex"
                    component={PokedexNavigation}
                    options={{
                        tabBarLabel: "",
                        tabBarIcon: renderPokeball,
                    }}
                />
                <Tab.Screen
                    name="Mi cuenta"
                    component={Account}
                    options={{
                        tabBarLabel: 'Mi Cuenta',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        )
                    }}
                />
            </Tab.Navigator>
        </SafeAreaView>


    );
}

const styles = StyleSheet.create({
    container: {
        width: 75,
        height: 75,
        borderRadius: 37.5,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOpacity: 0.5,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 2,
    },
    pokeball: {
        width: 75,
        height: 75,
        top: -15,
    },
});
export default AppNavigator;