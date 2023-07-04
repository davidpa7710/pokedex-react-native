import React, { useEffect, useRef } from 'react';
import { SafeAreaView, TouchableWithoutFeedback, Animated, Image, StyleSheet } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Pokedex, Account, Favorites } from "../screens/index.js"
import { useNavigation } from '@react-navigation/core';
import AccountNavigation from './AccountNavigation.js';


const Tab = createBottomTabNavigator()
function rederPokeball() {
    const scalaValue = useRef(new Animated.Value(1)).current;
    const navigation = useNavigation()

    const handlePressIn = () => {
        Animated.spring(scalaValue, {
            toValue: 0.8,
            useNativeDriver: true,
        }).start();
    };
    const handlePressOut = () => {
        Animated.spring(scalaValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
        navigation.navigate('Pokedex')
    }
    return (
        <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
            <Animated.View style={[styles.container, { transform: [{ scale: scalaValue }] }]}>
                <Image
                    source={require('../../assets/pokeball.png')}
                    style={styles.pokeball}
                />
            </Animated.View>

        </TouchableWithoutFeedback>
    )
}

const AppNavigator = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Tab.Navigator>
                <Tab.Screen name="Favorites" component={Favorites} options={{
                    tabBarLabel: "Favoritos",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="heart" color={color} size={size} />
                    )
                }} />
                <Tab.Screen name="Pokedex" component={Pokedex} options={{
                    tabBarLabel: "",
                    tabBarIcon: () => rederPokeball()

                }} />
                <Tab.Screen
                    name="Account"
                    component={Account}
                    component={AccountNavigation}
                    options={{
                        tabBarLabel: "Mi cuenta",
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="user" color={color} size={size} />
                        ),
                    }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
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