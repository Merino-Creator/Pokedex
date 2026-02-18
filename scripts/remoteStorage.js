BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";

let allPokemon = [];
let pokeStats = [];

async function fetchPokeData() {  // wir ziehen uns die daten der url und lassen sie ausgeben
    let response = await fetch(BASE_URL);
    let responseAsJson = await response.json();
    return responseAsJson;
}

async function savePokeData() { // ich speichere die daten in einem array. (name und weitere url mit weiten daten)
    let pokeData = await fetchPokeData();
    allPokemon = pokeData.results;
}

async function fetchPokeStats(index) {  // ich ziehe die daten der url von den daten die ich schon habe
    let url = allPokemon[index].url;
    let response = await fetch(url);
    let stats = await response.json();  // ich gebe die daten wieder. 
    return stats;
}
