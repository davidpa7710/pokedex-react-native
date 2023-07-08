import React, { useEffect, useState } from 'react'
import { ScrollView, Text } from 'react-native'
import { getPokemonDetailsApi } from '../../api/pokeapi';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5'

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
      <Type types={pokemon.types} />
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}

