import React, { useEffect, useState } from 'react'
import { ScrollView, Text, FlatList, ActivityIndicator, View, Image } from 'react-native'
import { getPokemonList, getPokemonImage } from '../../api/pokeapi'

function PokedexScreen() {
    const [pokemonList, setPokemonList] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchPokemonList()
    }, [])
    const fetchPokemonList = async () => {
        try {
            const limit = 186;
            const offset = 0;
            const results = await getPokemonList(limit, offset);
            const pokemonData = await Promise.all(
                results.map(async (pokemon) => {
                    const image = await getPokemonImage(pokemon.url);
                    return { name: pokemon.name, image };
                })
            );

            setPokemonList(pokemonData);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };


    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#000000" />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, padding: 16 }}>
            <Text style={{ fontSize: 34, fontWeight: 'bold', marginBottom: 16 }}>Pokedex</Text>
            <ScrollView>
                {pokemonList.map((pokemon) => (
                    <View key={pokemon.name} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                        <Image source={{ uri: pokemon.image }} style={{ width: 80, height: 80, marginRight: 10 }} />
                        <Text style={{ fontSize: 26 }}>{pokemon.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
};

export default PokedexScreen