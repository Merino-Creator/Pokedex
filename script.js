function init() {
    addSmallPokemonCard();
    usePokeData();
}

function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML += smallPokemonCardTemplate();
}

function changeMode() {
    
}