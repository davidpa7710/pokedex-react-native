import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
    baseURL: BASE_URL,
});

export const getPokemonsApi = async (endPointUrl) => {
    try {
        const url = `${BASE_URL}/pokemon?limit=20&offset=0`
        const response = await api.get(endPointUrl || url);
        const result = await response.data
        return result
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getPokemonImage = async (pokemonUrl) => {
    try {
        const response = await axios.get(pokemonUrl);
        return response.data.sprites.front_default;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getPokemonDetailsByUrlApi = async (url) => {
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      throw error;
    }
  };
  export async function getPokemonDetailsApi(id) {
    try {
      const url = `${BASE_URL}/pokemon/${id}`;
      const response = await axios.get(url);
      const result = await response.data;
      return result;
    } catch (error) {
      throw error;
    }
  }
  