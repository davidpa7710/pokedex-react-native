import React from 'react';
import { SafeAreaView, Image } from "react-native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Icon from "react-native-vector-icons/FontAwesome5"
import { Pokedex, Account, Favorites } from "../screens/index.js"

const Tab = createBottomTabNavigator()

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
                <Tab.Screen name="Account" component={Account} options={{
                    tabBarLabel: "Mi Cuenta",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" color={color} size={size} />
                    )
                }} />
            </Tab.Navigator>
        </SafeAreaView>
    )
}

function rederPokeball() {
    return (
        <Image
            source={require('../../assets/pokeball.png')}
            style={{ width: 75, height: 75, top: -15 }}
        />
    )
}

export default AppNavigator;