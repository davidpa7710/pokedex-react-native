import axios from "axios";

const BASE_URL = "https://pokeapi.co/api/v2";

const api = axios.create({
    baseURL: BASE_URL,
});

export const getPokemonList = async (limit, offset) => {
    try {
        const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);
        return response.data.results;
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
