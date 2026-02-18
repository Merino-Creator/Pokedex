BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";

let allPokemon = [];

async function fetchPokeData(path="") {
    let response = await fetch(BASE_URL + path + ".json");
    let responseAsJson = await response.json();
    return responseAsJson;
}

async function savePokeData() {
    let pokeData = await fetchPokeData();
    allPokemon = pokeData.results;

    console.log(allPokemon);
}