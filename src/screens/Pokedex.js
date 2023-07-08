import React, { useEffect, useState } from 'react'
import { ScrollView, Text, FlatList, ActivityIndicator, View, Image, TouchableOpacity, TextInput } from 'react-native'
import { getPokemonList, getPokemonImage } from '../../api/pokeapi'
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/FontAwesome5"
import { PokemonDetailsScreen } from './PokemonDetailsScreen.js'



function PokedexScreen() {
    const navigation = useNavigation();
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [showSearchBar, setShowSearchBar] = useState(true);


    const handleSearch = (text) => {
        setSearchQuery(text.toLowerCase());
    };

    const handleToggleSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    };

    const filteredPokemonList = pokemonList.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    useEffect(() => {
        fetchPokemonList()
    }, [])
    const fetchPokemonList = async () => {
        try {
            const limit = 100;
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
    const handlePokemonPress = (pokemon) => {
        navigation.navigate('PokemonDetailsScreen', { pokemon });
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
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Pokedex</Text>
                <TouchableOpacity onPress={handleToggleSearchBar}>
                    <Text><Icon name="search" color="#000" size={25} /></Text>
                </TouchableOpacity>
            </View>
            {showSearchBar && (
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 16, borderRadius: 10 }}
                    placeholder="Search Pokemon"
                    value={searchQuery}
                    onChangeText={handleSearch}
                    keyboardType="web-search"
                />
            )}
            <ScrollView>
                {filteredPokemonList.map((pokemon) => (
                    <TouchableOpacity key={pokemon.name} onPress={() => handlePokemonPress(pokemon)}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 16 }}>
                            <Image source={{ uri: pokemon.image }} style={{ width: 50, height: 50, marginRight: 10 }} />
                            <Text>{pokemon.name}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    )
};

export default PokedexScreen