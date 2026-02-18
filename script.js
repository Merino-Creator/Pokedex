function init() {
    addSmallPokemonCard();
    savePokeData();  
}

function addSmallPokemonCard() {
    let smallCardRef = document.getElementById('mainContainer');

    smallCardRef.innerHTML += smallPokemonCardTemplate();
}

function changeMode() {
    
}