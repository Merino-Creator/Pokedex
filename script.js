let renderCount = 20;

async function init() {
    await savePokeData();
    addSmallPokemonCard(); 
}

async function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML = "";

    let max = Math.min(allPokemon.length, renderCount);

    for (let index = 0; index < max; index++) {
        let stats = await fetchPokeStats(index);
        smallCardRef.innerHTML += smallPokemonCardTemplate(stats);
    }
}

function loadMore() {
    renderCount += 20;
    addSmallPokemonCard();
}

function changeMode() {
    
}