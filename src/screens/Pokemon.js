import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { getPokemonDetailsApi } from '../../api/pokeapi';
import Header from '../components/Pokemon/Header';

export default function Pokemon({ navigation, route }) {
  const { id } = route.params;
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await getPokemonDetailsApi(id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    };

    fetchPokemonDetails();
  }, [id, navigation]);

  if (!pokemon) return null;

  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}
      />
    </ScrollView>
  )
}

