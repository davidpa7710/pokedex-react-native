import React from 'react';
import { View, Text, Image } from 'react-native';

const PokemonDetailsScreen = ({ route }) => {
  const { pokemon } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{pokemon.name}</Text>
      <Image source={{ uri: pokemon.image }} style={{ width: 200, height: 200, marginVertical: 16 }} />
    </View>
  );
};
 export default PokemonDetailsScreen


