let renderCount = 20;

async function init() {
    await savePokeData(); 
    addSmallPokemonCard(); 
}

function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML = "";

    let max = Math.min(allPokemon.length, renderCount);

    for (let index = 0; index < max; index++) {
        smallCardRef.innerHTML += smallPokemonCardTemplate(index);
    }
}

function loadMore() {
    renderCount += 20;
    addSmallPokemonCard();
}

function changeMode() {
    
}