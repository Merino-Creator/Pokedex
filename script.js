async function init() {
    await savePokeData(); 
    addSmallPokemonCard(); 
}

function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    for (let index = 0; index < allPokemon.length; index++) {
        smallCardRef.innerHTML += smallPokemonCardTemplate(index);
    }
}

function changeMode() {
    
}