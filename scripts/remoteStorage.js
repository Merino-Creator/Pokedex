BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";

let allPokemon = [];
let pokeStats = [];

async function fetchPokeData() {
    let response = await fetch(BASE_URL);
    let responseAsJson = await response.json();
    return responseAsJson;
}

async function savePokeData() {
    let pokeData = await fetchPokeData();
    allPokemon = pokeData.results;
}

async function fetchPokeStats(index) {
    let url = allPokemon[index].url;
    let response = await fetch(url);
    let stats = await response.json();
    pokeStats[index] = stats;
    return stats;
}

async function fetchPokemonByIdFromAll(id) {
    let index = allPokemon.findIndex(poke => poke.url.includes("/" + id + "/"));
    return await fetchPokeStats(index);
}