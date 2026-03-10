genOne_URL = "https://pokeapi.co/api/v2/pokemon?limit=151&offset=0";
genTwo_URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=151";
genThree_URL = "https://pokeapi.co/api/v2/pokemon?limit=135&offset=251";
genFour_URL = "https://pokeapi.co/api/v2/pokemon?limit=107&offset=386";

const genURLs = {
    1: genOne_URL,
    2: genTwo_URL,
    3: genThree_URL,
    4: genFour_URL
};

let currentGen = 1;
let allPokemon = [];
let pokeStats = [];

async function fetchPokeData() {
    let activeURL = genURLs[currentGen];
    let response = await fetch(activeURL);
    let responseAsJson = await response.json();
    return responseAsJson;
}

async function savePokeData() {
    pokeStats = [];
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

async function selectGeneration(gen) {
    currentGen = gen;
    renderCount = 20;
    smallCardRef.innerHTML ="";
    await savePokeData();
    await addSmallPokemonCard();
}