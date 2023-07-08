import React from 'react'
import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

export default function Favorites() {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Agrega Aqui tus Pokemons Favoritos <Icon name="plus" size={28} color="black" /></Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    }
});
